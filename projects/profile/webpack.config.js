const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "profile",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "profile",
      filename: "profileRemoteEntry.js",
      exposes: {
        './ProfileSummaryModule': './projects/profile/src/app/profile-summary/profile-summary.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "shell": "shell@http://localhost:4200/remoteEntry.js",
      //     "sales": "sales@http://localhost:4200/remoteEntry.js",
      // "order": "order@http://localhost:4202/remoteEntry.js",
      //     "dashboard": "dashboard@http://localhost:4201/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "bootstrap": { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};



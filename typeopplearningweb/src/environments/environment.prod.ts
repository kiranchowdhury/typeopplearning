// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const packageJson = require('../../package.json');
export const environment = {
  appName: 'ePricer',
  envName: 'prod',
  production: true,
  api_url: '<configure backend api url here>',
  backend: 'cdtdev',
  base_url: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
  },
};

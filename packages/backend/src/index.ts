/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { CatalogClient } from '@backstage/catalog-client';
import {
  createDateAction,
  createGetGroupProfileAction,
  createNewFileAction,
  extractToolNameAction,
} from './plugins/scaffolder/actions/common';

const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin
// backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider
// For github login
backend.add(import('@backstage/plugin-auth-backend-module-github-provider'));
// For gitlab login
backend.add(import('@backstage/plugin-auth-backend-module-gitlab-provider'));
// Add gitlab auth provider module

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);

// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));
// See https://backstage.io/docs/permissions/getting-started for how to create your own permission policy
backend.add(
  import('@backstage/plugin-permission-backend-module-allow-all-policy'),
);

// search plugin
backend.add(import('@backstage/plugin-search-backend'));

// search engine
// See https://backstage.io/docs/features/search/search-engines
backend.add(import('@backstage/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// kubernetes
backend.add(import('@backstage/plugin-kubernetes-backend'));

// github dicovery
backend.add(import('@backstage/plugin-catalog-backend-module-github'));

// Register custom actions
const scaffolderModuleCustomExtensions = createBackendModule({
  pluginId: 'scaffolder', // name of the plugin that the module is targeting
  moduleId: 'custom-extensions',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        discovery: coreServices.discovery,
        // ... and other dependencies as needed
      },
      async init({
        scaffolder,
        config,
        discovery /* ..., other dependencies */,
      }) {
        const catalogClient = new CatalogClient({ discoveryApi: discovery });

        // Here you have the opportunity to interact with the extension
        // point before the plugin itself gets instantiated

        // Create a new file
        scaffolder.addActions(createNewFileAction());
        // Add the custom date action
        scaffolder.addActions(createDateAction());
        // Add the get group profile action
        scaffolder.addActions(createGetGroupProfileAction(catalogClient));
        // Add the extract tool name action
        scaffolder.addActions(extractToolNameAction());
      },
    });
  },
});

backend.add(scaffolderModuleCustomExtensions);

backend.start();

import { App, Component } from 'vue';
import { Components } from '../types/components';
/**
 * Register a component
 * @param {object} app
 * @param {string} name
 * @param {object} component
 */
const registerComponent = (app: App, name: string, component: Component) => {
  if (app && name && component) {
    app.component(name, component);
  }
};

/**
 * Register a group of components
 * @param {object} app
 * @param {object} components
 */
const registerComponents = (app: App, components: Components = {}) => {
  for (const name in components) {
    registerComponent(app, name, components[name]);
  }
};

/**
 * Plugin install factory function
 * @param {object} options
 * @param {boolean} globalConfig
 * @returns {function}
 */
export const installFactory = ({ components = {} } = {}) => {
  const install = (app: App) => {
    if (install.installed) {
      return;
    }

    registerComponents(app, components);
    install.installed = true;
  };

  install.installed = false;

  return install;
};

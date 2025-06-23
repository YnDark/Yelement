import { App } from "vue";
import Icon from "./Icon.vue";

Icon.install = (app:App) => {
  app.component(Icon.name || "Unnamed", Icon);
  return app;
}

export default Icon;

export * from './types'

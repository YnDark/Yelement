import { App } from "vue";
import Switch from "./Switch.vue";

Switch.install = (app:App) => {
  app.component(Switch.name || "Unnamed", Switch);
  return app;
}

export default Switch;

export * from './types'

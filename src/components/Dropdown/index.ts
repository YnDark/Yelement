import { App } from "vue";
import Dropdown from "./Dropdown.vue";

Dropdown.install = (app:App) => {
  app.component(Dropdown.name || "Unnamed", Dropdown);
  return app;
}

export default Dropdown;

export * from './types'

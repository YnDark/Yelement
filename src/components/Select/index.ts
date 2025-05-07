import { App } from "vue";
import Select from "./Select.vue";

Select.install = (app:App) => {
  app.component(Select.name || "Unnamed", Select);
  return app;
}

export default Select;

export * from './types'

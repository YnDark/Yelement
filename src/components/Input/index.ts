import { App } from "vue";
import Input from "./Input.vue";

Input.install = (app:App) => {
  app.component(Input.name || "Unnamed", Input);
  return app;
}

export default Input;

export * from './types'

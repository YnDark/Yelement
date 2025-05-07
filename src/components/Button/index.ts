import { App } from "vue";
import Button from "./Button.vue";

Button.install = (app:App) => {
  app.component(Button.name || "Unnamed", Button);
  return app;
}

export default Button;

export * from './types'

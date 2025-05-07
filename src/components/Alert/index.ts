import { App } from "vue";
import Alert from "./Alert.vue";

Alert.install = (app:App) => {
  app.component(Alert.name || "Unnamed", Alert);
  return app;
}

export default Alert;

export * from './types'

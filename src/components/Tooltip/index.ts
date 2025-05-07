import { App } from "vue";
import Tooltip from "./Tooltip.vue";

Tooltip.install = (app:App) => {
  app.component(Tooltip.name || "Unnamed", Tooltip);
  return app;
}

export default Tooltip;

export * from './types'

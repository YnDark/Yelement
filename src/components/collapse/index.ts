import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import type { App } from "vue";
Collapse.install = (app: App) => {
  app.component(Collapse.name || "Unnamed", Collapse);
  return app;
}
CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name || "Unnamed", CollapseItem);
  return app;
};
export default Collapse;
export { CollapseItem };
export * from "./types";

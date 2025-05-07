import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import type { App } from "vue";
Form.install = (app: App) => {
  app.component(Form.name || "Unnamed", Form);
  return app;
}
FormItem.install = (app: App) => {
  app.component(FormItem.name || "Unnamed", FormItem);
  return app;
};
export default Form;
export { FormItem };
export * from "./types";

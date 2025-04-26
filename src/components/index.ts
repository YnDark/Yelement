import Button from './Button/Button.vue'
import Collapse from './Collapse/Collapse.vue';
import Icon from './Icon/Icon.vue';
import CollapseItem from './Collapse/CollapseItem.vue';
import Alert from './Alert/Alert.vue';
import ToolTip from './Tooltip/Tooltip.vue'
import Dropdown from './Dropdown/Dropdown.vue';
import Input from './Input/Input.vue';
import Switch from './Switch/Switch.vue';
import Select from './Select/Select.vue';
import Form from './Form/Form.vue';
import FormItem from './Form/FormItem.vue'
import type { App } from 'vue'
const components = [FormItem,Form,Select,Switch,Button,Collapse,Icon,CollapseItem,Alert,ToolTip,Dropdown,Input]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name || 'UnName', component);
  });
};

export default {
  install
}


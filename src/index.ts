import Button from './components/Button'
import Collapse,{CollapseItem} from './components/Collapse';
import Icon from './components/Icon';
import Alert from './components/Alert';
import ToolTip from './components/Tooltip'
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Switch from './components/Switch';
import Select from './components/Select';
import Form,{FormItem} from './components/Form';
import Message,{createMessage} from './components/Message';
import type { App } from 'vue'
import './styles/index.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)
const components = [Message,FormItem,Form,Select,Switch,Button,Collapse,Icon,CollapseItem,Alert,ToolTip,Dropdown,Input]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name || 'UnName', component);
  });
};
export {
  install,
  Form,
  FormItem,
  Select,
  Switch,
  Button,
  Collapse,
  Icon,
  CollapseItem,
  Alert,
  ToolTip,
  Dropdown,
  Input,
  createMessage
}

export default {
  install
}


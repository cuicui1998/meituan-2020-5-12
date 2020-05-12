// element-ui 按需导入有专门的笔记 记录怎么导入
import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Main,
    Footer,
    Row, 
    Col
} from 'element-ui';

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
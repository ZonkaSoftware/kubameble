import { a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_C9cf1Kgw.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":true,\"attributes\":{\"content\":\"StartFragmentLorem ipsum dolor sit amet, consectetur adipiscing elit. In at ullamcorper ante, eu faucibus metus. Donec sit amet ornare tellus, ac iaculis lorem. Quisque gravida venenatis odio, a gravida libero aliquam sit amet. Nullam luctus rutrum mauris, sit amet viverra magna pellentesque sit amet. Aliquam non molestie metus, a vestibulum leo. Ut pellentesque nibh tellus, et posuere purus placerat nec. Maecenas convallis accumsan ipsum eget facilisis. Vestibulum scelerisque nulla eu ex tristique, in ultricies lacus lobortis\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };

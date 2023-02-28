import Body from './Body/Body';
import List from './List/List';
import Template from './Template/Template';

const Selectbox: {
  List: typeof List;
  Template: typeof Template;
  Body: typeof Body;
} = {
  List,
  Template,
  Body,
};

export default Selectbox;

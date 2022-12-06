import Rainfall from './Rainfall';

export default {
  title: 'Effects/Rainfall',
  component: Rainfall,
  parameters: {
    componentSubtitle: 'Rainfall',
  },
};

export const rainfall = () => {
  return <Rainfall frequency={100} rainColor='rgb(164, 164, 164)' />;
};

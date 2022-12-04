import Snowflake from './Snowflake';

export default {
  title: 'Effects/Snowflake',
  component: Snowflake,
  parameters: {
    componentSubtitle: 'Snowflake',
  },
};

export const snowflake = (): JSX.Element => {
  return <Snowflake frequency={100} />;
};

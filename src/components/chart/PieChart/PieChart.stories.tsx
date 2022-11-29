import PieChart from './PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
  parameters: {
    componentSubtitle: 'PieChart',
  },
};

export const pieChart = (): JSX.Element => {
  return <PieChart />;
};

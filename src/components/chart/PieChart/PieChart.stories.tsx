import { Story } from '@storybook/react';

import PieChart from './PieChart';
import { PieChartArgs } from './types';

export default {
  title: 'Chart/PieChart',
  component: PieChart,
  parameters: {
    componentSubtitle: 'PieChart',
  },
};

const pieChartTemplate = (args: PieChartArgs) => <PieChart {...args} />;

export const cssPieChart: Story<PieChartArgs> = pieChartTemplate.bind({});
cssPieChart.args = {
  type: 'css',
};

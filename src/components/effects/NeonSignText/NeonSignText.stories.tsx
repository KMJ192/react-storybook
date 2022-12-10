import { Story } from '@storybook/react';

import NeonSignText from './NeonSignText';
import { NeonSignStoryArgs } from './types';

export default {
  title: 'Effects/NeonSignText',
  component: NeonSignText,
  parameters: {
    componentSubtitle: 'NeonSignText',
  },
};

const neonSignTextTemplate = (args: NeonSignStoryArgs) => {
  return <NeonSignText {...args} />;
};

export const neonSignText: Story<NeonSignStoryArgs> = neonSignTextTemplate.bind(
  {},
);
neonSignText.args = {
  text: [
    {
      font: 'M',
      color: 'red',
      type: 0,
    },
    {
      font: 'e',
      color: 'red',
      type: 0,
    },
    {
      font: 'r',
      color: 'red',
      type: 0,
    },
    {
      font: 'r',
      color: 'red',
      type: 0,
    },
    {
      font: 'y',
      color: 'red',
      type: 0,
    },
    {
      font: '',
      color: '',
      type: 1,
    },
    {
      font: 'C',
      color: 'red',
      type: 0,
    },
    {
      font: 'h',
      color: 'red',
      type: 0,
    },
    {
      font: 'r',
      color: 'red',
      type: 0,
    },
    {
      font: 'i',
      color: 'red',
      type: 0,
    },
    {
      font: 't',
      color: 'red',
      type: 0,
    },
    {
      font: 'm',
      color: 'red',
      type: 0,
    },
    {
      font: 'a',
      color: 'red',
      type: 0,
    },
    {
      font: 's',
      color: 'red',
      type: 0,
    },
  ],
};

import React, { useState } from 'react';

import Switch from './Switch';

export default {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch',
  },
};

export const primarySwitch = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const onClick = (e: React.FormEvent<HTMLSpanElement>) => {
    setChecked((checked) => !checked);
  };
  return <Switch as='div' checked={checked} onClick={onClick} />;
};

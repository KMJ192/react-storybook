import React, { useState } from 'react';

import Selectbox from './Selectbox';

export default {
  title: 'UI/Selectbox',
  component: Selectbox,
  parameters: {
    componentSubtitle: 'Selectbox',
  },
};

export const primarySelectbox = (): JSX.Element => {
  const [show, isShow] = useState(false);

  return (
    <Selectbox.Template
      style={{
        width: '340px',
      }}
    >
      <Selectbox.Body
        onClick={() => {
          isShow(!show);
        }}
      >
        body
      </Selectbox.Body>
      <Selectbox.List show={show}>
        <Selectbox.List.Item>Option1</Selectbox.List.Item>
        <Selectbox.List.Item>Option2</Selectbox.List.Item>
        <Selectbox.List.Item>Option3</Selectbox.List.Item>
        <Selectbox.List.Item>Option4</Selectbox.List.Item>
        <Selectbox.List.Item>Option5</Selectbox.List.Item>
        <Selectbox.List.Item>Option6</Selectbox.List.Item>
      </Selectbox.List>
    </Selectbox.Template>
  );
};

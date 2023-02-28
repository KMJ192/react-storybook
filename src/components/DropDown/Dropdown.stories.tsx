import React, { useState } from 'react';

import Dropdown from './Dropdown';

import classNames from 'classnames/bind';
import style from './test.module.scss';
const cx = classNames.bind(style);

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: 'Dropdown',
  },
};

export const primaryDropdown = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        dropdown
      </button>
      <Dropdown.Template
        style={{
          width: '300px',
        }}
      >
        <Dropdown.Box
          show={show}
          animationAction='down'
          animationType='spread'
          style={{}}
        >
          <div className={cx('test')}>dropdown</div>
        </Dropdown.Box>
      </Dropdown.Template>
    </div>
  );
};

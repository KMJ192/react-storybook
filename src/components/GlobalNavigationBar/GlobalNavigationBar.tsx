import { forwardRef, useEffect, useState } from 'react';
import type { ElementType, ReactNode, Ref } from 'react';

import type { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import NavGroup from './NavGroup/NavGroup';
import NavItem from './NavItem/NavItem';

import classNames from 'classnames/bind';
import style from './GlobalSideNavigationBar.module.scss';
const cx = classNames.bind(style);

export type NavType = {
  element: ReactNode;
  opened?: boolean;
  children?: Array<NavType>;
};

type BaseProps = {
  top: ReactNode;
  mid: ReactNode;
  bot: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'nav';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function GNB<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { top, mid = [], bot, as, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element {...props} ref={ref} className={cx(props.className, 'nav')}>
      <div className={cx('top')}>{top}</div>
      <div className={cx('mid')}>{mid}</div>
      <div className={cx('bot')}>{bot}</div>
    </Element>
  );
}

const GlobalSideNavigationBar = Object.assign(forwardRef(GNB) as typeof GNB, {
  NavGroup,
  NavItem,
});

export default GlobalSideNavigationBar;

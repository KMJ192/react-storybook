import { ElementType, forwardRef, ReactNode, Ref } from 'react';

import type { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './NavGroup.module.scss';
import NavItem from '../NavItem/NavItem';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  opened?: boolean;
  depth?: number;
  items?: ReactNode;
  itemsLen?: number;
  children?: ReactNode;
};

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function NavGroup<T extends ElementType>(
  {
    selected = false,
    opened = false,
    depth = 1,
    items,
    itemsLen = 0,
    children,
    as,
    ...props
  }: Props<T>,
  ref: Ref<any>,
) {
  console.log(opened, itemsLen * 48);
  return (
    <>
      <NavItem
        {...props}
        ref={ref}
        className={props.className}
        selected={selected}
        depth={depth}
      >
        {children}
      </NavItem>
      <div
        className={cx(
          'nav-group',
          depth === 1 && 'second-depth',
          opened && 'opened',
        )}
        style={{
          marginLeft: `${depth * 16}px`,
          height: opened ? `${itemsLen * 64}px` : '0px',
        }}
      >
        {items}
      </div>
    </>
  );
}

export default Object.assign(forwardRef(NavGroup) as typeof NavGroup, {
  NavItem,
});

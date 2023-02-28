import React, { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import Item from '../Item/Item';
import Dropdown from '../../DropDown/Dropdown';

import classNames from 'classnames/bind';
import style from './List.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  show?: boolean;
  animationAction?: 'down' | 'up';
  animationType?: 'slide' | 'fade';
  children?: ReactNode;
};

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function L<T extends ElementType>(
  {
    show = false,
    animationAction = 'down',
    animationType = 'slide',
    children,
    as,
    ...props
  }: Props<T>,
  ref: Ref<any>,
) {
  return (
    <Dropdown.Template {...props}>
      <Dropdown.Box show={show} animationType='slide'>
        {children}
      </Dropdown.Box>
    </Dropdown.Template>
  );
}

const List = Object.assign(forwardRef(L) as typeof L, {
  Item,
});

export default List;

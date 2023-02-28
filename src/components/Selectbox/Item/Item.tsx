import React, { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import Dropdown from '@src/components/DropDown/Dropdown';

import classNames from 'classnames/bind';
import style from './Item.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Item<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { selected, children, as, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element ref={ref} {...props} className={cx('item', props.className)}>
      {children}
    </Element>
  );
}

export default forwardRef(Item) as typeof Item;

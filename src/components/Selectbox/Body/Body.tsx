import React, { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './Body.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Body<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { selected, children, as, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element ref={ref} {...props} className={cx('body', props.className)}>
      {children}
    </Element>
  );
}

export default forwardRef(Body) as typeof Body;

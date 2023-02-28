import React, { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './Box.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  show?: boolean;
  animationAction?: 'down' | 'up';
  // slide -> position fixed일때 사용할 수 없음
  // spread -> list의 높이를 정해주어야 됨
  animationType?: 'fade' | 'slide' | 'spread';
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Box<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  {
    show = false,
    animationAction = 'up',
    animationType = 'spread',
    children,
    as,
    ...props
  }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element
      {...props}
      ref={ref}
      className={cx(
        'box',
        animationAction,
        animationType,
        !show && 'closed',
        props.className,
      )}
    >
      {children}
    </Element>
  );
}

export type { BaseProps as DropDownBoxProps };
export default forwardRef(Box) as typeof Box;

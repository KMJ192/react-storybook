import React, { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './Template.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Template<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { as, children, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element {...props} className={cx('selectbox', props.className)}>
      {children}
    </Element>
  );
}

export default forwardRef(Template) as typeof Template;

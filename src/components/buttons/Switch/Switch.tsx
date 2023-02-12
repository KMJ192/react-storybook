import { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './Switch.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  checked: boolean;
  variant?: '';
  disabled?: boolean;
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'span';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Switch<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  props: Props<T>,
  ref: Ref<any>,
) {
  const Component = props.as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Component
      {...props}
      ref={ref}
      onClick={props.disabled ? undefined : props.onClick}
      className={`${props.className ? `${props.className} ` : ''}${cx(
        'switch',
        props.checked && 'checked',
        props.disabled && 'disabled',
      )}`}
    />
  );
}

export default forwardRef(Switch) as typeof Switch;

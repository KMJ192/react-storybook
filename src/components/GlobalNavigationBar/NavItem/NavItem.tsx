import { ElementType, forwardRef, ReactNode, Ref } from 'react';

import type { OVERRIDABLE_PROPS } from '@src/types/utilityTypes';

import classNames from 'classnames/bind';
import style from './NavItem.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  depth?: number;
  selected?: boolean;
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function NavItem<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { selected = false, depth = 1, children, as, ...props }: Props<T>,
  ref: Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element
      {...props}
      ref={ref}
      className={cx(
        props.className,
        'nav-item',
        selected && 'selected',
        depth === 3 && 'third-depth',
      )}
    >
      {children}
    </Element>
  );
}

export default forwardRef(NavItem) as typeof NavItem;

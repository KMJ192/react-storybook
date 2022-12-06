import type { Properties as CSSType } from 'csstype';

import classNames from 'classnames/bind';
import style from './Rainfall.module.scss';
const cx = classNames.bind(style);

type Props = {
  frequency: number;
  rainColor: string;
  customStyle?: CSSType;
};

function Rainfall({ frequency, rainColor, customStyle }: Props) {
  return (
    <div className={cx('rainfall')} style={customStyle}>
      {Array.from({ length: frequency }, () => 0).map((_, idx) => {
        const animation = Math.floor(Math.random() * 98 + 1);
        const fiver = Math.floor(Math.random() * 4 + 1);
        const increment = idx + fiver;
        return (
          <div
            className={cx('drop')}
            key={idx}
            style={{
              left: `${increment}%`,
              bottom: `${fiver * 2 - 1 + 100}%`,
              animationDelay: `0.${animation}s`,
              animationDuration: `0.5${animation}s`,
            }}
          >
            <div
              className={cx('stem')}
              style={{
                animationDelay: `0.${animation}s`,
                animationDuration: `0.5${animation}s`,
                background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${rainColor})`,
              }}
            ></div>
            <div
              className={cx('spatter')}
              style={{
                animationDelay: `0.${animation}s`,
                animationDuration: `0.5${animation}s`,
                borderTop: `2px dotted ${rainColor}`,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Rainfall;

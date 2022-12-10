import { Properties as CSSProperties } from 'csstype';

import type { FontType } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  text: Array<FontType>;
  customStyle?: CSSProperties;
};

function NeonSignText({ text, customStyle }: Props) {
  return (
    <div className={cx('neon-text')} style={customStyle}>
      {text.map(({ font, color, type }: FontType, idx: number) => {
        const key = `${font}-${idx}`;
        if (type === 1) {
          <div
            key={key}
            style={{
              marginRight: '4px',
            }}
          >
            &nbsp;
          </div>;
        }
        return (
          <div
            key={key}
            style={{
              animationDelay: `${idx + 1}s`,
            }}
          >
            {font}
          </div>
        );
      })}
    </div>
  );
}

export default NeonSignText;

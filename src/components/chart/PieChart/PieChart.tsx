import { useRef, useEffect } from 'react';

import type { Properties as CSSProperties } from 'csstype';

import classNames from 'classnames/bind';
import style from './PieChart.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: 'canvas' | 'css';

  // customStyle?: CSSProperties;
};

// https://www.freecodecamp.org/news/css-only-pie-chart/

function PieChart({ type }: Props) {
  // import('@wasm/pkg').then(async (wasm) => {
  //   (await wasm.default()).console();
  // });
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.style.setProperty('--per', '60');
      chart.style.setProperty('--bold', '10px');
      chart.style.setProperty('--data-color', 'skyblue');
      chart.style.setProperty('--width', '140px');
      chart.style.setProperty('--null-color', 'gray');
    }
  }, []);

  return (
    <div className={cx('chart-body')}>
      <div ref={chartRef} className={cx('pie-chart', 'animation')} style={{}}>
        60%
      </div>
      <div className={cx('chart-back')}></div>
    </div>
  );
}

PieChart.defaultProps = {};

export default PieChart;

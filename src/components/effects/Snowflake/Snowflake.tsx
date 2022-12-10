import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  frequency: number;
};

function Snowflake({ frequency }: Props): JSX.Element {
  return (
    <>
      {Array.from({ length: frequency }, () => 0).map((_, idx) => (
        <div className={cx('snowflake')} key={idx}></div>
      ))}
    </>
  );
}

export default Snowflake;

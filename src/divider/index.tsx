import React from 'react';
import './style/index.scss';
import classNames from 'classnames';

interface DividerProps {
  shape?: string;
  orientation?: boolean;
  children?: React.ReactNode;
}
const Divider = (props: DividerProps) => {
  const { shape, children, orientation = 'center' } = props;

  const classes = classNames('rong-divider', {
    [`rong-divider-${orientation}`]: orientation,
    [`rong-divider-${shape}`]: shape,
  });
  return <div className={classes}>{children}</div>;
};

export default Divider;

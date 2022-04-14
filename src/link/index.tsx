import React from 'react';
import './style/index.scss';
import classNames from 'classnames';

interface LinkProps {
  status?: string;
  disabled?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
  href?: string;
}
const Link = (props: LinkProps) => {
  const { status, disabled, hoverable, children, href } = props;

  const classes = classNames('rong-link', {
    [`rong-link-${status}`]: status,
    [`rong-link-disabled`]: disabled,
    [`rong-link-hoverable`]: hoverable,
  });
  return (
    <div style={{ cursor: 'not-allowed', display: 'inline-block' }}>
      <a className={classes} href={href}>
        {children}{' '}
      </a>
    </div>
  );
};

export default Link;

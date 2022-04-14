import React, { PropsWithChildren, useEffect, useRef } from 'react';
import './style/index.scss';
import classNames from 'classnames';

interface AvatarProps {
  shape?: string;
  size?: number;
  onClick?: any;
  children?: React.ReactNode;
}
const Avatar = (props: PropsWithChildren<AvatarProps>) => {
  const { shape = 'circle', children, onClick, size = 40 } = props;
  const style = { ...props.style };
  const textRef = useRef();

  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    ...style,
  };

  useEffect(() => {
    autoFixFontSizeHandler();
  }, [size, children]);

  const isImage =
    children &&
    React.isValidElement(children) &&
    (children.type === 'img' || children.type === 'picture');

  // auto adjust font size
  function autoFixFontSizeHandler() {
    if (textRef.current) {
      const textWidth = textRef.current.clientWidth;
      const tmpSize = size || textRef.current.offsetWidth;
      const scale = tmpSize / (textWidth + 8);
      textRef.current.style.transform = `none`;
      textRef.current.style.transform = ` translateX(-50%)`;
      if (tmpSize && scale < 1) {
        textRef.current.style.transform = `scale(${scale}) translateX(-50%)`;
      }
    }
  }

  const classes = classNames('rong-avatar', {
    [`rong-avatar-${shape}`]: shape,
  });

  return (
    <div onClick={onClick} className={classes} style={avatarStyle}>
      {isImage ? (
        <span className={'rong-avatar-img'}>{children}</span>
      ) : (
        <span ref={textRef} className={'rong-avatar-text'}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Avatar;

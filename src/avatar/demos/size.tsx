import React from 'react';
import { Avatar } from 'rongx-ui';

export default () => (
  <div style={{ lineHeight: '60px' }}>
    <Avatar size="70" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <Avatar size="60" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <Avatar size="50" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <br />
    <Avatar size="70" shape="square" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <Avatar size="60" shape="square" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <Avatar size="50" shape="square" style={{ marginRight: '15px' }}>
      Rong
    </Avatar>
    <br />
    <Avatar size="70" style={{ marginRight: '15px' }}>
      <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </Avatar>
    <Avatar size="60" style={{ marginRight: '15px' }}>
      <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </Avatar>
    <Avatar size="50">
      <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </Avatar>
  </div>
);

import React from 'react';
import { Avatar } from 'rongx-ui';

export default () => (
  <div>
    <Avatar
      style={{
        backgroundColor: '#cacdd3',
        marginRight: '15px',
        color: '#42afda',
      }}
    >
      R
    </Avatar>
    <Avatar style={{ backgroundColor: '#14a9f8', marginRight: '15px' }}>
      Rong
    </Avatar>
    <Avatar style={{ backgroundColor: '#00d0b6', marginRight: '15px' }}>
      RongDesign
    </Avatar>
    <Avatar>
      <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </Avatar>
  </div>
);

import React from 'react';
import { Divider } from 'rongx-ui';

export default () => (
  <div>
    <Divider />
    <br />
    <Divider>分割线</Divider>
    <Divider orientation="left">左分割线</Divider>
    <Divider orientation="right">右分割线</Divider>
    <Divider shape="dotted" orientation="right">
      点线分割线
    </Divider>
    <Divider shape="dashed" orientation="left">
      虚线分割线
    </Divider>
  </div>
);

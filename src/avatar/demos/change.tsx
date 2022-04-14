import React, { useState } from 'react';
import { Avatar, Button } from 'rongx-ui';

export default () => {
  const [index, setIndex] = useState(0);
  const list = ['R', 'Rong', 'RongA', 'RongAB', 'RongDesign'];
  return (
    <div>
      <Avatar
        size="50"
        style={{
          backgroundColor: '#14a9f8',
          verticalAlign: 'middle',
          marginRight: '15px',
        }}
      >
        {list[index]}
      </Avatar>
      <Button
        type="dashed"
        size="sm"
        style={{ verticalAlign: 'middle' }}
        onClick={() => setIndex(index >= 4 ? 0 : index + 1)}
      >
        修改字体
      </Button>
    </div>
  );
};

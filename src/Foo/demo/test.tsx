import React, { useEffect, useRef, useState } from 'react';

export default () => {
  const list = [
    'Bqqq',
    'Arcoq',
    'Design',
    'Toadasdm',
    'ADqqqqqqq',
    'fsdfsdfsffsfsfsdf',
  ];
  const [index, setIndex] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    autoFixFontSizeHandler();
  }, [index]);
  const divSize = 60;

  // auto adjust font size
  function autoFixFontSizeHandler() {
    if (textRef.current) {
      const textWidth = textRef.current.clientWidth;
      const size = divSize || textRef.current.offsetWidth;
      const scale = size / (textWidth + 8);
      textRef.current.style.transform = `none`;
      console.log(textWidth, size, scale);
      if (size && scale < 1) {
        textRef.current.style.transform = `scale(${scale}) `;
        textRef.current.style.transformOrigin = `10px ${divSize / 2}px `;
      }
    }
  }

  return (
    <div>
      <div
        style={{
          width: divSize,
          fontSize: '25',
          height: divSize,
          backgroundColor: 'yellow',
          borderRadius: '50%',
          textAlign: 'center',
          lineHeight: `${divSize}px`,
        }}
      >
        <span style={{ display: 'inline-block' }} ref={textRef}>
          {' '}
          {list[index]}
        </span>
      </div>
      <button onClick={() => setIndex(index >= 5 ? 0 : index + 1)}>确认</button>
    </div>
  );
};

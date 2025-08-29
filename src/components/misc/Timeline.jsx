import React, { useState } from 'react';
import { Radio, Timeline as AntTimeline } from 'antd';

// Plain JSX version (no TypeScript types) exporting as Timeline
const Timeline = () => {
  const [mode, setMode] = useState('left'); // 'left' | 'alternate' | 'right'

  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div>
      <AntTimeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </div>
  );
};
export default Timeline;
import React from 'react';
import DraggableComponent from './DraggableComponent';

const Toolkit: React.FC = () => {
  const components: string[] = ['Button', 'TextBox', 'Radio', 'Checkbox'];
 
  return (
    <div>
      <h3>Toolkit</h3>
      {components.map((comp) => (
        <DraggableComponent key={comp} type={comp} />
      ))}
    </div>
  );
};

export default Toolkit;

import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableComponentProps {
  type: string;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const renderComponent = (components:string) => {
    switch (components) {
      case 'TextBox':
        return <input type="text" placeholder="TextBox" />;
      case 'Button':
        return <button className='bg-blue-400 w-full rounded-lg hover:bg-blue-600'>Button</button>;
      case 'Radio':
        return <input type="radio" />;
      case 'Checkbox':
        return <input type="checkbox" />;
      default:
        return null;
    }
  };
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        margin: '5px 0',
        // padding: '8px',
        // border: '1px solid #000',
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* {type} */}
      {renderComponent(type)}
    </div>
  );
};

export default DraggableComponent;

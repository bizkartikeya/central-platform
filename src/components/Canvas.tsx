import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

interface DroppedComponent {
  id: number;  // Added an id to uniquely identify each component
  type: string;
}

const Canvas: React.FC = () => {
  const [droppedComponents, setDroppedComponents] = useState<DroppedComponent[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: Omit<DroppedComponent, 'id'>) => addComponentToCanvas(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponentToCanvas = (item: Omit<DroppedComponent, 'id'>) => {
    setDroppedComponents((components) => [
      ...components,
      { ...item, id: components.length + 1 },
    ]);
  };

  // Function to render the component based on its type
  const renderComponent = (component: DroppedComponent) => {
    switch (component.type) {
      case 'TextBox':
        return <input type="text" placeholder="Enter text" />;
      case 'Button':
        return <button className='bg-blue-400 w-full rounded-lg hover:bg-blue-600'>Click Me</button>;
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
      ref={drop}
      style={{
        backgroundColor: isOver ? '#f8f8f8' : '#fff',
        minHeight: '500px',
        padding: '10px',
      }}
    >
      <h3>Canvas</h3>
      {droppedComponents.map((component) => (
        <div
          key={component.id}
          style={{
            margin: '10px',
            padding: '8px',
            border: '1px solid #ccc',
          }}
        >
          {renderComponent(component)}
        </div>
      ))}
    </div>
  );
};

export default Canvas;

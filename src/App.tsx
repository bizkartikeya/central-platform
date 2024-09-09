import React from 'react';
import Toolkit from './components/Toolkit';
import Canvas from './components/Canvas';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="toolkit">
          <Toolkit />
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;

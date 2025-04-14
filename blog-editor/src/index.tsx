import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import './styles/editor.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Blog Editor</h1>
      <Editor />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
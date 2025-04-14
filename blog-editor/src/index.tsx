import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/editor.css';

const App = () => {
    const [content, setContent] = React.useState('');

    const handleContentChange = (newContent: string) => {
        setContent(newContent);
    };

    return (
        <div className="blog-editor">
            <Editor onContentChange={handleContentChange} />
            <Preview content={content} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
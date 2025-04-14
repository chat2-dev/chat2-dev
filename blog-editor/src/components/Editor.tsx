import React, { useState } from 'react';
import './editor.css';

const Editor = () => {
    const [content, setContent] = useState<string>('');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleContentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        setContent(e.target.innerHTML);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const applyStyle = (command: string, value?: string) => {
        document.execCommand(command, false, value || '');
    };

    const insertImage = () => {
        const url = prompt('Enter image URL:');
        if (url) {
            applyStyle('insertImage', url);
        }
    };

    return (
        <div className={`editor-container ${theme}`}>
            <div className="toolbar">
                <button onClick={() => applyStyle('bold')}>Bold</button>
                <button onClick={() => applyStyle('italic')}>Italic</button>
                <button onClick={() => applyStyle('underline')}>Underline</button>
                <button onClick={() => applyStyle('foreColor', 'black')}>Black</button>
                <button onClick={() => applyStyle('foreColor', 'goldenrod')}>Golden</button>
                <button onClick={() => applyStyle('foreColor', 'white')}>White</button>
                <button onClick={insertImage}>Add Image</button>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                </button>
            </div>
            <div
                className="editor"
                contentEditable
                onInput={handleContentChange}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
        </div>
    );
};

export default Editor;
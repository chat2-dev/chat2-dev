import React, { useState } from 'react';
import './editor.css';

const Editor = () => {
    const [content, setContent] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        // Logic to save content (e.g., API call or local storage)
        console.log('Content saved:', content);
    };

    return (
        <div className="editor-container">
            <textarea
                className="editor-textarea"
                value={content}
                onChange={handleInputChange}
                placeholder="Write your blog post here..."
            />
            <button className="editor-save-button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default Editor;
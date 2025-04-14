import React from 'react';

interface PreviewProps {
    content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
    return (
        <div className="preview">
            <h2>Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default Preview;
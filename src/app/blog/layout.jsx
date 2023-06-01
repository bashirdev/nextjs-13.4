import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
        <h1>Hi this bloglayout </h1>
            {children}
        </div>
    );
};

export default BlogLayout;
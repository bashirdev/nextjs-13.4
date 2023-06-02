import React from 'react';
import styles from './page.module.css'
const BlogLayout = ({children}) => {
    return (
        <div>
        <h1>Hi this bloglayout </h1>
            {children}
        </div>
    );
};

export default BlogLayout;
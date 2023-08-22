import React from 'react';

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    // 8 - ENUM
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

const SecondComponent = ({title, content, commentsQty, tags, category}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h4>Categoria: {category}</h4>
        </div>
    );
}

export default SecondComponent;
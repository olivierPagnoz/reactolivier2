import React from 'react';

const Article = (props) => {
    const { article } = props;
    return (
        <div className='article'>
            <div className='card-header'>
                <h3>{article.titre}</h3>
           </div>
           <p>{article.date}</p>
           <p>{article.message}</p>
           
        </div>
    );
};

export default Article;
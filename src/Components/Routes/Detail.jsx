import React, { useEffect, useState } from 'react'
import { allArticles } from './Features';
import { useParams } from 'react-router-dom';

export const Detail = () => {

    const params = useParams();
    const [detailNew, setDetailNew] = new useState();
    const articles = allArticles;

    useEffect(() => {
        let news = articles.filter(article => article.title === params.title.slice(1, params.title.length));
        setDetailNew(news[0]);
    }, [])

    if (detailNew) {
        return (
            <article className='details-content'>
                <h2 className='details-title'>{detailNew.title}</h2>
                <div className="image-details-content">
                    <img className="details-image" src={detailNew.urlToImage} alt={detailNew.title} title={detailNew.title} />
                </div>
                <h3 className='description-details'>{detailNew.description}</h3>
                <p className='content-paragraph-details'>{detailNew.content}</p>
                <p className='source-details'>{detailNew.source.name}</p>
            </article>
        )
    }
}

export default Detail; 

import React, { useEffect, useState } from 'react'
import { actualStorage, deleteStorage } from '../LocalStorage'
import { Link } from 'react-router-dom';

export const Saves = () => {

    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const data = actualStorage('savedNews');
        setSaved(data);
    }, [])

    const deleteNew = article => {
        deleteStorage(article,setSaved); 
    }

    return (
        <div className='saved-content display-center'>
            <h1>Noticias Guardadas</h1>
            <section className="news display-center">
                {
                    saved.map((article, index) => {
                        return (
                            <article key={`${article.id}${index}`} className='story-new-content display-center' >
                                <div className="image-story-content">
                                    <img src={article.urlToImage} alt={article.title} title={article.title} className="image-story" />
                                </div>
                                <div className='info-story-content'>
                                    <h2 className='title-story'>{article.title.length > 60 ? `${article.title.slice(0, 60)}...` : article.title}.</h2>
                                    <h3 className='description seconds-descriptions'>{article.description.slice(0, 90)}...</h3>
                                    <p className='name'>{article.source.name}</p>
                                    <div className="redir-content second-redirs-content">
                                        <button className={'save-button'} type='button' onClick={e => deleteNew(article)}>Eliminar</button>
                                        <Link to={`/features/:${article.title}`} className='redirs'>Leer más</Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}

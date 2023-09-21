import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({article,index,saved,saveFavorites}) => {
    return (
        <article className='story-new-content display-center' >
            <div className="image-story-content">
                <img src={article.urlToImage} alt={article.title} title={article.title} className="image-story" />
            </div>
            <div className='info-story-content'>
                <h2 className='title-story'>{article.title.length > 60 ? `${article.title.slice(0, 60)}...` : article.title}.</h2>
                <h3 className='description seconds-descriptions'>{article.description.slice(0, 90)}...</h3>
                <p className='name'>{article.source.name}</p>
                <div className="redir-content second-redirs-content">
                    <button className={'save-button'} type='button' onClick={e => saveFavorites(article)}>
                        {
                            saved.some(element => element.title === article.title) ? 'Almacenado' : 'Guardar'
                        }
                    </button>
                    <Link to={`/features/:${article.title}`} className='redirs'>Leer más</Link>
                    
                </div>
            </div>
        </article>
    )
}

export default Article
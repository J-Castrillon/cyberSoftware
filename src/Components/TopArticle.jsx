import React from 'react'
import { Link } from 'react-router-dom'

const TopArticle = ({article,index,saved,saveFavorites}) => {
    return (
        <article className='top-story-new-content display-center '>
            <div className="image-top-story-content display-center">
                <img src={article.urlToImage} alt={article.title} title={article.title} className="image-top-story" />
            </div>
            <div className='info-top-story-content'>
                <h2 className='title-top-story'>{article.title.length > 60 ? `${article.title.slice(0, 60)}...` : article.title}</h2>
                <h3 className='description description-top'>{article.description.slice(0, 230)}...</h3>
                <p className='name-top'>{article.source.name}</p>
                <div className="redir-content">
                    <button className={'save-button-top'} type='button' onClick={e => saveFavorites(article)}>
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

export default TopArticle
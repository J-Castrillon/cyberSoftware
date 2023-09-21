import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Load } from '../Load';
import { actualStorage, storage, saveFavorites } from '../LocalStorage';
import Article from '../Article';
import TopArticle from '../TopArticle';

export let allArticles = [];

export const Features = () => {
    const [articles, setArticles] = new useState([]);
    const [obj, setObj] = new useState({});
    const [saved, setSaved] = new useState([]);
    const [pages, setPages] = new useState([]);
    const [actualPage, setActualPage] = new useState(0);
    const [loading, setLoading] = new useState(true);
    const [errors, setErrors] = new useState("");
    const date = new Date();

    useEffect(() => {
        setSaved(actualStorage('savedNews'));
        setTimeout(() => {
            date.setDate(date.getDate() - 3);
            fetchApi("technology", date.toLocaleDateString('es-Es', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }), "popularity");
            setLoading(false);
            changePage("");
        }, 1500)
    }, []);

    useEffect(() => {
        const pageSize = 10;
        const mainArray = [];

        for (let i = 0; i < articles.length; i += pageSize) {
            let subArrays = articles.slice(i, i + pageSize);
            mainArray.push(subArrays);
        }
        setPages(mainArray);
    }, [articles])

    const saveFavorites = (article) => {
        let stored = actualStorage("savedNews");
        let existNew = stored.find(save => save.title === article.title);

        if (!existNew) {
            storage("savedNews", article);
            stored.push(article);
            setSaved(stored);
        }
    }

    const changePage = (change) => {
        const actual = actualPage;
        const last = actual - 1;
        const next = actual + 1;

        switch (change) {
            case 'last':
                setActualPage(last);
                break;
            case 'next':
                setActualPage(next);
                break;
            default:
                return;
        }
    }

    useEffect(() => { allArticles = articles }, [articles])

    const url = 'https://newsapi.org/v2/everything';
    const apiKey = '95a2bb0c0f3941ad80255755884645c8';

    const fetchApi = (query, date, sortBy) => {
        let urlComplete = `${url}?q=${query}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

        let fetchs = async () => {
            await fetch(urlComplete)
                .then(response => {
                    if (!response.ok)
                        throw new Error(`Error HTTP: ${response.status}`);
                    return response.json();
                })
                .then(news => {
                    setArticles(news.articles);
                    setObj(news);
                })
                .catch(error => setErrors(error));
        }
        fetchs();
    }

    if (loading === true && articles.length === 0)
        return <Load />
    else if (loading !== true && articles.length !== 0 && errors.length === 0 && pages.length !== 0) {
        return (
            <div className="main-content-news display-center" >
                <section id='secodary-content-news' className=''>
                    {
                        pages[actualPage].map((article, index) => {
                            if (index === 0) {
                                return (
                                    <TopArticle key={`${article.title}${index}`} article={article} index={index} saved={saved} saveFavorites={saveFavorites} />
                                )
                            } else {
                                return (
                                    <Article key={`${article.title}${index}`} article={article} index={index} saved={saved} saveFavorites={saveFavorites} />
                                )
                            }
                        })
                    }
                </section>
                <section id="nav-buttons" className='display-center'>
                    <div className="buttons-page-content display-center">
                        {
                            actualPage != 0 && (<button className='buttons-page' id="last-page" onClick={e => changePage("last")}>{`<`} Anterior</button>)
                        }
                    </div>
                    <div className="count-page display-center">
                        <p className='text-page'>{actualPage + 1} de {pages.length}</p>
                    </div>
                    <div className="buttons-page-content display-center">
                        {
                            actualPage < 9 && <button id="next-page" className='buttons-page' onClick={e => changePage("next")}>Siguiente {`>`}</button>
                        }
                    </div>
                </section>
            </div>
        )
    }
}
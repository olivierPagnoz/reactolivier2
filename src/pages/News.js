import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import axios from 'axios';
import Article from './components/Article';

const News = () => {
    const [newsdata, setNewsdata] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios.get("https://www.olivierpagnoz.fr/puzzle_application/api/contact_message.php/newsdata/")
        .then((resp) => setNewsdata(resp.data));
    }
    return (
        <div className='news-container'>
            <Navigation />
            <h1>LES NEWS</h1>
                <form>
                    <p><input type="text" placeholder='Nom' /></p>
                    <p><textarea placeholder='Message'></textarea></p>
                    <p><input type="submit" value="ENVOYER" /></p>
                </form>
            <ul>
                {newsdata.map((article) => (
                    <Article article={article} key={article.id} />
                ))}
            </ul>
            <p></p>
        </div>
    );
};

export default News;
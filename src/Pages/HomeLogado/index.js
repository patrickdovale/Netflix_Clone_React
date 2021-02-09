import React, { useEffect, useState } from 'react';
import './style.css';
import Tmdb from '../../Tmdb.js';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/Featured';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useParams} from 'react-router-dom';





// eslint-disable-next-line import/no-anonymous-default-export
const HomeLogado = () => {


  const {id} = useParams();
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      //Pegando Lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      

      //Pegando Featured
      let originals = list.filter(i => i.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(id === undefined ? chosen.id : id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, [id])


  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData &&
        <FeaturedMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <Footer />
      
      {movieList.length <=0 && featureData !== null ?
      <div className="loading">
        <img style={{height:250}} src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando"/>
      </div>
      :null
    }
    </div>
  );
}

export default HomeLogado;

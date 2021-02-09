import React from 'react';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {

    console.log(item)

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    item.genres.map((item) => {
        genres.push(item.name)
        return genres;
    })

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0,200)+'...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>

            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--rate">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasson">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : null}</div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured-watchbuttons">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured-mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Genêros: </strong>{genres.join(', ')}</div>
                </div>
            </div>

        </section>
    )
}
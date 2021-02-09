import React, { useState } from 'react';
import './style.css';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)

        setScrollX(x)
        if (scrollX >= 0) {
            setScrollX(0)
        }
    }

    const handleRigthArrow = () => {

        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150;

        setScrollX(x)

        if ((window.innerWidth - listW) > scrollX) {
            setScrollX((window.innerWidth - listW) - 60)
        }
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--rigth" onClick={handleRigthArrow}>
                <NavigateNext style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150,
                    maxWidth: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Link to={`/${items.results[key].id}/${item.original_title}`}>
                            <div key={key} className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
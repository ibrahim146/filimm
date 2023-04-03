import React, { useState,useEffect, useContext } from 'react'
import './selection.css'
import Searchcontext from '../Context/Searchcontext'
import GlobalContext from '../Context/GlobalContext'
const Selection = ({movie}) => {
    const {favorilere_ekle} = useContext(GlobalContext);
    const search = useContext(Searchcontext);
    const {favorilere_silme_izleneceklere_ekle} = useContext(GlobalContext);
    const [results,setresult] = useState([]);
    
   
    useEffect(() => {
   
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1daa7db24dab8feedb3d1004e6a8a90&language=tr-tr&page=1&include_adult=false&query=${search.search}`)
            .then((res) => res.json())
            .then((data) => { setresult(data.results) })
            
    }, [search])
    return (
        <div className='alan'>
            <div className='wrapper'>
                {
                    results.map((itemm) => {
                        return <div key={itemm.id} className='card'>
                            <img src={`https://image.tmdb.org/t/p/w500${itemm.poster_path}`} alt="" />
                            <div className='info'>
                                <div>
                                    <p className='sınır'>{itemm.overview}</p>
                                    <p>TARİH : {itemm.release_date.substring(0, 4)}</p>
                                    <p style={{ color: "yellow" }}><i className="fas fa-star"></i> IMDB : {itemm.vote_average}</p>
                                    <div className='btnnn'>
                                        
                                    <i href="#"  onClick={() => favorilere_silme_izleneceklere_ekle(itemm)} className='btnn fa-fw fa fa-play'></i>
                                    
                                    <i href="#" onClick={() => favorilere_ekle(itemm)} className='btnn fa-fw far fa-eye'></i>
                                   
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Selection

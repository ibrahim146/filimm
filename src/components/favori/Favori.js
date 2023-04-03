import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext';


const Favori = () => {
    const { favori } = useContext(GlobalContext)
    const { favorilere_silme_izleneceklere_ekle ,favorilere_silme } = useContext(GlobalContext);
    return (
        <div className='alan'>
            <div className='wrapper'>
                {
                    favori.map((itemm) => {
                        return <div key={itemm.id} className='card'>
                            <img src={`https://image.tmdb.org/t/p/w500${itemm.poster_path}`} alt="" />
                            <div className='info'>
                                <div>
                                    <p className='sınır'>{itemm.overview}</p>
                                    <p>TARİH : {itemm.release_date.substring(0, 4)}</p>
                                    <p style={{ color: "yellow" }}><i className="fas fa-star"></i> IMDB : {itemm.vote_average}</p>
                                    <div className='btnnn'>


                                        <i href="#" onClick={() => favorilere_silme_izleneceklere_ekle(itemm)} className='btnn fa-fw fa fa-play'></i>
                                        <i href="#" className='btnn fa-fw far fa-eye'></i>
                                        <i href="#" onClick={() => favorilere_silme(itemm.id)} className='btnn fa-fw fa fa-times'></i>
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

export default Favori
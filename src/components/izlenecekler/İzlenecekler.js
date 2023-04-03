import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'
import './izlenecekler.css'
const İzlenecekler = () => {
  const {izlenme_gecmisi} = useContext(GlobalContext);
  return (
    <div className='alan'>
      
    <div className='wrapper'>
    
        {
            izlenme_gecmisi.map((itemm) => {
                return <div key={itemm.id} className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500${itemm.poster_path}`} alt="" />
                    <div className='info'>
                        <div>
                            <p className='sınır'>{itemm.overview}</p>
                            <p>TARİH : {itemm.release_date.substring(0, 4)}</p>
                            <p style={{ color: "yellow" }}><i className="fas fa-star"></i> IMDB : {itemm.vote_average}</p>
                            <div className='btnnn'>


                               
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

export default İzlenecekler
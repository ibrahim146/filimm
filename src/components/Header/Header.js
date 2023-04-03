import React, { useContext, useState } from 'react'
import logo from "../../img/yaskagroup.png";
import {  Routes, Route, Link } from "react-router-dom";
import Carusel from '../Carusel/Carusel';
import Favori from '../favori/Favori.js';
import Searchcontext from '../Context/Searchcontext';
import Selection from '../Selection/Selection';
import İzlenecekler from "../izlenecekler/İzlenecekler";import Tvsovları from '../Tvsovları/Tvsovları';
import Date2022 from '../date/Date2022';
import Date2021 from '../date/Date2021';
import Date2020 from '../date/Date2020';
import Date2019 from '../date/Date2019';
;


const Header = () => {
    
    const {search , setsearch} = useContext(Searchcontext);
    const [ setresult] = useState([]);
   
    function onchange(e) {
        
        setsearch(e.target.value)
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1daa7db24dab8feedb3d1004e6a8a90&language=tr-tr&page=1&include_adult=false&query=${search}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setresult(data.results)
                } else {
                    setsearch("a")
                }
            });

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid text-white">
                    <Link className="navbar-brand text-danger" to="http://localhost:3000/"><img className='logoimage' src={logo} alt="" /> YASKA FİLİM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-danger"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link onClick={() => {setsearch("a")}} className="nav-link active text-danger" aria-current="page" to="/">ANA SAYFA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to={"/tv_sovları"}>TV ŞOVLARI</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FİLİM YILI
                                </Link>
                                <ul className="dropdown-menu bg-black">
                                    <li><Link className="dropdown-item text-danger" to="/2022" >2022</Link></li>
                                    <li><Link className="dropdown-item text-danger" to="/2021" >2021</Link></li>                            
                                    <li><Link className="dropdown-item text-danger" to="/2020" >2020</Link></li>                            
                                    <li><Link className="dropdown-item text-danger" to="/2019" >2019</Link></li>                            
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to={"/favori"}>FAVORİ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to={"/izlenenler"}>İZLENENLER</Link>
                            </li>

                        </ul>
                        <form className="d-flex red" role="search">
                            <input className="form-control me-2 red" onChange={onchange} type="search" placeholder="filim , dizi ara..." aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">arama</button>
                        </form>
                    </div>
                </div>
            </nav>
            
           
                <Carusel />
                <Routes>
                    <Route  path='/' element={<Selection />} />
                    <Route exact path='/favori' element={<Favori />} />
                    <Route exact path='/izlenenler' element={<İzlenecekler />} />
                    <Route exact path='/tv_sovları' element={<Tvsovları />} />
                    <Route exact path='/2022' element={<Date2022 />} />
                    <Route exact path='/2021' element={<Date2021 />} />
                    <Route exact path='/2020' element={<Date2020 />} />
                    <Route exact path='/2019' element={<Date2019 />} />
                </Routes>
           
        </>
    )
}

export default Header
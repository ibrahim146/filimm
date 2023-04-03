import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import { json } from "react-router-dom";


const initialState = {
    favori: localStorage.getItem("favori") ? JSON.parse(localStorage.getItem("favori")) : [],
    izlenme_gecmisi: localStorage.getItem("izlenme_gecmisi") ? JSON.parse(localStorage.getItem("izlenme_gecmisi")) : [],

    
};

const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favori" , JSON.stringify(state.favori));
        localStorage.setItem("izlenme_gecmisi" , JSON.stringify(state.izlenme_gecmisi));
    },[state]);


        const favorilere_ekle = (movie) => {
        dispatch({ type: "FAVORİLER_EKLE", payload: movie });
    };

    const favorilere_silme = (id) => {
        dispatch({ type: "FAVORİLERE_SİLME", payload: id });
    };

    const favorilere_silme_izleneceklere_ekle = (movie) => {
        dispatch({ type: "FAVORİLERE_SİLME_İZLENECEKLERE_EKLE", payload: movie });
    };

    console.log(state);
    return <GlobalContext.Provider value={{
        favori: state.favori,
        izlenme_gecmisi: state.izlenme_gecmisi,
        favorilere_ekle,
        favorilere_silme,
        favorilere_silme_izleneceklere_ekle,
    }}>{children}</GlobalContext.Provider>
}


export default GlobalContext;
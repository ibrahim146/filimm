export default (state, action) => {
    switch (action.type) {
        case "FAVORİLER_EKLE":
            return {
                ...state,
                favori: [...state.favori, action.payload],
            };
        case "FAVORİLERE_SİLME":
            return {
                ...state,
                favori: state.favori.filter((movie) => movie.id !== action.payload),
            };

        case "FAVORİLERE_SİLME_İZLENECEKLERE_EKLE":
            return {
                ...state,
                favori: state.favori.filter((movie) => movie.id !== action.payload.id),
                izlenme_gecmisi: [...state.izlenme_gecmisi, action.payload]
            };
        default:
            return state;
    }
};
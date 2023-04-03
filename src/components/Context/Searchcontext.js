import { createContext, useState } from "react";

const Searchcontext = createContext()
    export const Searchprovider = ({children}) => {
        const [search,setsearch] = useState("a");
        const value = {
            search,
            setsearch
        }
        return <Searchcontext.Provider value={value}>{children}</Searchcontext.Provider>
    }

export default Searchcontext;
import { createContext} from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";


 export const DetailContext = createContext()

function Details ({children}){
    

    const [details,setDetails] = UseLocalStorage('details',[])

   
    
    return  (
        <DetailContext.Provider value={{details,setDetails}}>
            {children}
        </DetailContext.Provider>
    )

    }
    
export default Details
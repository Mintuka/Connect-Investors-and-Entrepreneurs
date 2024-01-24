'use client'
import { createContext, useContext, useRef } from "react"

const DetailContext = createContext({})

export const DetailProvider = ({children}:any) => {
    let data = useRef()
    const setData= (detail:any) => {
        data.current = detail
    }
    return (
        <DetailContext.Provider value={{data: data.current, setData}}>
            {children}
        </DetailContext.Provider>
        
    );
}

export const useDetail = () => useContext(DetailContext)
import React, {useContext, useState} from "react";

const CurrencyContext = React.createContext();


export const CurrencyProvider = ({children}) => {
    const [currency, setCurrency] = useState([]);
    const [currencyName, setCurrencyName] = useState('');

    // const currencySet = (data) => {
    //     console.log('works currency - ', data)
    //     setCurrency(data);
    //
    // }
    const currencySet = (data, name) => {
        console.log('works currency - ', data)
        setCurrency(data);
        setCurrencyName(name)
    }

    // const currencyNameSet = (data) => {
    //     console.log('works currency - ', data)
    //     setCurrencyName(data);
    //
    // }

    return (
        <CurrencyContext.Provider value={{currency, currencySet, currencyName}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    return useContext(CurrencyContext)
}
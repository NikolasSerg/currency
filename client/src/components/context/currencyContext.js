import React, {useContext, useState} from "react";

const CurrencyContext = React.createContext();


export const CurrencyProvider = ({children}) => {
    const [currency, setCurrency] = useState([]);
    const [currencyName, setCurrencyName] = useState('');
    const [currencyFilterLength, setCurrencyFilterLength] = useState(0);

    const currencySet = (data, name) => {
        setCurrency(data);
        setCurrencyName(name)
    }
    const filterLengthSet = (data) => {
        setCurrencyFilterLength(data);
    }


    return (
        <CurrencyContext.Provider value={{currency, currencySet, currencyName, currencyFilterLength, filterLengthSet}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    return useContext(CurrencyContext)
}
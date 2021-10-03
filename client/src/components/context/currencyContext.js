import React, {useContext, useState} from "react";

const CurrencyContext = React.createContext();


export const CurrencyProvider = ({children}) => {
    const [currency, setCurrency] = useState([]);
    const [currencyName, setCurrencyName] = useState('');
    const [currencyFilter, setCurrencyFilter] = useState(null);

    const currencySet = (data, name) => {
        console.log(data, name)
        setCurrency(data);
        setCurrencyName(name)
    }
    const filterSet = (data) => {
        console.log(data, ' - filter')

        setCurrencyFilter(data);
    }


    return (
        <CurrencyContext.Provider value={{currency, currencySet, currencyName, filterSet, currencyFilter}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    return useContext(CurrencyContext)
}
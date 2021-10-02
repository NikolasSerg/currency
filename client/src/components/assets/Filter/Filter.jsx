import React, {useEffect, useRef, useState} from 'react';
import './Filter.scss';
import {useCurrency} from "../../context/currencyContext";

const initState = {
    "Buy exchange pair": "",
    "Buy price": "",
    "Sell exchange": "",
    "Trade amount": ""
};

const Filter = (props) => {
    const buyExchange = useRef('');
    const buyPrice = useRef('');
    const sellExchange = useRef('');
    const tradeAmount = useRef('');

    const {currency, currencyName} = useCurrency();
    const [buySelect, setBuySelect] = useState('');
    const [sellSelect, setSellSelect] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        props.filter(filter);
    },[filter])



    const filterHandler = (e) => {
        console.log('click')
        let newState = [...currency];

        function recurFilter(arr, cond) {
            let db = arr.filter(i => {
                return eval(cond);
            })
            newState = db;
        }
        buyExchange.current.value !== '' ? recurFilter( newState, 'i["Buy exchange pair"] === buyExchange.current.value') : '';
        buyPrice.current.value !== '' ? recurFilter( newState, 'i["Buy price"] >= buyPrice.current.value') : '';
        sellExchange.current.value !== '' ? recurFilter( newState, 'i["Sell exchange"] === sellExchange.current.value') : '';
        tradeAmount.current.value !== '' ? recurFilter( newState, 'i["Trade amount"] >= tradeAmount.current.value') : '';

        setFilter(newState);

    }

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(filter, ' - filters');
        props.filter(filter);
    }

    const clearFilter = () => {
        props.reset();
        setBuySelect('');
        setSellSelect('');
        buyPrice.current.value = '';
        tradeAmount.current.value = '';
    }

    return (
        <div className="filter">
            <form className="col s12">
                    <div className="input-field">
                        <span>Buy exchange pair</span>
                        <select className="browser-default" name='buy' ref={buyExchange} value={buySelect} onChange={(e) => setBuySelect(e.target.value)}>
                            <option value="" disabled selected>select exchange pair</option>
                            <option value="HITBTСЛОТА">HITBTСЛОТА</option>
                            <option value="BITFINEX/ZEC">BITFINEX/ZEC</option>
                            <option value="BBWWСЛОТА">BBWWСЛОТА</option>
                            <option value="BIIIONEX/ZEC">BIIIONEX/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>min Buy price</span>
                        <input type="text" name='price' placeholder='select min price' ref={buyPrice}/>
                    </div>
                    <div className="input-field">
                        <span>Sell exchange</span>
                        <select className="browser-default" ref={sellExchange} name='sell' value={sellSelect} onChange={(e) => setSellSelect(e.target.value)}>
                            <option value="" disabled selected>select sell exchange</option>
                            <option value="BINANCEЛОТА">BINANCEЛОТА</option>
                            <option value="KRAKEN/ZEC">KRAKEN/ZEC</option>
                            <option value="BCHTCEЛОТА">BCHTCEЛОТА</option>(
                            <option value="KPOPEN/ZEC">KPOPEN/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>min Trade amount</span>
                        <input type="text" name='trade'  placeholder='select min trade'  ref={tradeAmount}/>
                    </div>
                    <div className="input-field" type='submit' >
                        <span className='clear' onClick={clearFilter}>Clear filter</span>
                        <a className="waves-effect waves-light btn" onClick={filterHandler}>APPLY</a>
                    </div>
            </form>
        </div>
    )
};

export default Filter;
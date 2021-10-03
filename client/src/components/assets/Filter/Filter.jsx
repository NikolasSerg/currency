import React, {useState} from 'react';
import './Filter.scss';
import {useCurrency} from "../../context/currencyContext";

const Filter = (props) => {

    const {currency, filterSet} = useCurrency();
    const [buySelect, setBuySelect] = useState('');
    const [buyPrice, setBuyPrice] = useState('');
    const [sellSelect, setSellSelect] = useState('');
    const [trade, setTrade] = useState('');

    const filterHandler = (e) => {
        let newState = [...currency];
        function recurFilter(arr, cond) {
            let db = arr.filter(i => {
                return eval(cond);
            })
            newState = db;
        }
        buySelect !== '' ? recurFilter( newState, 'i["Buy exchange pair"] === buySelect') : '';
        buyPrice !== '' ? recurFilter( newState, 'i["Buy price"] >= buyPrice') : '';
        sellSelect !== '' ? recurFilter( newState, 'i["Sell exchange"] === sellSelect') : '';
        trade !== '' ? recurFilter( newState, 'i["Trade amount"] >= trade') : '';

        newState.length === 0 ? filterSet([]) : filterSet(newState);
    }

    const clearFilter = () => {
        setBuySelect('');
        setBuyPrice('');
        setSellSelect('');
        setTrade('');
        filterSet(null);
    }

    return (
        <div className="filter">
            <form className="col s12">
                    <div className="input-field">
                        <span>Buy exchange pair</span>
                        <select disabled = {currency.length === 0 ? true : false} className="browser-default" value={buySelect} onChange={(e) => setBuySelect(e.target.value)}>
                            <option value="select">select exchange pair</option>
                            <option value="HITBTСЛОТА">HITBTСЛОТА</option>
                            <option value="BITFINEX/ZEC">BITFINEX/ZEC</option>
                            <option value="BBWWСЛОТА">BBWWСЛОТА</option>
                            <option value="BIIIONEX/ZEC">BIIIONEX/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>min Buy price</span>
                        <input  disabled = {currency.length === 0 ? true : false}  type="number" placeholder='select min price' value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <span>Sell exchange</span>
                        <select  disabled = {currency.length === 0 ? true : false}  className="browser-default" value={sellSelect} onChange={(e) => setSellSelect(e.target.value)}>
                            <option value="select">select sell exchange</option>
                            <option value="BINANCEЛОТА">BINANCEЛОТА</option>
                            <option value="KRAKEN/ZEC">KRAKEN/ZEC</option>
                            <option value="BCHTCEЛОТА">BCHTCEЛОТА</option>(
                            <option value="KPOPEN/ZEC">KPOPEN/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>min Trade amount</span>
                        <input  disabled = {currency.length === 0 ? true : false} type="number" placeholder='select min trade'  value={trade} onChange={(e) => setTrade(e.target.value)}/>
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
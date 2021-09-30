import React from 'react';
import './Filter.scss';

const Filter = () => {
    return (
        <div className="filter">
            {/*<form className="col s12">*/}
            {/*    <div>*/}
                    <div className="input-field">
                        <span>By exchange pair</span>
                        <select className="browser-default">
                            <option value="" disabled selected>Choose exchange pair</option>
                            <option value="HITBTСЛОТА">HITBTСЛОТА</option>
                            <option value="BITFINEX/ZEC">BITFINEX/ZEC</option>
                            <option value="BBWWСЛОТА">BBWWСЛОТА</option>
                            <option value="BIIIONEX/ZEC">BIIIONEX/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>min Buy price</span>
                        <input type="text"/>
                    </div>
                    <div className="input-field">
                        <span>Sell exchange</span>
                        <select className="browser-default">
                            <option value="" disabled selected>Choose sell exchange</option>
                            <option value="BINANCEЛОТА">BINANCEЛОТА</option>
                            <option value="KRAKEN/ZEC">KRAKEN/ZEC</option>
                            <option value="BCHTCEЛОТА">BCHTCEЛОТА</option>
                            <option value="KPOPEN/ZEC">KPOPEN/ZEC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <span>By exchange pair</span>
                        <input type="text"/>
                    </div>
                    <div className="input-field">
                        <a className="waves-effect waves-light btn">button</a>
                    </div>
            {/*    </div>*/}
            {/*</form>*/}
        </div>
    )
        ;
};

export default Filter;
import React, {useEffect, useRef} from 'react';
import './Aside.scss';
import M from "materialize-css";
import {useCurrency} from "../../context/currencyContext";

const Aside = () => {
    const selectRef = useRef(null);
    const {currency, currencySet, currencyName, currencyFilter} = useCurrency();

    useEffect(() => {
        M.FormSelect.init(selectRef.current, {})
    }, [])

    const selectHandler = (e) => {
        fetch(`http://localhost:4000/api/currency/${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                currencySet(data, e.target.value);
            })
            .catch(err => console.error(err));
    }

    const active = () => {
        if(currency.length !== 0 && currencyFilter === null) {
            return <span>{currency.length}</span>
        }
        if(currencyFilter !== null && currencyFilter.length >= 0) {
            return <span>{currencyFilter.length}</span>
        }
        return <span> - </span>
    }

    return (
        <aside className='col aside'>
            <section>
                <h5>Dashboard profit currency</h5>
                <div className='currencyItem'>
                    <div id='select' className="input-field" >
                        <select ref={selectRef} defaultValue={currencyName === '' ? 'currency' : currencyName} onChange={selectHandler}>
                            <option value='currency' disabled>currency</option>
                            <option value="UAH">UAH</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <p>Selected currency will affect all profit</p>
                </div>
            </section>
            <section>
                <h5>Instances</h5>
                <div className='infoItem'>
                    <div>
                        <h6>Most profit instance</h6>
                        {currencyName !== '' ? <span>BTS-{currencyName}</span>  : <span> - </span> }
                    </div>
                    <div>
                        <h6>Active instance</h6>
                        {active()}
                    </div>
                    <div>
                        <h6>Total instance</h6>
                        {currency.length !== 0 ? <span>{currency.length}</span>  : <span> - </span> }
                    </div>
                </div>

            </section>
        </aside>
    );
};

export default Aside;
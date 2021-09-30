import React, {useEffect, useRef} from 'react';
import './Aside.scss';
import M from "materialize-css";
import {useCurrency} from "../../context/currencyContext";

const Aside = () => {
    const selectRef = useRef(null);
    const {currencySet, currencyName} = useCurrency();
    useEffect(() => {
        M.FormSelect.init(selectRef.current, {})
    }, [])

    const selectHandler = (e) => {
        console.log(e.target.value, ' - VALUE');
        fetch(`http://localhost:4000/api/currency/${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                currencySet(data, e.target.value);
                // currencyNameSet(e.target.value);
            })
            .catch(err => console.error(err));
    }

    return (
        <aside className='col aside'>
            <section>
                <h5>Dashboard profit currency</h5>
                <div className='currencyItem'>
                    <div id='select' className="input-field" >
                        <select ref={selectRef} onChange={selectHandler}>
                            <option value="" disabled selected>currency</option>
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
                        {currencyName !== '' ? <span>BTS-{currencyName}</span>  : <span>BTS</span> }
                    </div>
                    <div>
                        <h6>Active instance</h6>
                        <span>BTS</span>
                    </div>
                    <div>
                        <h6>Total instance</h6>
                        <span>BTS</span>
                    </div>
                </div>

            </section>
        </aside>
    );
};

export default Aside;
import React, {useEffect, useState} from 'react';
import './Dashboard.scss';
import {useCurrency} from "../../context/currencyContext";
import Filter from "../Filter/Filter.jsx";


const Dashboard = (props) => {
    const {currency, currencyName} = useCurrency();
    const [stateCurrency, setCurrency] = useState([]);
    // const [stateCurrencyName, setCurrencyName] = useState('');
    useEffect(() => {
        setCurrency(currency);
        // setCurrencyName(currencyName);
    }, [currency])

    return (
        <div className='wrapper'>

            <main>
                <Filter />
                <table className='striped'>
                    <thead className='grey-text text-darken-3'>
                    <tr>
                        <th>Buy exchange pair</th>
                        <th>Buy price</th>
                        <th>Sell exchange</th>
                        <th>Sell price</th>
                        <th>Trade amount</th>
                        <th>Abr%[Free%]</th>
                        <th>Exp.profit {currencyName}</th>
                        <th>Exp.fees {currencyName}</th>
                        <th>Adj.</th>
                    </tr>
                    </thead>

                    <tbody>
                    {stateCurrency.length === 0 ? <p>CHOOSE the currency</p> :
                        stateCurrency.map(i => (
                            <tr>
                                <td>{i["Buy exchange pair"]}</td>
                                <td>{i["Buy price"]}</td>
                                <td>{i["Sell exchange"]}</td>
                                <td>{i["Sell price"]}</td>
                                <td>{i["Trade amount"]}</td>
                                <td>{i["Abr%[Free%]"]}</td>
                                <td>{i["Exp.profit"]}</td>
                                <td>{i["Exp.fees"]}</td>
                                <td><span className="material-icons">show_chart</span></td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>

            </main>
        </div>
    );
};

export default Dashboard;
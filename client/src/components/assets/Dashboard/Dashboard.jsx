import React, {useEffect, useState} from 'react';
import './Dashboard.scss';
import {useCurrency} from "../../context/currencyContext";
import Filter from "../Filter/Filter.jsx";
import TableLine from "../../skeletons/tableLine.jsx";

const lengthSkeleton = [1, 2, 3, 4, 5];

const Dashboard = (props) => {
    const {currency, currencyName, currencyFilter} = useCurrency();
    const [stateCurrency, setCurrency] = useState([]);

    useEffect(() => {
        setCurrency(currency)
    }, [currency]);

    useEffect(() => {
        currencyFilter !== null
            ? setCurrency(currencyFilter)
            : setCurrency(currency)
    }, [currencyFilter]);


    return (
        <div className='wrapper'>

            <main>
                <Filter />
                <table className='striped' style={{overflow: 'hidden'}}>
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
                    {stateCurrency.length > 0
                        ?
                        stateCurrency.map((i, n) => (
                                <tr key={n}>
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
                        ) :
                        null
                    }
                    </tbody>
                </table>
                {stateCurrency.length === 0
                    ?
                lengthSkeleton.map((i, n) =>
                    <TableLine key={n}/>
                ) : null}
            </main>
        </div>
    );
};

export default Dashboard;
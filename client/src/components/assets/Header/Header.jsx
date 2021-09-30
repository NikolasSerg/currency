import React, {useEffect, useRef, useState} from 'react';
import M from "materialize-css";
import './Header.scss'
import {Link} from "react-router-dom";

const menuInit = [
    {name: 'DASHBOARD', class: 'active', url: '/'},
    {name: 'INSTANCE', class: '', url: 'instance'},
    {name: 'PAIRS', class: '', url: '/pairs'},
    {name: 'ABOUT', class: '', url: '/about'},
    {name: 'HELP', class: '', url: '/help'},
    {name: 'CONTACT', class: '', url: '/contact'},
]

const Header = () => {
    const tabsRef = useRef(null);
    const [menu, setMenu] = useState(menuInit);
    useEffect(() => {
        M.Tabs.init(tabsRef.current, {})
        // fetch("http://localhost:4000/api/menu")
        //     .then(res => res.json())
        //     .then(data => setMenu(data))
        //     .catch(err => console.error(err));
    }, [])
    const activeHandle = (e) => {
        console.log(e.target.name);
        console.log(e.target.value, ' - value')
    }
    if (menu.length === 0) {
        return (<h3>LOADING</h3>)
    } else {
        return (
            <div>
                <div className="navBar">
                    <div className="col s12">
                        <ul className="tabs" ref={tabsRef} onClick={activeHandle}>
                            {
                                menu.map((item, index) =>
                                    <li className="tab text-darken-2" name={item.name} key={index}>
                                        {item.name}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='login'>
                        <span className="material-icons">person</span>
                        <button className="btn waves-effect waves-light" type="submit" name="action">LOGOUT
                            <i className="material-icons right">logout</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;
import React, {useEffect, useState} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";

const menuInit = [
    {name: 'DASHBOARD', class: '', url: '/'},
    {name: 'INSTANCE', class: '', url: '/instance'},
    {name: 'PAIRS', class: '', url: '/pairs'},
    {name: 'ABOUT', class: '', url: '/about'},
    {name: 'HELP', class: '', url: '/help'},
    {name: 'CONTACT', class: '', url: '/contact'},
]

const Header = () => {
    const [menu, setMenu] = useState(menuInit);
    useEffect(() => {
        let newMenu = [...menu];
        newMenu.map((i) => {
            i.class = '';
            if(i.url === window.location.pathname) {
               i.class = 'active'
            }
        })
        setMenu(newMenu)
    }, [window.location.pathname])


    if (menu.length === 0) {
        return (<h3>LOADING</h3>)
    } else {
        return (
            <div>
                <div className="navBar">
                    <div className="col s12">
                        <ul className='navs'>
                            {
                                menuInit.map((item, index) =>
                                    <li className = {`grey-text text-lighten-1 nav ${item.class}`} name={item.name} key={index}>
                                        <h6><Link to={item.url}>{item.name}</Link></h6>
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
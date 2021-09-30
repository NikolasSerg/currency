import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>SORRY, page not found</h1>
            <button>
                <Link to="/">
                    HOME
                </Link>
            </button>
        </div>
    );
};

export default NotFound;
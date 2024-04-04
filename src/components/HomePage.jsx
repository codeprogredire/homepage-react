import React from 'react';

import { Link } from 'react-router-dom';

export function HomePage(){
    return (
        <div className='home-page'>
            <center>
                <h1><i>Homepage</i></h1>
                <p>This is the homepage</p>
                <Link to='/about'>Go to About page</Link>
            </center>
        </div>
    );

}
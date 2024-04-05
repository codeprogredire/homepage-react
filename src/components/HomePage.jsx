import React from 'react';

import { Link } from 'react-router-dom';
import { MyButton } from './MyButton';

const products=[
    {
        title:'Cabbage',
        isFruit:false,
        id:1
    },
    {
        title:'guava',
        isFruit:true,
        id:2
    },
    {
        title:'apple',
        isFruit:true,
        id:3
    }
]

const listitems=products.map(product=>
    <li key={product.id} style={{
        color:product.isFruit?'magenta':'darkgreen'
    }}>{product.title}</li>
);

export function HomePage(){
    return (
        <div className='home-page'>
            <center>
                <h1><i>Homepage</i></h1>
                <p>This is the homepage</p>
                <ul>{listitems}</ul>
                <br />
                <MyButton></MyButton>
                <br /><br />
                <Link to='/about'>Go to About page</Link>
            </center>
        </div>
    );

}
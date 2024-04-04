import { Link } from 'react-router-dom';

export function AboutPage(){
    return (
        <div className='about-page'>
            <center>
                <h1><i>About me page</i></h1>
                <p>Hello there. <br/>How do you do?</p>
                <Link to='/'>Go to homepage</Link>
            </center>
        </div>
    );
}
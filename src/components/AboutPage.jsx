import { Link } from 'react-router-dom';

const user={
    name: 'Shadow',
    imageUrl: '/src/assets/shadow.jpg',
    imageSize:300
};

export function AboutPage(){
    return (
        <div className='about-page'>
            <center>
                <h1><i>About me page</i></h1>
                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                    width: user.imageSize,
                    height: user.imageSize
                    }}></img>
                    <br /><br />
                <Link to='/'>Go to homepage</Link>
            </center>
        </div>
    );
}
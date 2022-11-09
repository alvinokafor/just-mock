import './Home.css'

import Profile from '../Profile/Profile';
import Links from '../Links/Links';
import Social from '../Social/Social';

function Home() {
    return (
        <article id="home">
            <Profile />
            <Links />
            <Social />
        </article>
    )
}

export default Home;
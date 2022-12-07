import React from 'react';
import Searchbar from './Searchbar';

function Home() {
    return (
        <div className='homepage'>
         <Searchbar />
         <p className='prompt'>No search Result Yet! Please submit a search Above!</p>
        </div>
    );
}

export default Home;
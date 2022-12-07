import React from 'react';
import Searchbar from './Searchbar';
import ErrorMessage from './ErrorMessage';

function Home() {
    return (
        <div className='homepage'>
         <Searchbar />
         <section className="videos">
         {/* A ternary should go here saying if loading error is set to true return ErrorMessage component else return videos component to list out all the videos */}
          </section>
        </div>
    );
}

export default Home;
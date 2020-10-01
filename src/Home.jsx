import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import hero from './hero.svg';
import Common from './Common';

const Home = () => {
    return(
        <>
          <Common
             name = "Welcome to React services"
            imgsrc = {hero}
            visit = "/todo"
            btname = "Get Your Todo-List"
          />
        </>
    )
}

export default Home;
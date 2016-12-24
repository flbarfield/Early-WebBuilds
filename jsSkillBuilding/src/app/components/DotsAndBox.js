import {Link} from 'react-router';
import React from 'react';
import NavBar from './NavBar';

export default class DotsAndBox extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div className='DotsPage'>
          <div className='DotsMidContent'>
            <h1>Dots and Boxes!</h1>
            <div className='mainImgWrap'>
              <img src='/app/images/dotsNBox.png'/>
            </div>
            <Link to={"dotsAndBox/DotsPlay"}><button>Play!</button></Link>
            <button>How to Play</button>
          </div>
        </div>
      </div>
    );
  };
}

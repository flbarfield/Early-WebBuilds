import React from 'react';
import Navbar from '../NavBar';

export default class DotsPlay extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
          <div className='DotsPage'>
            <div className='DotsMidContent'>
              <div className='dotsPlayArea'>
                <div className='row1'>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                </div>
                <div className='row2'>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                </div>
                <div className='row3'>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                </div>
                <div className='row4'>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                </div>
                <div className='row5'>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                </div>
                <div className='row6'>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                </div>
                <div className='row7'>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                </div>
                <div className='row8'>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                  <div className='vLine'></div>
                </div>
                <div className='row9'>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                  <div className='hLine'></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

// Older way of doing the boxes, trying something else.
// <div className='row1'>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
// </div>
// <div className='row2'>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
// </div>
// <div className='row3'>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
// </div>
// <div className='row4'>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
//   <div className='square'></div>
// </div>

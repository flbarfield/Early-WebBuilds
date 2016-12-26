import React from 'react';
import Navbar from '../NavBar';

export default class DotsPlay extends React.Component {
  constructor(){
    super();
    this.state={
      playerTurn: 'red'
    }
  }

  handleClick () {
    if (this.state.playerTurn === 'red') {
      console.log("Yo, I'm player Red.");
      this.state.playerTurn = 'blue'

    } else {
      console.log("Yo, I'm blluuuuuuuuoooo!");
      this.state.playerTurn = 'red'
    }
  }


  render () {
    return (
      <div>
        <Navbar/>
          <div className='DotsPage'>
            <div className='DotsMidContent'>
              <div className='dotsPlayArea'>
                <div className='gamewrap'>
                  <div className='row1'>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                  </div>
                  <div className='row2'>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                  </div>
                  <div className='row3'>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                  </div>
                  <div className='row4'>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                  </div>
                  <div className='row5'>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                  </div>
                  <div className='row6'>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                  </div>
                  <div className='row7'>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                  </div>
                  <div className='row8'>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='vLine'></div>
                  </div>
                  <div className='row9'>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                    <div onClick={this.handleClick.bind(this)} className='hLine'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

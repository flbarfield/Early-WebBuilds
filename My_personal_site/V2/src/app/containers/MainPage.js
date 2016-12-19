import Footer from '../components/Footer';
import {Link} from 'react-router';
import MainIMG from '../components/MainImg.js';
import Navbar from '../components/Navbar.js';
import React from 'react';

export default class MainPage extends React.Component {
  render () {
    return (
      <div>
        <div className='jumbotron jumbotron-main'>
        <Navbar/>
          <div>
            <h1>Fredrick Barfield</h1>
            <h2>Front End Web Development</h2>
            <h3>HTML <span className='fa fa-circle'></span> CSS <span className='fa fa-circle'></span> JavaScript</h3>
          </div>
        </div>
        <h1 className='page-heading'>Project Examples</h1>
        <Link to={PROJINFO[0].id}><MainIMG imageWrapStyling={PROJINFO[0].imageWrapStyling} img={PROJINFO[0].img}/></Link>
        <Link to={PROJINFO[1].id}><MainIMG imageWrapStyling={PROJINFO[1].imageWrapStyling} img={PROJINFO[1].img}/></Link>
        <Link to={PROJINFO[2].id}><MainIMG imageWrapStyling={PROJINFO[2].imageWrapStyling} img={PROJINFO[2].img}/></Link>
        <Link to={PROJINFO[3].id}><MainIMG imageWrapStyling={PROJINFO[3].imageWrapStyling} img={PROJINFO[3].img}/></Link>
        <Link to={PROJINFO[4].id}><MainIMG imageWrapStyling={PROJINFO[4].imageWrapStyling} img={PROJINFO[4].img}/></Link>
        <Link to={PROJINFO[5].id}><MainIMG imageWrapStyling={PROJINFO[5].imageWrapStyling} img={PROJINFO[5].img}/></Link>
        <Link to={PROJINFO[6].id}><MainIMG imageWrapStyling={PROJINFO[6].imageWrapStyling} img={PROJINFO[6].img}/></Link>
        <Link to={PROJINFO[7].id}><MainIMG imageWrapStyling={PROJINFO[7].imageWrapStyling} img={PROJINFO[7].img}/></Link>
        <Footer/>
      </div>
    );
  }
}

const PROJINFO = [
{
  key: 0,
  id: "AboutCompany",
  img: "/app/Images/company_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
}, {
  key: 1,
  id: "AboutTSDC",
  img: "/app/Images/TSDC_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
}, {
  key: 2,
  id: "AboutGames",
  img: "/app/Images/Games.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
}, {

  key: 3,
  id: "AboutShopping",
  img: "/app/Images/Shop.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
}, {
  key: 4,
  id: "AboutBand",
  img: "/app/Images/Bandstream.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
}, {
  key: 5,
  id: "AboutTravel",
  img: "/app/Images/Travel_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
}, {
  key: 6,
  id: "AboutBlog",
  img: "/app/Images/Blog_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
},{
  key: 7,
  id: "AboutHome",
  img: "/app/Images/Home_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
}
];

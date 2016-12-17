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
        <Footer/>
      </div>
    );
  }
}

const PROJINFO = [
{
  key: 0,
  id: "AboutCompany",
  img: "./app/Images/company_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
  description: "Aesthetics and polish was the theme of this webpage. Up until now, I was rushing through the creation of all of my pages in order to try the next new technique or technology that I had caught wind of. With this I took the time to really slow down and tweek the little details to create a finished looking result - and it was fun! I'm now inspired to revamp everything else I've done up to this point. This also has surprisingly little javascript involved, before now I had used it for the bulk of my visual effects when simple CSS rules did it easier and faster. Such as transitioning color and creating a dynamic nav menu."
}, {
  key: 1,
  id: "AboutTSDC",
  img: "./app/Images/TSDC_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
  description: "This project was mostly about learning how to integrate AJAX into webpages in order to achieve a smooth and seamless user experience as the website is navigated. This is shown within the main body of the page - new information is updated after clicking a navigation link without needing a refresh.Building this website also came with the learning experiences of embedding video into a page as well as discovering how to build an image-based header with mis-aligned starting images. I also successfully learned how to created a properly aligned text-overlay for the header."
},{
  key: 2,
  id: "AboutBand",
  img: "./app/Images/Bandstream.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
  description: "This features four behind-the-scenes technologies that I have never worked with before: Sass, Webpack, React, Redux. All of these tools help gear me toward working with a team, as most of it includes varioius features that allow you to split your code into seperate and easily reusable components. I also gained the ability to uglify, compress, and keep my code in a virtual DOM that's seperate from the real DOM which that allows for faster render times. My build system also allows me error check and debug my projects before I even put it online."
}, {
  key: 3,
  id: "AboutTravel",
  img: "./app/Images/Travel_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
  description: "In this project, I discovered how to embed pre-existing plug-ins into projects. While I understand it may be best practice to not completely rely on them, there's no doubt that it drastically cuts down on development time as well asmistakes made by the novice programmer!Examples are as follows: Slideshow at the top of the page, color transistions for the icons within the city directory, billing, and social icon sections and the widget used to display the local weather."
}, {
  key: 4,
  id: "AboutBlog",
  img: "./app/Images/Blog_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left",
  description: "So far, this is merely a small page I created just to familiarize myself further with Bootstrap. Sometime soon, I do hope to add extra functionality such as the ability to actually add and delete comments and posts, account creation, and so on hoping that it will aid in developing my understanding of back-end languages and how they relate to front-end."
},{
  key: 5,
  id: "AboutHome",
  img: "./app/Images/Home_SC.png",
  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right",
  description: "This particular project was the very first I had semi-finished! At the time, this introduced interesting challenges such as figuring out how to use a grid system for element alignment, doing all the animation through my own JavaScript strings because I didn't know much about jquery or plug-ins at all yet, and wrapping my head around how to use iconography. You can also hover over or click the smaller images to display overlaying text"
}
];

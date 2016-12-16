import React from "react";
import UserNav from "../components/UserNav.js";

export default class User extends React.Component {
  render () {
    return(
      <div>
        <UserNav/>
        <div className="shopHeader">
          <div className="shopHeadTxt">
            <h1>Something Something</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum viverra volutpat. Integer lobortis erat eget pharetra efficitur. Phasellus interdum volutpat nisi hendrerit efficitur. Etiam in orci felis. In sollicitudin ex leo, eget aliquet dui euismod maximus. Phasellus nec interdum enim, sit amet imperdiet eros. Nunc vel justo vehicula, semper urna vitae, hendrerit arcu.
            </h2>
            <button>SHOP NOW</button>
          </div>
          <div className="featured">

          </div>
          <div className="moreProduct">

          </div>
          <div class="shopFooter">

          </div>
        </div>
      </div>
    );
  }
}

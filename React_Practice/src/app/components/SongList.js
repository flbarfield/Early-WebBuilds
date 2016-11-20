import React from "react";
import SLSong from "./SongList/SLSong";

export default class SongList extends React.Component {
  render() {
    const so_img_list = [
      <img className="so_img" src="./app/images/crazy_colors.jpg"/>,
      <img className="so_img" src="./app/images/cyclops.jpg"/>,
      <img className="so_img" src="./app/images/grumps.jpg"/>,
      <img className="so_img" src="./app/images/masked_animals.jpg"/>
    ]

    return(
      <div id='song_list'>
        <SLSong sl_song={so_img_list[0]}/>
        <SLSong sl_song={so_img_list[1]}/>
        <SLSong sl_song={so_img_list[2]}/>
        <SLSong sl_song={so_img_list[3]}/>
      </div>
    );
  }
}

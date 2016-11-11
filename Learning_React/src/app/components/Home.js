import React from "react";

export class Home extends React.Component {
	render() {
//		A complex check just before the return funct
//		is acceptable. The final calc for the answer can
//		be IN the return within the {}, but it must be a 
//		single line
		return(
			<div>
				<p>In a new Component!</p>
				{"Hello!"}
			</div>
		);
	}
}
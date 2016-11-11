import React from "react";

export class Home extends React.Component {
	render() {
		var text="Something!";
//		A complex check just before the return funct
//		is acceptable. The final calc for the answer can
//		be IN the return within the {}, but it must be a 
//		single line
		return(
			<div>
				<p>In a new Component!</p>
				<p>{text}</p>
				<p>Your name is {this.props.name}, your age is {this.props.age}</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}
			</div>
		);
	}
}

//PropTypes enforce that your components get used correctly

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
};
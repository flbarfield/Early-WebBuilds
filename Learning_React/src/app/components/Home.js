import React from "react";

export class Home extends React.Component {
//	Adding props to classes themselves
	constructor(props) {
		super();
		this.age = props.age;
	}
		
	onMakeOlder() {
		this.age += 3;
		console.log(this.age);
	}
	
	render() {
//		A complex check just before the return funct
//		is acceptable. The final calc for the answer can
//		be IN the return within the {}, but it must be a 
//		single line
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.age}</p>
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
			</div>
		);
	}
}

//PropTypes enforce that your components get used correctly

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
};
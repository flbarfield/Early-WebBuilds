import React from "react";

//state = what happens within a component
//prop = what's brought into components
//Do not set props to state unless it's an initial value,
// and label it as such.

export class Home extends React.Component {
//	Adding props to classes themselves
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		},3000);
		console.log("Constructor")
	}
	
	componentWillMount() {
		console.log("Component will mount");
	}
	
	componentDidMount() {
		console.log("Component did mount!")
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("Component will recieve props", nextProps)
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should Component update", nextProps, nextState);
//		if (nextState.status === 1) {
//			return false;
//		}
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update", nextProps, nextState);
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log("Component did update", prevProps, prevState);
	}
	
	componentWillUnmount() {
		console.log("Component will unmount");
	}
		
	onMakeOlder() {
//		setstate triggers update on UI when something changes within
		this.setState({
			age: this.state.age + 3
		});
	}
	
	//while this can be made in render, you don't want to have ALL
	//your logic placed there. Keepin' it clean!
	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}
	
//	event target is the input field
	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
	}
	
	render() {
//		A complex check just before the return funct
//		is acceptable. The final calc for the answer can
//		be IN the return within the {}, but it must be a 
//		single line
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				<hr/>
				<button onClick={this.props.greet}className="btn btn-primary">Greet</button>
				<hr/>
				<input type="text" 
					value={this.state.homeLink} 
					onChange={(event) => this.onHandleChange(event)}/>
				<button onClick={this.onChangeLink.bind(this)}className='btn btn-primary'>Change Header Link</button>
			</div>
		);
	}
}

//PropTypes enforce that your components get used correctly

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
};
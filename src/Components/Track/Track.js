import React from "react";

import "./Track.css";

export class Track extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);

		// you are passing these two functions down as props but they don't exist
		// anywhere so this bit of code is going to cause erros beacuse untill you
		// create the functions and pass them down to this component

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	renderAction() {
		if (this.props.isRemoval) {
		  return (<button className="Track-action" onClick={this.removeTrack}> - </button>);
		}
		else {
		  return (<button className="Track-action" onClick={this.addTrack}> + </button>);
		}
	  }

	addTrack() {
		this.props.onAdd(this.props.track);
	  }

	  removeTrack() {
		this.props.onRemove(this.props.track);
	  }

	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.name}</h3>
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				{this.renderAction()}
			</div>
		);
	}
}
export default Track;

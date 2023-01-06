import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
				{/* This wasn't working because in SearchResults.js you were passing 
				'track' as a prop to <TrackList /> instead of 'tracks' */}
				{this.props.tracks.map((track) => {
					return (
						<Track
							track={track}
							key={track.id}
							onAdd={this.props.onAdd}
							isRemoval={this.props.isRemoval}
							onRemove={this.props.onRemove}
						/>
					);
				})}
			</div>
		);
	}
}

export default TrackList;

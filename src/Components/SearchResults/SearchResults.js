import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
	render() {
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				<TrackList
					// track={this.props.SearchResults}

					// This wasn't working because in App.js you were passing 'SearchResults'
					// as a prop to <SearchResults /> instead of 'searchResults'

					// You wwere also passing 'track' as a prop to
					// <TrackList /> instead of 'tracks'

					// this is now right :)
					tracks={this.props.searchResults}
					onAdd={this.props.onAdd}
					isRemoval={false}
				/>
			</div>
		);
	}
}

export default SearchResults;

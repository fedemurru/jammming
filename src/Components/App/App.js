import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//changed this from 'SearchResults' to 'searchResults'
			searchResults: [
				{ name: "search result 1", artist: "artist1", album: "album1", id: 1 },
				{ name: "search result 1", artist: "artist2", album: "album2", id: 2 },
				{ name: "search result 1", artist: "artist3", album: "album3", id: 3 },
			],
			//you didn't have a state created for playlistTracks
			playlistTracks: [
				{ name: "playlist track 1", artist: "artist1", album: "album1", id: 1 },
				{ name: "playlist track 2", artist: "artist2", album: "album2", id: 2 },
				{ name: "playlist track 3", artist: "artist3", album: "album3", id: 3 },
			],
		};
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults
							// This wasn't working because you were passing 'SearchResults'
							// as a prop to <SearchResults /> instead of 'searchResults'
							searchResults={this.state.searchResults}

							//you don't need this
							// tracks={this.state.tracks}
						/>
						{/* This wasn't working because 'tracks' doesn't exisit in your state */}
						{/* <Playlist
							playlist={this.state.searchResults}
							tracks={this.state.tracks}
						/> */}

						{/* Instead you need to pass the newley created 'playlistTracks' from your 
						state to the Playlist component */}
						<Playlist playlistTracks={this.state.playlistTracks} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

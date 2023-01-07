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

			playlistName: 'My Playlist',
			//you didn't have a state created for playlistTracks
			playlistTracks: [
				{ name: "playlist track 1", artist: "artist1", album: "album1", id: 1 },
				{ name: "playlist track 2", artist: "artist2", album: "album2", id: 2 },
				{ name: "playlist track 3", artist: "artist3", album: "album3", id: 3 },
			],
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}
	addTrack(track) {
		let tracks = this. state.playlistTracks;
		if (tracks.find(savedTrack => savedTrack. id === track. id)) {
		return 
		}
		tracks.push (track) ;
		this.setState({ playlistTracks: tracks }) ;
		}

		removeTrack(track) {
		let tracks = this.state.playlistTracks;
		tracks = tracks. filter (currentTrack => currentTrack.id !== track.id)
		this.setState({playlistTracks: tracks});
		}

		updatePlaylistName(name) {
			this.setState({playlistName: name });

		  }

		savePlaylist() {
			let tracksUri = this.state.playlistTracks.map(track => track.uri);
			Spotify.savePlaylist(this.state.playlistName, tracksUri);
		  }

		async search(term) {
			Spotify.getAccessToken();
			let searchResults = await Spotify.search(term);
			this.setState({searchResults: searchResults});
		  }

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar onSearch={this.search} />
					<div className="App-playlist">
						<SearchResults
							// This wasn't working because you were passing 'SearchResults'
							// as a prop to <SearchResults /> instead of 'searchResults'
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}

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
						<Playlist 
						playlistName={this.state.playlistName}
						playlistTracks={this.state.playlistTracks}
						onRemove={this.removeTrack} 
						onNameChange={this.updatePlaylistName} 
						onSave={this.savePlaylist} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

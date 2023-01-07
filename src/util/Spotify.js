const clientId = "dc53753d0af04a3fa398caa75ef20401";
let accessToken = "";
const redirectURI = "http://localhost:3000/";

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.

    return accessToken;
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    window.location = accessUrl;
}
},

search(Term) {
    let spotifyTracks = fetch(
      `https://api.spotify.com/v1/search?type=track&q=${Term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          return [];
        }

        let tracks = jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));

        return tracks;
      })
      .catch((error) => {
        console.log("Spotify search error");
      });

    return spotifyTracks;
  },

  savePlaylist(name, trackUri) {
    if (!name || trackUri.length) return;

    // Get spotify user Id
    const accessToken = Spotify.getAccessToken();
    const headers = { Auhorization: `Bearer ${accessToken}`};
    let userId;
    return fetch ('https://api.spotify.com/vl/me', { headers: headers })    }
  
}
.then((response) => response.json())
.then((jsonResponse) => jsonResponse.id)
.catch((error) => {
    userld = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
            {
                headers: headers,   
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistID = jsonResponse.id;
                // Add tracks to playList
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: uRIs})
                })
            })
            
        })
    


    

export default Spotify;
import React, {useState, useEffect} from 'react';
import SongRow from './SongRow';

function PlaylistColumn(props) {
	const {playlist} = props;
	const style = {
		width: `${props.width}%`,
	};
    const [songs, setSongs] = useState([]);
	const loadSongs = async (playlistId) => {
		const response = await fetch(`/api/songs?playlistId=${playlistId}`);
		if (response.status === 200) {
			setSongs(await response.json());
		}
	};
	useEffect(() => loadSongs(props.playlist.id), [props.playlist.id]);
	return (
		<div className={`column background${props.index % 4 + 1}`} style={style}>
			<p className="column-title">
				<a href={`#/playlists/${props.playlist.id}`}>{props.playlist.description}</a>
				<a href={`#/playlists/new?playlistId=${props.playlist.id}`} className="add">+</a>
			</p>
			<div className="cards">
				{
					songs.map((song, index) => <SongRow song={song} index={props.index} key={index}/>)
				}
			</div>
		</div>
	);
}

export default PlaylistColumn;
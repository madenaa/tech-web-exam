import React from 'react';

function SongRow(props) {
    const {song} = props;
	return (
		<div className={`card background${props.index % 4 + 1}`}>
			<p>
				<a href={`#/songs/${props.song.id}`}>{props.song.title}</a>
			</p>
		</div>		
	);
}

export default SongRow;
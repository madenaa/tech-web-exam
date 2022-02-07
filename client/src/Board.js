import {useState, useEffect} from 'react';
import PlaylistColumn from './PlaylistColumn';

function Board() {
  const [playlists, setPlaylists] = useState([]);
  const loadPlaylists = async () => {
    const response = await fetch ('/api/playlists');
    if (response.status === 200) {
        setPlaylists(await response.json());
    }
  };
  useEffect(() => loadPlaylists(), []);
  return (
  <div className="container">
    {
      playlists.map((playlist, index) => <PlaylistColumn key={index} playlist={playlist} index={index} width={100 / playlists.length - 1} />)
    }
  </div>
  )
}

export default Board;
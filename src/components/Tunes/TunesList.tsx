import React from 'react'
import { Song } from '../../views/types/'


// styles
import './TunesList.scss'

// children
import TunesSong from './TunesSongs'

// props
interface Props {
    songs: Song[]
}

//component
const TunesList = (props: Props) => {
    const { songs } = props


    // template
    return (
        <ul className="tunes-list">
            {songs.map(song => (
                <li key={song.id}> 
                 <TunesSong song={song}/> 
                 </li>
            ))}
        </ul>
    )
}

export default TunesList

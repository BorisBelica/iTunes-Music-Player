import React, { useMemo, useEffect } from 'react'
import { Song } from '../../views/types'
import { truncate } from 'lodash-es'        // odsekne dlhz nayov

// styles
import './TunesSong.scss'

//props
interface Props { song: Song }

// component
export const TunesSongs = (props: Props) => {
    const { song } = props

    // make it pretty
    // use memo iba ak sa zmeni jedna z hodnot spusti sa funkcia
    const songify = useMemo(
        () => (song: Song): string => {
        const newTitle = song.artist + ' - ' + song.title
        return shorten(newTitle, 100)  // max 100 znakov nazov
    }, 
    [song.title, song.artist]       // iba ak sa zmeni jedna z hodnot
    )

    const shorten = (str: string, len = 55): string => {
        return truncate(str, { length: len})
    }


    //template
    return (
        <article className="song">
            <div className="inside">
                <h2>{songify(song)}</h2>
                <p className="meta">Album: {shorten(song.album)}</p>
                <p className="meta">Artist: {shorten(song.artist)}</p>
                <div className="player">
                     { song.artwork && (
                      <img src={song.artwork} alt="album art" />   
                     )}

                     <audio controls src={song.audioFile}/>
                </div>
            </div>    

            <footer></footer>
        </article>
    )
}

export default TunesSongs


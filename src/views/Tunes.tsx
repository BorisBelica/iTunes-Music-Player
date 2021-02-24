import React, { useState } from 'react'
import axios from 'axios' // praca s api po npm i axios
import { Song } from './types'

//children
import TunesSearchForm from '../components/Tunes/TunesSearchForm'
import TunesList from '../components/Tunes/TunesList'

// styles
import './Tunes.scss'

//
interface SongFromITunes {
    trackId: number
    artistName: string
    previewUrl: string
    artworkUrl100?: string
    trackName: string
    collectionName: string
    kind?: string
}



// props
interface Props {}

// component
export const Tunes = (props: Props) => {
    
    //state
    const [songs, setSongs] = useState([])  // pole songov
    
    // praca s API z iTunes
    const handleSearch = (query: string) => {

        const url = `https://itunes.apple.com/search?term=${encodeURI(query)}&entity=musicTrack&limit=5`

        // pripojenie cez api na itunes

        axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*'}
            } 
        ).then(response => {     
            let iTunesSongs = response.data.results
            .filter((song: SongFromITunes) => song.kind === 'song') // or any
            .map((song: SongFromITunes) => extractData(song))       // or any
            
        setSongs(iTunesSongs)
        })   
    }

    // len vlastnosti ktore nas zaujimaju, extrahuje
    // rozlozenie na vlasnosti, ostanu premenne
    // objekt ako parameter,
    //@ts-ignore
    const extractData = ({ 
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album

    }: SongFromITunes)  => {   //  any = objekt cheat, neurcis aky presny objekt to je
        return { id, artist, audioFile, artwork, title, album } as Song
        // novvy objekt vytvarame, pousvanie stavu do child props
    }
    

    // template
    return (
        <article className="tunes">
            <h1 className="title-page">Song name?</h1>
            <p className="tip">TIP: Darude - Sandstorm</p>
            <TunesSearchForm onSearch={handleSearch} />
            <TunesList songs={songs}/>
        </article>
    )
}

export default Tunes
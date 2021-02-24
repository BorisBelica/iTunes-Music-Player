import React, { useState, useEffect } from 'react'

// styles
import './Home.scss'

// assetes


interface Props {}

export const Home = (props: Props) => {
    //const [title, setTitle] = useState('React Home page 25')

    useEffect(() => { 
        document.title = 'Music Player'
    })

    return (
        <div className="home">
            <h1 className="title-page">Welcome</h1>
            <p>iTunes is a media player, media library, Internet radio broadcaster, 
                mobile device management utility, and the client app for the iTunes Store, 
                developed by Apple Inc. 
            </p>
            <p>It is used to purchase, play, download, and organize digital multimedia, on personal computers running the macOS and Windows operating systems, 
                and can be used to rip songs from CDs, 
                as well as play content with the use of dynamic, smart playlists. 
                Options for sound optimizations exist, as well as ways to wirelessly share the iTunes library. 
            </p>
        </div>
    )
}

export default Home
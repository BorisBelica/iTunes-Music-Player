// vytvorenie objektov, vlastne premenne

export interface Song {
    id: number
    artist: string
    audioFile: string
    artwork?: string   // optional 
    title: string
    album: string
}

export interface User {
    firstName: string
    lastName: string
    favoriteSong?: Song     // optional 
}
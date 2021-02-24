import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'    // pol sekundy cakanie lodash-es debounde funkcia


// styles
import './TunesSearchForm.scss'


// props
interface Props {
    onSearch: (query: string) => void
}

//component
const TunesSearchForm = (props: Props) => {

    // odkaz na input element vo formulari
    const searchInput = useRef<HTMLInputElement>(null)
    //const { searchQuery } = props

    //input element
    const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
        //props.onInputChange(e.target.value)
    }, 500)     // pol sekundy

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()  // zabrani refreshu stranky
        searchForMusic()  
       //props.onSearchFormSubmit(searchQuery)      
    }

    //search for music
    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                ref={searchInput}
                onChange={handleInput}
                className="search"
                placeholder="Type your song name..."
                 />
            </form>
        </div>
    )
}

export default TunesSearchForm

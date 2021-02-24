import React from 'react'

// styles
import './About.scss'

//components
interface Props {}

export const About = (props: Props) => {
    return (
        <div className="about">
            <h1 className="title-page">About</h1>
            <article>
                <p>iTunes Music player</p>
                <p>Version: 1.0</p>
                <p>Technology: React.js, Typescript, Bootstrap, SCSS, HTML</p>
                <p>Github: <a href="https://github.com/BorisBelica/iTunes-Music-Player" rel="noreferrer" target="_blank">link</a></p>
            </article>
        </div>
    )
}

export default About

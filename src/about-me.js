import React, { Component } from 'react'
import {SiteNav1} from './SiteNav'
import {SiteNav2} from './SiteNav'



class aboutme extends Component {
    render() {
        return (
            <div>
                <header>
                <h1>
                    Dalan Lewis
        </h1>
            </header>
            <article>
                <img src="Marvin.png" alt="MarVln" />
                <h2>
                    Bio
                </h2>
                <p>
                    Born and raised in Utah, I developed a passion for creativity from an early age. From writing stories, composing music, to my new passion Coding. I seek to develop myself into a invaluable asset to any potential employer or business partner. I seek to amaze with anything I put my hands on.
                    </p>
            </article>
            <article>
                <h2>
                    Why Code?
                </h2>
                <p>
                    It's simple. I believe the knowledge to code, coupled with my creativity will give me the tools I need to express myself in a marketable, and unforgetable way.
                    </p>
            </article>
            <article>
                <h2>
                    Additional Info:
            </h2>
                <p>
                    I have asked my closest friends and family to describe me in one word. I always seem to get the same answer: Passionate. I honestly cannot argue with that. Any free time I have is spent playing on my guitar, or with my small family. (I often play video games as well) One day I hope to provide them with all their hopes and dreams on a silver platter.
                </p>
            </article>
            <nav>
                <ul>
                    <SiteNav1/>
                    <SiteNav2/>
                </ul>
            </nav>
            <h5>
                Contact Me!
                </h5>
            <form>
                Name: <input type="text" /><br />
                Email: <input type="text" /><br />
                Request: <textarea rows="5" cols="40"></textarea><br />
                <button>Submit!</button>
            </form>
            </div>  
        )
    }
}

export default aboutme
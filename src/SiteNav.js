import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render = () => {
        return (
            <Fragment>
                <Link to="/" alt="about-me"> Home </Link>
            </Fragment>
        )
    }
}

export { SiteNav }

class SiteNav1 extends Component {
    render = () => {
        return (
            <Fragment>
                <Link to="experience" alt="work-experience">Work Experience</Link>
                <li><a href="https://github.com/MarVlnMartian">Github</a></li>
                <li><a href="https://www.linkedin.com/in/dalan-lewis-58a711174">linkedin.com</a></li>
            </Fragment>
        )
    }
}

export { SiteNav1 }
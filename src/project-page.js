import React, { Component, } from 'react'
import ProjectItem from './projectitem'
import {SiteNav} from './SiteNav'
import {SiteNav1} from './SiteNav'

class ProjectPage extends Component {
    render = () => {
        return (
            <div>
            <h1>Projects</h1>
            <section>
                <ProjectItem name="about-me" description="a portfolio of sorts as seen here... being where you IN the project congrats" dates="December 6th 2018"/>
            </section>
        <SiteNav /><br/>
        <SiteNav1 />
        </div>
        )
    }
}
export default ProjectPage
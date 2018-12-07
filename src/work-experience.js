import React, { Component } from 'react'
import { SiteNav } from './SiteNav'
import WorkExperienceItem from './WorkExperienceItem'


class experience extends Component {
    render() {
        return (
            <div>

                <h1>Dalan's Work Experience</h1>

                <article>
                    <section>
                        <WorkExperienceItem company="ServerPlus" dates="May 2016 to October 2017" jobRole="Trainer" />
                            <p>
                                Create training material, research and implement training exercises, Supervise new  technicians, Raise retention rates, Scheduling, Organize meetings, Set an example, Implement changes made within the company, Communicate with employees, Create testing material, Make You-Tube Videos about training and post them online, ETC. (also see tech support)
                            </p>
                    </section>
                    <section>
                        <WorkExperienceItem company="ServerPlus" dates="January 2016 to May 2016" jobRole="Tech support" />
                        <p>
                            Answer Phone calls, Troubleshooting Internet connectivity issues, Troubleshooting Email Issues, Troubleshooting routers, All types of Billing calls, Customer retention, Self Education.
                        </p>
                    </section>
                    <section>
                        <WorkExperienceItem company="Vivint Smart Home" dates="April 2015 to January 2016" jobRole="Installer"/>
                        <div>
                            <p>
                                On the Summer Install Team, Also Traveled to California, and Texas for installs during off season. Required to run wire, mount equipment, work power-tools, programming equipment, Customer satisfaction and retention.
                    </p>
                        </div>
                    </section>
                </article>
                <footer>
                    <nav>
                        <ul>
                            <li>
                                <SiteNav />
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
        )
    }
}

export default experience
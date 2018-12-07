import React, { Component, Fragment } from 'react'

class workexperienceitem extends Component {
    render() {
        return (
            <Fragment>
                <h2>{this.props.company}</h2>
                <p>
                    {this.props.jobRole}<div/>
                    <span>{this.props.dates}</span>
                </p>
            </Fragment>
        )
    }
}

export default workexperienceitem
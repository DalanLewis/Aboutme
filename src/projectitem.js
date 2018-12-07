import React, { Component, Fragment } from 'react'

class projectitem extends Component {
    render() {
        return (
            <Fragment>
                <h2>{this.props.name}</h2>
                <p>
                    <span>{this.props.dates}</span><br/>
                    {this.props.description}<br/>
                </p>
            </Fragment>
        )
    }
}

export default projectitem
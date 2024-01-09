import React, { Component } from 'react'

export default class LifeCycleB extends Component {


    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }


    constructor(props) {
        super(props)
        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycleB getDerivedStateFromProps")
        return null

    }


    render() {
        console.log("LifeCycleB render")
        return (
            <div>LifeCycleB</div>
        )
    }
}

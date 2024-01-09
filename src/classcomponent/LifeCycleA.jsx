import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }


    constructor(props) {
        super(props)
        this.state = {
            name: "Sangeetha"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null

    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>LifeCycleA</h1>
                <h3>{this.state.name}</h3>
                <LifeCycleB />
            </div>
        )
    }



}

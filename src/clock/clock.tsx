import * as React from 'react'
import './clockStyle.scss'

interface states {
    dateFormat: string
    parsedTime: string
}

export default class Clock extends React.Component<{},states> {
    constructor(props: {}) {
        super(props)
        this.state = {
            dateFormat: 'YYYY-MM-DD HH:mm:ss',
            parsedTime: ''
        }
    }
    
    render(){
        return(
            <div id="clock">
                Hello World
            </div>
        )
    }
}
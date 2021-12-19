import * as React from 'react'
import * as Moment from 'moment'
import './clockStyle.scss'

interface states {
    dateFormat: string
    parsedTime: string
    clockInterval: NodeJS.Timer | undefined
}

export default class Clock extends React.Component<{},states> {
    constructor(props: {}) {
        super(props)
        this.state = {
            dateFormat: 'YYYY-MM-DD HH:mm:ss',
            parsedTime: '',
            clockInterval: undefined
        }
    }

    updateTime() {
        const time = Moment().format(this.state.dateFormat)
        this.setState({
            parsedTime: time
        })
    }

    componentDidMount() {
        this.setState({
            clockInterval: setInterval(this.updateTime.bind(this),100)
        })

        /**
         *  converts URL parameter into an object
         *  https://stackoverflow.com/a/8649003
         */

        const search = location.search.substring(1);
        const param = !search ? {} : JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })

        this.setState((prevStates:states)=>({
            dateFormat: param.format ?? prevStates.dateFormat
        }))
    }

    componentWillUnmount() {
        clearInterval(this.state.clockInterval)
    }
    
    render(){
        return(
            <div id="clock">
                <span>{this.state.parsedTime}</span>
            </div>
        )
    }
}
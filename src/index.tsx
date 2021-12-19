import * as React from 'react'
import {render} from 'react-dom'

import Clock from './clock/clock'

class Main extends React.Component {
    constructor(props:{}) {
        super(props)
    }

    render(){
        return(
            <Clock />
        )
    }
}

render(<Main />,document.getElementById('root'))
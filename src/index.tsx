import * as React from 'react'
import {render} from 'react-dom'

class Main extends React.Component {
    constructor(props:{}) {
        super(props)
    }

    render(){
        return(
            <p>Hello World</p>
        )
    }
}

render(<Main />,document.getElementById('root'))
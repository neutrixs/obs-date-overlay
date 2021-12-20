import * as React from 'react'
import {lazy, Suspense} from 'react'
import {render} from 'react-dom'

const Clock = lazy(()=>import('./clock/clock'))

class Main extends React.Component {
    constructor(props:{}) {
        super(props)
    }

    render(){
        return(
            <Suspense fallback={null}>
                <Clock />
            </Suspense>
        )
    }
}

render(<Main />,document.getElementById('root'))
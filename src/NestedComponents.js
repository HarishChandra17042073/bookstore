import React from 'react'

function NestedComponents() {
    return (
        <div>
            <h1>This is Parent Component</h1>
            <Child />
        </div>
    )
}
const Child= () => {
    return(
        <div>
            <h3>I am kid</h3>
        </div>
    )
}


export default NestedComponents

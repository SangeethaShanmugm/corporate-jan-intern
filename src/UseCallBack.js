import React, { useCallback, useState } from 'react'

function UseCallBack() {
    const [count, setCount] = useState(0)

    // //without UseCallBack
    // const handleClick = () => {
    //     console.log("Button Clicked")
    // }

    //with UseCallBack
    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])


    return (
        <div>UseCallBack
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseCallBack
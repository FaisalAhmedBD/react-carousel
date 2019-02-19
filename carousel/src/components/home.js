import React, { useState, useEffect } from 'react'

export default () => {
    let customInterval
    const [count, setCount] = useState(0)
    useEffect(() => {
        customInterval = setInterval(setCount(count + 1), 5000)
        return () => {
            clearInterval(customInterval)
        }

    })
    return (
        <span>
            <p>button clicked {count}times</p>
        </span>
    )
}
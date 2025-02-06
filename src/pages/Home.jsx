<<<<<<< HEAD
import React from "react"

function Home() {

    const [count, setCount] =  React.useState(0)


    return (
        <>
            <p className="number-test">{count}</p>
            <button onClick={() =>setCount(count + 1)}>+</button>
            <button onClick={() =>setCount(count - 1)}>-</button>
        </>
=======
function Home {
    return (
        
>>>>>>> 0ee14841fae84ff62868b1f07f67d89e31107187
    )
}

export default Home
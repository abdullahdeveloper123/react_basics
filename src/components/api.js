import React from 'react'
import { use, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



function Api() {
    let [isloading, setIsloading] = useState(false)
    let [data, setData] = useState({})

    async function get() {
        setIsloading(true)

        await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })

        setIsloading(false)
    }

    useEffect(() => {
        get()

    }, [])
    return (
        <>
            <button className="send_request btn-dark py-2 px-3" onClick={get}>
                Send Request
            </button>

            <div id='main_api' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div class="loader" style={isloading ? { display: "block" } : { display: "none" }}></div>
                <div className="api_data" style={isloading ? { display: "none" } : { display: "block" }}>
                    <h1>Fetched Response</h1>
                    <p>UserId: {data.userId}</p>
                    <p>Title : {data.title}</p>
                    <p>completed: {data.completed ? "Task completed" : "Not Completed"}</p>
                </div>
            </div>

        </>

    )
}

export default Api
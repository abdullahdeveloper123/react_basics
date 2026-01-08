import React, { useState } from 'react'

function CustomToggle() {
    let [istoggle, setIstoggle] = useState(true)


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            gap: "16px",
        }}>
            {istoggle && <h1>React is easy!</h1>}
            <button onClick={() => setIstoggle(!istoggle)} className='bg-dark text-light border-none'>Custom Toggle</button>
        </div>

    )
}

export default CustomToggle
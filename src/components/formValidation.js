import React, { useState } from 'react'

function FormValidation() {

    let [isvalidate, setIsvalidate] = useState(true)
    let [validationmessage,setValidationmessage] = useState("")

    let validate = (e) => {
        e.preventDefault();
        if (e.target.password.value == e.target.confirm_password.value) {
            if (e.target.name.value.length < 3) {
                setValidationmessage('Enter valid name')
                setIsvalidate(false)
            } else {
                setValidationmessage("Form Is Validated!")
                setIsvalidate(true)
            }
        } else {
            console.log('Password Not Matched')
            setValidationmessage('Password Not Matched')
            setIsvalidate(false)


        }

    }
    return (


        <div  className="form-wrapper">
            <p className={isvalidate?"text-success":"text-danger"}>{validationmessage}</p>
            <form action="" onSubmit={validate}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' />
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' />
                <label htmlFor="password">Password</label>
                <input type="text" id='password' name='password' />
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="text" id='confirm_password' name='confirm_password' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormValidation
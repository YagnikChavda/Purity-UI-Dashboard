import React, { useCallback, useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function SignUpForm() {

    // For post data database via API

    const [errorMessage, setrrorMessage] = useState(null);

    const userDefaultValue = {
        username: '',
        email: '',
        password: '',
    }
    const [allValues, setAllValues] = useState(userDefaultValue);
    
    const userDataHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value });
    }

    const userData = async (data) => {

        setrrorMessage(null);

        try {
            const response = await fetch("https://react-project-738e6-default-rtdb.firebaseio.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.parse(data),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            
            const result = await response.json();

            const userDataList = [];

            for (const key in result) {
                userDataList.push({
                    Name: result[key].name,
                    emailID: result[key].emailid,
                    password: result[key].password
                });
            }
            alert("afas");
            setAllValues(userDataList);
            console.log(userDataList);
        }   
        catch(error) {
            setrrorMessage(error.message);
        }
    }

    const signUpFormSubmitHandler = (e) => {
        e.preventDefault();
        setAllValues(userDefaultValue);
        console.log(allValues);
    }
    
    useEffect(() => {
        userData(userDataHandler)
    }, [signUpFormSubmitHandler]);

    return (
        <Form onSubmit={signUpFormSubmitHandler}>
            <Form.Group className="input-items" controlId="formBasicName">
                <Form.Label> Name </Form.Label> 
                <Form.Control value={allValues.username} name="username" onChange={userDataHandler} type="text" placeholder="Your full name" required />
            </Form.Group>

            <Form.Group className="input-items" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control value={allValues.email} name="email" type="email" onChange={userDataHandler} placeholder="Your email address" required />
            </Form.Group>

            <Form.Group className="input-items" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={allValues.password} name="password" type="password" onChange={userDataHandler} placeholder="Your password" required />
            </Form.Group>

            <Form.Check type="switch" id="custom-switch" label="Remember me" defaultChecked />
            <Button className="btn-submit" variant="primary" type="submit">
                SIGN UP
            </Button>
            <Form.Text className="sign-in-link">
                Don't have an account? <Link to="/signin">Sign In</Link>
            </Form.Text>
        </Form>
    )
}

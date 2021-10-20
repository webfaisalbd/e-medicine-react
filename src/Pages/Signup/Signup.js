import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useLocation ,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const {signInUsingGoogle,signUpp,handleName,handleEmail,handlePass,error,setError} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';
    const handleAndRedirect = () => {
        signInUsingGoogle();
       
    }
    return (
        <Container>
            <div className="w-50 mx-auto ">
            
            <div className="py-5 ">
                <div className=" shadow-lg p-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Please enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Please enter your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Please enter your Password" />
                    </Form.Group>

                    <Button onClick={signUpp} variant="primary" type="button">
                        Sign up
                    </Button>

<br /> <br />
                    


                    <Button onClick={handleAndRedirect} variant="success" type="button">
                        Sign up with Google
                    </Button>
                    <p>{error}</p>
                    <Link to="/login">Already Registerred ?</Link>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Signup;
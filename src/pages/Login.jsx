import React from 'react'
import styled from 'styled-components'
import {mobile} from "../response"

const Container= styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) url("") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    
`

const Wrapper= styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"75%"})} // RESPONSIVE
    
`
const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form= styled.form`
    display: flex;
    flex-direction: column;
`


const Input= styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
    
`


const Button= styled.button`
    width: 40%;
    border: none;
    padding:15px 20px ;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
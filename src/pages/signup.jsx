import React from 'react'
import { useRef } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import  {Button, Container, Row, Col}  from "react-bootstrap";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Signup = () => {

const emailRef = useRef();
const passwordRef = useRef();

const signup = (e) => {
    e.preventDefault();
const email = emailRef.current.value;
const password = passwordRef.current.value;


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Cadastrado com sucesso, entre agora na página de login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Dados já cadastrados, Insira outros!")
    // ..
  });
}
const estiloDoBotao = {
    backgroundColor: '#6CB2C1',
    border: 'none',
    textDecoration: 'none',
  }


  return (
<>

<div className='container text-center coluna-login-2'>
    <Row className='row justify-content-center'>
        <Col className='coluna-login-r1 col' >
          <h1 className='h1-cadastro'>Já tem uma conta? Seja bem vindo de volta!</h1>
          <Link href="./Login">
      <Button className='btn button-login2' style={estiloDoBotao}>Login</Button>{' '}   </Link>
        </Col>

        <Col className='coluna-login-r2 flex-grow-3' sm={6}>
          Digite o seu e-mail e senha para continuar e acessar sua plataforma
    
     <Form onSubmit={signup}>

<Form.Group className="inputLogin mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label></Form.Label>
<Form.Control type="email" placeholder="name@example.com" 
              style={{ backgroundColor: '#f0f0f0', border: 'none' }}  
              ref={emailRef} /> 
</Form.Group> 
      <Form.Label htmlFor="inputPassword5"  ></Form.Label>

<Form.Control
     className="inputPass"
              type="password"
              id="inputPassword5"
              placeholder="Password"
              aria-describedby="passwordHelpBlock"
              ref={passwordRef}
              style={{ backgroundColor: '#f0f0f0', border: 'none' }}  />
<Button type='submit' className='bt-cadastro' style={estiloDoBotao} > Cadastrar </Button>
</Form>
</Col>
</Row>
</div>                    
  


</>
)
};

export default Signup;
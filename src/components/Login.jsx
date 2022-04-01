import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = (props) => {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      const newUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
      }
      localStorage.setItem('user', JSON.stringify(newUser));
      props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message)
    })
  };

  return (
    <Container>
      <Content>
        <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="logo" />
        <h1>Sign Into Slack</h1>
        <SignInButton onClick={signIn}>
          Sign In With Google
        </SignInButton>

      </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 10px;
  box-shadow: -3px 6px 12px -3px rgba(0,0,0,0.24);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SlackImg = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background: #2EB67D;
  color: white;
  border: none;
  padding: 5px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
`;
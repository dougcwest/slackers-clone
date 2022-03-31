import React from 'react'
import styled from 'styled-components';
import SendIcon from "@material-ui/icons/Send";

const ChatInput = () => {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButtton>
            <SendIcon /> 
          </SendButtton>
        </form>
      </InputContainer>
    </Container>
  )
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;

`;

const InputContainer = styled.div`
  border: 1px solid #342180;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      outline: none;
      color: #1e1926;
      font-weight: 300;
      font-size: 15px;
    }
  }
  
`;

const SendButtton = styled.div`
  color: white;
  background: #b7a2d7;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  
  .MuiSvgIcon-root {
    width: 20px;
  }
`;

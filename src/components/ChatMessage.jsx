import React from 'react'
import styled from 'styled-components';

const ChatMessage = () => {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/0.jpg" alt="avatar" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Denny Q.
          <span>8:45 pm</span>
        </Name>
        <Text>
          Beans and Rice
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage;

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  height: 64px;
`;

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    font-weight: 400;
    color: rgb(97,96,97);
    margin-left: 10px;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const Text = styled.span`

`;
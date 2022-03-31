import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const Chat = () => {
  return (
    <><Container>
      <Header>
        <Channel>
          <ChannelName>
            # channel1  
          </ChannelName> 
          <ChannelInfo>
            info  
          </ChannelInfo>     
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <InfoOutlinedIcon style={{ marginLeft: "10px"}} />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
    </>
  )
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content; 
`;

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83,.13);
  justify-content: space-between;
`;

const MessageContainer = styled.div`

`;

const Channel = styled.div`
  
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #1e1926;
  font-weight: 400;
`;

const ChannelName = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #1e1926;
  cursor: pointer;

  &:hover {
    background: #ebecf0;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const ChannelInfo = styled.div`
  font-weight: 500;
  color: #606060;
  font-size 18px;
  margin-top: 6px;
`;
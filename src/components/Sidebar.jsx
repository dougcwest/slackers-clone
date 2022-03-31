import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>
          <h3>Parsity Students</h3>
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {
          sidebarItems.map((item, index) => (
            <MainChannelItem tabIndex={1} key={index}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))
        }
        
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            <h3><strong>Channels</strong></h3>
          </div>
          <AddIcon style={{ color: 'white'}}/>
          </NewChannelContainer>
          <ChannelsList>
            <Channel tabIndex={1}>
              # Channel1
            </Channel>
            <Channel tabIndex={1}>
              # Channel2
            </Channel>
          </ChannelsList>
      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`
  background: #3c15d6;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3c15d6;
  fill: #3c15d6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`; 

const MainChannels = styled.div`
  padding-top: 20px;

`;

const MainChannelItem = styled.div`
color: lightgray;
display: grid;
grid-template-columns: 15% auto;
height: 36px;
align-items: center;
padding-left: 19px;
cursor: pointer;
margin-bottom: 8px;

&:hover {
  background: #342180;
}
&:focus {
  background: #b7a2d7;
  color: white;
}
`;

const ChannelsContainer = styled.div`
  color: lightgray;
  margin-top: 10px;

  h3 {
    color: white;
  }

`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  padding-left: 19px;
  padding-right: 32px;
`;

const ChannelsList = styled.div`
`;

const Channel = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 19px;

  &:hover {
    background: #342180;
  }
  &:focus {
    background: #b7a2d7;
    color: white;
  }
`;
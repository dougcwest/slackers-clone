/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import 'firebase/firestore';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';


function Chat( { user }) {

  let { channelId } = useParams();
  const [channel, setChannel] = useState(); 
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
    })
  }  
  //const sendMessage2  = (text) => {
    //sendMessage(messages, setMessages, text, channelId)
  //}
  const sendMessage = (text) => {
    if (channelId) {
      const t = firebase.firestore.Timestamp.fromDate(new Date());
      const d = t.toDate().toDateString();
      db.collection('rooms').doc(channelId).collection('messages').add({
        text: text,
        timestamp: d,
        user: user.name,
        userImage: 'https://i.imgur.com/6VBx3io.png', 
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);  
      });
    };
  };      

  const getChannel = () => {
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot) => {
      setChannel(snapshot.data());
    })
    
  }

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId])

  return (
    <><Container>
      <Header>
        <Channel>
          <ChannelName>
            #{channel && JSON.stringify(channel.name).slice(1, -1)}  
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
        {
          messages.length > 0 && 
          messages.map((data, index)=> (
            <ChatMessage 
              key={index}
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))
        }
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
    </>
  )
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content; 
  min-height: 0;
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
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  overflow-y: scroll;
`;

const Channel = styled.div`
  
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #373838;
  font-weight: 400;

  &:hover {
    color: #f7969e;
  }
`;

const ChannelName = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #f7969e;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const ChannelInfo = styled.div`
  font-weight: 500;
  color: #606060;
  font-size 18px;
  margin-top: 4px;
`;
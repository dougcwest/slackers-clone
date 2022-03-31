import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..."/>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>
          Doug
        </Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="avatar" />
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  background: #342180;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;

const UserContainer = styled.div`
  display: flex;  
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;

`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;

  input {
    background: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: white;
    outline: none;
  } 
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #b7a2d7;;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;
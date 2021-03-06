import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db, { auth } from './firebase';
import { useEffect, useState } from 'react';

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name };
      }));
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  };

  useEffect(() => {
    getChannels();  
  }, []);
  
  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
          <Container>
            <Header signOut={signOut} user={user}/>
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId"> 
                    <Chat user={user}/>  
                  </Route>
                  <Route path="/">
                    This will be the main login page
                  </Route>
                </Switch>
              </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App; 

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
`;


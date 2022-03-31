import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './firebase';

function App() {

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      console.log(snapshot.docs);
    });
  };

  getChannels();

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
            <Main>
              <Sidebar />
              <Routes>
                <Route path="/room" element={<Chat />}>  
                </Route>
                <Route path="/" element={<Login />}>
                </Route>
              </Routes>
            </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App; 

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
`;


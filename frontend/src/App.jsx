import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
import { View } from './Components/View';
import Playlistview from './Components/Playlistview';
import Playlistcreate from './Components/Playlistcreate';
import Songview from './Components/Songview';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
 const [data, setdata]= useState({});
  return (
    <Router>
      
    <AppContainer>
      <Sidebar  data={data}  />
      <MainContent>
        <Navbar />
      
     <Routes>
            <Route path="/" element={<Home />} />          {/* Home page */}
            <Route path="/view/album/:id" element={<View />} />  {/* View page */}
             <Route path="/view/playlist/:id" element={<Playlistview data={data}  />} />  {/* View page */}
             <Route path="/view/song/:id" element={<Songview   />} />  {/* View page */}
             <Route path="/Playlistcreate" element={<Playlistcreate setdata={setdata}  />} />  {/* View page */}
             
          </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
    

  
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  padding-bottom: 70px; /* Footer height */

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 56px; /* smaller footer on mobile */
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 350px;  /* leave space for sidebar */
  padding: 20px;
  overflow-y: auto;
  max-width: calc(100% - 350px);

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    padding: 1rem;
  }
`;



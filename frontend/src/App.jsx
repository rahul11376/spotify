import React from 'react';
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


import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
      
     <Routes>
            <Route path="/" element={<Home />} />          {/* Home page */}
            <Route path="/view/:id" element={<View />} />  {/* View page */}
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



import React from 'react';
import styled from 'styled-components';
import assets from '../assets/assets';

const Sidebar = () => {
  return (
    <SidebarDiv>
      <TopSection>
        <NavItem>
          <img src={assets.home_icon} alt="Home" />
          <span>HOME</span>
        </NavItem>
        <NavItem>
          <img src={assets.search_icon} alt="Search" />
          <span>SEARCH</span>
        </NavItem>
      </TopSection>

      <LibrarySection>
        <LibraryHeader>
          <img src={assets.stack_icon} alt="Library" />
          <h3>Your Library</h3>
          <LibraryActions>
            <img src={assets.plus_icon} alt="Add" />
            <img src={assets.arrow_icon} alt="Next" />
          </LibraryActions>
        </LibraryHeader>

        <Playlist>
          <h4>Create your first Playlist</h4>
          <p>It's easy we'll help you</p>
          <button>Create Playlist</button>
        </Playlist>

        <Playlist>
          <h4>Let's find some podcast to follow</h4>
          <p>We'll keep you updated on new episodes</p>
          <button>Browse podcasts</button>
        </Playlist>
      </LibrarySection>
    </SidebarDiv>
  );
};

export default Sidebar;

const SidebarDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100vh;
  background-color: #222222;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;

  &:hover {
    background-color: #333333;
  }

  img {
    width: 25px;
    height: 25px;
  }

  span {
    user-select: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const LibrarySection = styled.div`
  margin-top: 20px;
  background-color: #222222;
  border-radius: 8px;
  padding: 10px;
`;

const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0 10px;
    font-size: 18px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

const LibraryActions = styled.div`
  display: flex;
  gap: 10px;

  img {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;

const Playlist = styled.div`
  background-color: #333333;
  //border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  text-align: center;

  h4 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 15px;
    font-size: 14px;
    color: #ccc;
  }

  button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 768px) {
    display: none; /* hide on mobile for simplicity */
  }
`;



















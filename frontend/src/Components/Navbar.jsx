import React from 'react';
import styled from 'styled-components';
import assets from '../assets/assets';

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavTop>
        <NavArrows>
          <img src={assets.arrow_left} alt="Back" />
          <img src={assets.arrow_right} alt="Forward" />
        </NavArrows>

        <NavButtons>
          <button className="normal">Explore Premium</button>
          <button className="normal">Install App</button>
          <button className="round">D</button>
        </NavButtons>
      </NavTop>

      <FilterButtons>
        <button className="btn active">All</button>
        <button className="btn">Music</button>
        <button className="btn">Podcasts</button>
      </FilterButtons>
    </NavbarDiv>
  );
};

export default Navbar;

const NavbarDiv = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  img {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;

const NavArrows = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 15px;

  button {
    cursor: pointer;
    border-radius: 25px;
    border: none;
    font-weight: 600;
  }

  .normal {
    background-color: white;
    color: black;
    padding: 10px 20px;
  }

  .round {
    background-color: pink;
    width: 40px;
    height: 40px;
    color: black;
    font-weight: bold;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: black;
    color: white;
    border: none;
    font-weight: 600;
  }

  .active {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    > *:not(.btn) {
      display: none;
    }
  }
`;


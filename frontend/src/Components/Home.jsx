import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {albumsData} from "../assets/assets.js";

const Home = () => {
  
        
  return (
    <HomeContainer>
      <SectionTitle>Featured Charts</SectionTitle>
      <CardRow>
        {albumsData.map((album, i) => (
          <Link key={album.id}     to={`/view/album/${album.id}`} style={{ textDecoration: "none" }}>
           
            <Card  >
              <CardImage  src={album.image}/>
              <CardTitle>{album.name}</CardTitle>
              <CardDesc>{album.desc}</CardDesc>
            </Card>
          </Link>
        ))}
      </CardRow>

      <SectionTitle>Today's Biggest Hits</SectionTitle>
      <CardRow>
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardImage />
            <CardTitle>Song {i + 1}</CardTitle>
          </Card>
        ))}
      </CardRow>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    cursor: pointer;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: black;
    border: none;
    color: white;
    font-weight: 600;
  }

  .active {
    background-color: white;
    color: black;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const Card = styled.div`
  cursor: pointer;
  background-color: #222222;
  width: 170px;
  flex: 0 0 auto;  // grow nhi karega , shrink nhi karega,base -- ek baar jagah lega
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  background-color: #444;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const CardDesc = styled.p`
  font-size: 12px;
  color: #aaa;
  margin: 0;
`;


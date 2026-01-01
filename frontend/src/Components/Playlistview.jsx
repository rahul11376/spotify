import React, { useState, useEffect } from "react";
import styled from "styled-components";
import assets from '../assets/assets';

const PlaylistView = ({ data }) => {
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    setPlaylist(data || {}); // fallback to empty object
  }, [data]);

  // safe destructuring
  const { name = "", owner = "", songs = [] } = playlist || {};

  return (
    <Container>
      <Header>
        <Type>Playlist</Type>
        <Title>{name}</Title>
        <Meta>{owner} • {songs.length} songs</Meta>
      </Header>

      <Actions>
        <PlayButton>▶</PlayButton>
        <Icon><img src={assets.shuffle_icon} alt="Shuffle" /></Icon>
        <Icon>⬇</Icon>
        <Icon>⋯</Icon>
      </Actions>

      <SongList>
        <SongHeader>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Date added</span>
          <span>⏱</span>
        </SongHeader>

        {songs.length === 0 && <EmptyText>No songs yet</EmptyText>}
      </SongList>
    </Container>
  );
};

export default PlaylistView;


/* PLAYLIST VIEW */
const Container = styled.div`
  padding: 24px;
  color: white;
  background-color: #121212;
  min-height: 100vh;
`;

const Header = styled.div`
  padding: 40px 30px;
  border-radius: 12px;
  background: linear-gradient(180deg, #4b2db4 0%, #121212 90%);
`;

const Type = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 10px 0;
`;

const Meta = styled.p`
  font-size: 14px;
  color: #ccc;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 30px 0;
  img{
    height:20px;
    width:20px;
  }
`;

const PlayButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: #1db954;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.span`
  font-size: 22px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const SongList = styled.div``;

const SongHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1.5fr 1fr 1fr 80px;
  padding: 12px 0;
  border-bottom: 1px solid #333;
  font-size: 13px;
  color: #aaa;
`;

const EmptyText = styled.p`
  margin-top: 20px;
  color: #aaa;
`;

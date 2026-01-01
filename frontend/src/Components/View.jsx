import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { albumsData, songsData } from "../assets/assets";
import assets from '../assets/assets';
import { useNavigate } from "react-router-dom";
export const View = () => {
      const navigate = useNavigate();
  const { id } = useParams();
  const album = albumsData.find(item => item.id === Number(id));

  if (!album) return <p> album not found!!  </p>;
  


const Totalduration = songsData.map(song=> song.duration );
 // console.log(Totalduration);

const Totalseconds =Totalduration.reduce( (Sum , num)=>{                //[num,num, num ] ,sum=0 initial sum isko dikhana h last main   sum=sum +num; -- reduce work 
    const [min, sec]= num.split(':').map(Number)  ;       // '2:20' min=2,sec=20 // map(Number) take an each element from array and convert into number
       return Sum+min*60+sec;
},0);

const time ={
   hours: Math.floor(Totalseconds / 3600),          // Total hours (3600 sec = 1 hr)
  minutes: Math.floor((Totalseconds % 3600) / 60), // Remaining minutes after hours
  seconds: Totalseconds % 60                        // Remaining seconds after minutes
}
const formatted = time.hours > 0 ? `${time.hours} hr ${time.minutes} min` : `${time.minutes} min`;

//  console.log(formatted);
 const handleviewsong=()=>{
 navigate('/view/song/:id');
 }
   
  return (
    <Container>

      {/* HEADER */}
      <Header $bg={album.bgColor}>
        <AlbumImage src={album.image} alt={album.name} />

        <HeaderInfo>
          <Type>Public Playlist</Type>
          <Title>{album.name}</Title>
          <Desc>{album.desc}</Desc>
          <Meta>
           Spotify • <span>{songsData.length} Songs</span> • <span>{formatted}</span>
          </Meta>
        </HeaderInfo>
      </Header>

      {/* ACTION BAR */}
      <Actions>
        <PlayButton>▶</PlayButton>
        <Icon>  <img src={assets.shuffle_icon}/> </Icon>
        <Icon><img src={assets.plus_icon}/></Icon>
        <Icon>⬇</Icon>
        <Icon>⋯</Icon>
      </Actions>

      {/* SONG LIST */}
      <SongList>
        <SongHeader>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>⏱</span>
        </SongHeader>

        {songsData.map((song, index) => (
          <SongRow key={song.id} onClick={handleviewsong}>
            <Index>{index + 1}</Index>

            <SongTitle>
              <SongImg src={song.image} />
              <div>
                <SongName>{song.name}</SongName>
                <SongArtist>{song.desc}</SongArtist>
              </div>
            </SongTitle>

            <AlbumName>{album.name}</AlbumName>
            <Duration>{song.duration}</Duration>
          </SongRow>
        ))}
      </SongList>

    </Container>
  );
};

const Container = styled.div`
  color: white;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    ${({ $bg }) => $bg} 0%,
    #121212 90%
  );
`;

const AlbumImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Type = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #ddd;
`;

const Meta = styled.p`
display:flex;
gap:5px;
  font-size: 13px;
  margin-top: 8px;
  color: #bbb;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 30px 0;
`;

const PlayButton = styled.button`
  background-color: #1db954;
  color: black;
  font-size: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: #ccc;

  img{
    height: 20px;
    width:20px;
  }
  &:hover {
    color: white;
  }
`;

const SongList = styled.div`
  margin-top: 20px;
`;

const SongHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 80px;
  padding: 10px 0;
  border-bottom: 1px solid #333;
  font-size: 13px;
  color: #aaa;
`;

const SongRow = styled.div`
cursor: pointer;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 80px;
  align-items: center;
  padding: 12px 0;
  border-radius: 4px;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const Index = styled.span`
  color: #aaa;
`;

const SongTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SongImg = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 4px;
`;

const SongName = styled.p`
  font-size: 14px;
  margin: 0;
`;

const SongArtist = styled.p`
  font-size: 12px;
  color: #aaa;
  margin: 0;
`;

const AlbumName = styled.p`
  font-size: 13px;
  color: #ccc;
`;

const Duration = styled.span`
  font-size: 13px;
  color: #aaa;
`;

import React from 'react';
import styled from 'styled-components';
import img8 from '../assets/img8.jpg';
import assets from '../assets/assets';

const Footer = () => {
  return (
    <FooterDiv>
      <SongInfo>
        <img src={img8} alt="cover" />
        <SongDesc>
          <p>Song Name</p>
          <p>Song Description</p>
        </SongDesc>
      </SongInfo>

      <SongPlay>
        <Controls>
          <img src={assets.shuffle_icon} alt="shuffle" className="hide" />
          <img src={assets.prev_icon} alt="prev" />
          <img src={assets.pause_icon} alt="pause" />
          <img src={assets.next_icon} alt="next" />
          <img src={assets.loop_icon} alt="loop" className="hide" />
        </Controls>

        <Progress>
          <p>0:00</p>
         <ProgressLine />
          <p>0:00</p>
        </Progress>
      </SongPlay>

      <Options>
        <img src={assets.plays_icon} alt="plays" />
        <img src={assets.mic_icon} alt="mic" />
        <img src={assets.queue_icon} alt="queue" />
        <img src={assets.speaker_icon} alt="speaker" />
        <img src={assets.volume_icon} alt="volume" />
        <Divider />
        <img src={assets.mini_player_icon} alt="mini player" />
        <img src={assets.zoom_icon} alt="zoom" />
      </Options>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
 // background-color: #222222;
 background-color:BLACK;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  z-index: 10000;

  @media (max-width: 768px) {
    height: 56px;
    padding: 0 12px;
    border-radius: 0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.5);

    .hide, .songlength {
      display: none !important;
    }
  }
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;

const SongDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const SongPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 20px;
      height: 20px;
      margin-left: 8px;
    }
  }
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProgressLine = styled.div`
  flex: 1 1 200px;
  max-width: 360px;
  height: 6px;
  background: #ccc;
  border-radius: 5px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 30px;
  border-left: 1px solid #444;
  margin: 0 10px;
`;



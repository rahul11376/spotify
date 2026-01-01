import {React,useEffect,useState} from 'react';
import styled, { isStyledComponent } from 'styled-components';
import assets from '../assets/assets';
import { useNavigate } from "react-router-dom";
import { FaHeart, FaMusic, FaPodcast, FaStar } from "react-icons/fa";

const iconOptions = [
  { name: "Heart", icon: <FaHeart /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Podcast", icon: <FaPodcast /> },
  { name: "Star", icon: <FaStar /> },
];
const Sidebar = ({data}) => {

  const [playlist, setPlaylist] = useState({});

  const [step,setstep] =useState(1);
   const navigate = useNavigate(); 



  useEffect(() => {
    
    const playlistStr = localStorage.getItem("playlist");

    if (playlistStr) {
     
      const parsedPlaylist = JSON.parse(playlistStr);// CONVERT  STR TO OBJECT THROUGH PARSE
      console.log("Loaded playlist from localStorage:", parsedPlaylist);
      setPlaylist(parsedPlaylist);
    } else {
                                                 // If localStorage is empty, 
      if (data) {
        console.log("Using provided data:", data);
        setPlaylist(data);
      }
    }

    setstep(2);

    console.log("Current playlist state:", playlist);

  }, [data]);

const { name = "", owner = "", songs = [], icon = "" } = playlist;




  const handleclick =()=>{
    navigate('/');
  }
const handleclicknavigate=()=>{
    navigate('/view/playlist/:id');
}
  const addplaylist=()=>{
  navigate('/Playlistcreate')
  }
  return (
    <SidebarDiv>
      <TopSection>
        <NavItem onClick={handleclick}>
          <img src={assets.home_icon} alt="Home" />
          <span >HOME</span>
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
            <img   onClick={addplaylist} src={assets.plus_icon} alt="Add" />
            <img src={assets.arrow_icon} alt="Next" />
          </LibraryActions>
        </LibraryHeader>

      {step== 1 && <Playlist>
          <h4>Create your first Playlist</h4>
          <p>It's easy we'll help you</p>
          <button>Create Playlist</button>
        </Playlist> }
        {step== 2 && <Playlist onClick={handleclicknavigate}>
           <div
    style={{
      width:"100%",
      display: "flex",
      alignItems: "center",
     backgroundColor: "#121212",
      padding: 12,
     // borderRadius: 8,
      cursor: "pointer",
      //marginTop: 15,
        width: "100%", // Full width
      transition: "background-color 0.2s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#282828")}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#121212")}
  >
    {/* Icon with gradient background */}
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 6,
        background:
          "linear-gradient(135deg, #450af5, #c4efd9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        color: "white",
        fontSize: 28,
      }}
    >
      {iconOptions.find((option) => option.name === icon)?.icon || <FaHeart />}
    </div>

    {/* Playlist info */}
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: 16,
          marginBottom: 4,
        }}
      >
        {name || "Unnamed Playlist"}
      </div>

      <div
        style={{
          color: "#b3b3b3",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Inline SVG green pin icon */}
        <svg
          fill="#1db954"
          height="14"
          viewBox="0 0 24 24"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        </svg>
        <span>{`Playlist · ${songs.length} songs`}</span>
      </div>
    </div>
  </div>
          {/* <div>{name}</div>
          <div>{owner}</div>
          <div> {songs}</div>
         <div>  {iconOptions.find(option => option.name === icon)?.icon}</div> */}

             {/* <ul>
         {playlists.map((pl) => (
        <li key={pl.id}>{pl.name}</li>
          ))}
         </ul> */}
        </Playlist> }

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



















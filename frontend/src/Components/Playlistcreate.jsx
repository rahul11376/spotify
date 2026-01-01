import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaMusic, FaPodcast, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const iconOptions = [
  { name: "Heart", icon: <FaHeart /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Podcast", icon: <FaPodcast /> },
  { name: "Star", icon: <FaStar /> },
];

const Playlistcreate = ({ setdata }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const navigate = useNavigate(); 

        const handleclose=()=>{
            navigate("/");
        console.log("closing....")
        }
  const handleCreate = (e) => {
    e.preventDefault();

   
    if (!name || !owner || !selectedIcon) {
      alert("Please fill all fields and select an icon!");
      return;
    }

    const formdata = {
        
      name,
      owner,
      songs: [],
      icon: selectedIcon,
    };

    localStorage.setItem("playlist",  JSON.stringify([formdata]));// locastorage main directly object store nahi kar sakte that why string main convert 
    setdata(formdata);
    navigate('/view/playlist/:id'); 
  };

    return (
      <CreateContainer>
        <CreateCard>

          <CreateTitle> <p>Create Playlist </p>  <p onClick={handleclose}>X</p></CreateTitle>
           
          <Form onSubmit={handleCreate}>
            <Input
              placeholder="Playlist name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Owner name"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
               
            <IconSelectWrapper>
              {iconOptions.map((option) => (
                <IconOption
                  key={option.name}
                  selected={selectedIcon === option.name}
                  onClick={() => setSelectedIcon(option.name)}
                >
                  {option.icon}
                </IconOption>
              ))}
          </IconSelectWrapper>


            <CreateButton>Create</CreateButton>
          </Form>
        </CreateCard>
      </CreateContainer>
    );
}

export default Playlistcreate
/* CREATE PLAYLIST */
const CreateContainer = styled.div`
  //min-height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CreateCard = styled.div`
  background: #181818;
  padding: 32px;
  border-radius: 12px;
  width: 360px;
`;

const CreateTitle = styled.h2`
display:flex;
justify-content:space-between;
  margin-bottom: 20px;
  p{
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #282828;
  color: white;
  outline: none;
`;
const IconSelectWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 15px 0;
`;

const IconOption = styled.div`
  cursor: pointer;
  font-size: 28px;
  padding: 10px;
  border-radius: 8px;
  border: ${({ selected }) => (selected ? "2px solid #1db954" : "2px solid transparent")};
  transition: border 0.2s;

  &:hover {
    border: 2px solid #1db954;
  }
`;


const CreateButton = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 20px;
  border: none;
  background: #1db954;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

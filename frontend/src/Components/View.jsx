import React from 'react';
import { useParams } from "react-router-dom";

export const View = () => {
  const { id } = useParams();  
    

  return (
    <div>
        Viewing item with ID: {id}
        </div> 
  );
};

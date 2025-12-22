import React from 'react'
import style from 'styled-components'
const Sidebar = () => {
  return (
    <SidebarDIV>
      <Container01>

        <Home>
           
        </Home>
        <Search>

        </Search>

     </Container01>
   </SidebarDIV>
  )
}

export default Sidebar
const SidebarDIV = style.div`
width:30%;
height:100vh;
background-color:pink;
`;
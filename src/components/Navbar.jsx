import { AppBar, Avatar, Badge, Box, Icon, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({theme}) =>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({theme}) =>({
  display: "none",
  gap:"1rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme}) =>({
  display: "flex",
  gap:".5rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm:"block"}}}>
          SJCODES
        </Typography>
        <PetsIcon sx={{display: {xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} src="https://media.licdn.com/dms/image/C4E03AQHQMaH69VBmBg/profile-displayphoto-shrink_800_800/0/1517428454455?e=1723075200&v=beta&t=TT8vTm6l87lDwS-ynDfujA1Ds_Tjxwy99mFnktjbmiw"
          onClick={(e)=>setOpen(true)}  
          />
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
          <Avatar sx={{width:"30px", height:"30px"}} src="https://media.licdn.com/dms/image/C4E03AQHQMaH69VBmBg/profile-displayphoto-shrink_800_800/0/1517428454455?e=1723075200&v=beta&t=TT8vTm6l87lDwS-ynDfujA1Ds_Tjxwy99mFnktjbmiw"/>
          <Typography variant='span'>Jay</Typography>
        </UserBox> 
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)} 
        // When clicked anywhere else
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
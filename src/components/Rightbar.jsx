import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const Images = [
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2',
  ];
  return (
    <Box flex={2} p={2} pt={4} sx={{display: {xs:"none", sm:"block"}}}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="John Doe" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Bruce Wayne" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Clark Kent" src="https://mui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {Images.map( (img, key) => (
            <ImageListItem key={key}>
              <img src={img} alt="post"/>
            </ImageListItem>
          ) )}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar
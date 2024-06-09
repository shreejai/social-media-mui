import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom:"20px"
})

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={(e) => setOpen(true)} title="Delete" sx={{
        position: "fixed", bottom: "20px",left: {xs:"calc(50% - 25px)"}
        }}>
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
              <Avatar src="" sx={{width:30, height: 30}}/>
              <Typography fontWeight={500} variant='span'>John Doe</Typography>
            </UserBox>
            <TextField
              sx={{width: "100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={2} mt={2} mb={3}>
              <EmojiEmotions color='primary'/>
              <Image color='secondary'/>
              <VideoCameraBack color='success'/>
              <PersonAdd color='error'/>
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
              <Button>Post</Button>
              <Button sx={{width: "100px"}}><DateRange/></Button>
            </ButtonGroup>
          </Box>
        </StyledModal> 
    </>
  )
}

export default Add
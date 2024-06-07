import { Button, Typography, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
function App() {
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.otherColor.main,
    color: '#888',
    margin: 5,
    "&:hover":{
      backgroundColor:'skyblue'
    },
    "&:disabled":{
      backgroundColor: 'lightgray',
      color: '#fff'
    }  
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<Settings/>} color="otherColor" >Settings</Button>
      <Button variant="contained" startIcon={<Add/>} color="success" >Add New Post</Button>
      <Button variant="outlined" disabled>Outlined</Button>   
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography> 
      <Button variant="contained" disabled sx={{
        backgroundColor:'lightblue',
        color: '#888',
        margin: 5,
        "&:hover":{
          backgroundColor:'skyblue'
        },
        "&:disabled":{
          backgroundColor: 'lightgray',
          color: '#fff'
        }  
        }}>My Unique Button</Button>
      <Button variant="contained" sx={{
        backgroundColor:'lightblue',
        color: '#888',
        margin: 5,
        "&:hover":{
          backgroundColor:'skyblue'
        },
        "&:disabled":{
          backgroundColor: 'lightgray',
          color: '#fff'
        }  
        }}>My Unique Button</Button>
        <BlueButton>My Button</BlueButton>
        <BlueButton disabled>Another Button</BlueButton>
    </div>
  );
}

export default App;

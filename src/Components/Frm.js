import React, { useState } from 'react';
import {Box, TextField, Typography, Button} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';




const Frm = () => {
const [isSignup , setisSignup] = useState(false);
console.log(isSignup);
  return (
    <div>
      <form>
        <Box  borderRadius={5} sx={{display:'flex', ":hover" : { boxShadow : '10px 10px 20px #ccc'}
         , flexDirection:'column',maxWidth:'400px',margin:'auto', alignItems:'center',justifyContent:'center', boxShadow :'5px 5px 10px #ccc' , marginTop:'100px', padding:'10px'}}>

            <Typography  variant="h2" padding = "3px" textAlign="center" >
                {isSignup ? "Signup" : "Login"}
            </Typography>
            { isSignup &&  ( <TextField
                margin="normal"
                variant="outlined" 
                type="text" 
                placeholder = "Name">
                </TextField> )
            }

            <TextField margin="normal" variant="outlined"  type="email" placeholder = "Email"></TextField>
            <TextField margin="normal"  variant="outlined" type="password" placeholder = "Password"></TextField>
            <Button endIcon={ isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/> } variant = "contained" color="warning" sx={{ marginTop:'8px', borderRadius:'10px'}} > 
                {isSignup ? "Signup" : "Login"}
             </Button>
            <Button  endIcon={ isSignup ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>} onClick={()=> setisSignup(!isSignup)}sx={{ marginTop:'8px', borderRadius:'10px'}} endicon='LoginIcon'> 
             
            Change to {isSignup ? "Login" : "Signup"}
            </Button>
        </Box>
      </form>
    </div>
  )
}

export default Frm;

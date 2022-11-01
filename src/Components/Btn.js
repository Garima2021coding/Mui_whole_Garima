import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button,Box } from '@mui/material';

function Btn() {
    return(
    <Box>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
      <Box sx={{flexDirection:'column',display:'flex', gap:'20px'}}>
      <Button variant="contained" sx={{height:'30px', width:'30px', ml:'20px', textTransform:'none'}} >first</Button>
      <Button variant="contained" sx={{height:'30px', width:'30px', ml:'20px', textTransform:'none'}}>Second</Button>
      <Button variant="contained" sx={{height:'30px', width:'30px', ml:'20px', textTransform:'none'}} >Third</Button>
      <Button variant="contained" sx={{height:'30px', width:'30px', ml:'20px', textTransform:'none'}} >Gopal</Button>
      <Button variant="outlined">Gopal</Button>
      <Button>Gopal</Button>
      </Box>
    </Box>
    )
}

export default Btn;

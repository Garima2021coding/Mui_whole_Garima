import * as React from 'react';
// import {Appbar,Toolbar} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tab, Tabs, Button, Box, useTheme, useMediaQuery,Drawer } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import useMediaQuery from '@mui/material/useMediaQuery';


import { useState } from 'react';

const Hdrs = () => {
    const lists = ["Product", "Grocery", "Dispensaries", "Pharmacy"]
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar sx={{ backgroundImage: 'linear-gradient(90deg, rgba(68,58,180,1) 24%, rgba(255,21,0,1) 51%, rgba(218,137,24,1) 77%)' }}>
                <ToolBar>
                    {
                        isMatch ?
                            <>
                                <Grid item xs={2}><ShoppingCartIcon  /></Grid>
                                <>
                                    <Drawer anchor={"right"}  onClose={() => setOpen(false)}>
                                    
                                    <Tabs sx={{marginLeft:'auto'}} indicatorColor='secondary' textColor='inherit' value={value}
                                            onChange={(e, value) => setValue(value)}>
                                            
                                            {
                                                lists.map((item, index) => <Tab label={item} key = {index}/>)
                                            }
                                        </Tabs>
                                    </Drawer>
                                    <Button onClick={()=>setOpen(true)}><MenuOutlinedIcon/></Button>
                                    
                                </>
                            </> :
                            <>
                                <Grid container >
                                    <Grid item xs={2}><ShoppingCartIcon sx={{pt:'10px'}} /></Grid>
                                    <Grid item xs={6}>
                                    <Tabs indicatorColor='secondary' textColor='inherit' value={value}
                                            onChange={(e, value) => setValue(value)}>
                                            
                                            {
                                                lists.map((item, index) => <Tab label={item} key={index}/>)
                                            }
                                        </Tabs>  
                                    </Grid>

                                    <Grid item xs={1}> </Grid>
                                    <Grid item xs={3}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Button sx={{ marginLeft: 'auto', borderRadius:'20px', textTransform:'none' }} variant='contained'>LogIn </Button>
                                            <Button sx={{ marginLeft: '10px', borderRadius:'20px', textTransform:'none' }} variant='contained'>SignUp </Button>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </>
                    }


                </ToolBar>
            </AppBar>
        </>
    )
}

export default Hdrs;


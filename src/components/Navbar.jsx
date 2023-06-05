import { AppBar, Button, Typography, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar>
        <Toolbar>
            <Typography align='left' sx={{flexGrow:1}}> Empapp</Typography>
            <Button style={{color:'white'}}>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
            <Button style={{color:'white'}}>
                <Link to={'/add'} style={{textDecoration:'none',color:'white'}} >Add</Link></Button>
        </Toolbar>
        </AppBar>  
    </div>
  )
}

export default Navbar

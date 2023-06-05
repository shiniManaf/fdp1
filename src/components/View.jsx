import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const View = () => {
 var[pname,setpname]=useState("Shiny");
 var [val,setVal]=useState()
 const changeName=()=>{
    console.log("clicked")
    setpname(val)
 }
 const inputHandler=(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
 }
    return (
    <div>
     <h1>shiny</h1> 
     <Typography variant='h1'>{pname}</Typography>
     <br></br>
     <TextField label='Name' onChange={inputHandler}/>
     <br></br>



     {/* <input placeholder='Name'></input><br></br><br></br>
     <TextField variant='outlined' label='Name'/><br></br>
     <TextField id="filled-basic" label="Age" variant="filled" />
<TextField id="standard-basic" label="Dept" variant="standard" /><br></br><br></br> */}

<Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default View

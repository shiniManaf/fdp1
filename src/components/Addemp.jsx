import { Button, TextField } from '@mui/material'
import React,{useState} from 'react'

const Addemp = () => {
    var[inputs,setInputs]=useState({sname:'',age:'',pos:'',sal:''})
    const inputHandler=(e)=>{
        const{name,value}= e.target
            setInputs((inputs)=>({...inputs,[name]:value}))
            console.log(inputs)
    }
  return (
    <div style={{paddingTop:'50px'}}>
        <TextField
         name='sname'
         value={inputs.sname}
         label='Name'
         variant='outlined'
         onChange={inputHandler}/><br/><br/>
         <TextField
         name='age'
         value={inputs.age}
         label='Age'
         variant='outlined'/><br/><br/>
         <TextField
         name='position'
         value={inputs.position}
         label='Position'
         variant='outlined'/><br/><br/>
         <TextField
         name='salary'
         value={inputs.salary}
         label='Salary'
         variant='outlined'/><br/><br/>
<Button variant="outlined">submit</Button>
      
    </div>
  )
}

export default Addemp

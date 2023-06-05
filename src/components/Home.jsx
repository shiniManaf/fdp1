import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Table} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response)
            setUsers(response.data)
        })
        .catch(err=>console.log (err))
    },[])
    
  return (
    <div style={{paddingTop:'100px'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        name
                    </TableCell>
                    <TableCell>
                        username
                    </TableCell>
                    <TableCell>
                        email
                    </TableCell>
                    <TableCell>
                        phone
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.username}</TableCell>
                        <TableCell>{value.email}</TableCell>
                        <TableCell>{value.phone}</TableCell>
                        </TableRow>
                        
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home

import React, { useState,useEffect, useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import profile from './profile.png'
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams,useNavigate } from 'react-router-dom';
import { deletedata } from './context/Contextprovider';

const Detail = () => {
const homepage=useNavigate();
  const [getuserdata, setUserdata] = useState([]);
  const {setdeldata}=useContext(deletedata)
  console.log(getuserdata);
const {id}=useParams("")
console.log(id);

  const getdata = async () => {

      const res = await fetch(`/getuser/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setUserdata(data)
          console.log("get data");

      }
  }
  useEffect(()=>{
    getdata();
  },[])
  const deleteuser = async (id) => {

    const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        alert("error");
    } else {
       setdeldata(deletedata)
        
        homepage('/');
    }

}
  return (
    <div className="container">
<h1 style={{fontweight:400}}>  Welcome {getuserdata.name}</h1>
<Card sx={{ maxWidth: 600 }}>
      <CardContent> 
      <div className='add-btn'>
        <NavLink to={`/edit/${getuserdata._id}`}>   <button className='btn btn-primary mx-2'><EditIcon/></button></NavLink>
        <button className='btn btn-danger '  onClick={() => deleteuser(getuserdata._id)}><DeleteForeverIcon/></button>
      </div>
      <div className='row'>
      <div className='left_view col-lg-6 col-md-6 col-12' >
         <img src={profile} style={{width:50}} alt="this is img"/>
      <h3 className='mt-3 ' > Name:<span >{getuserdata.name}</span></h3>
   
      <h3 className='mt-3'> age:<span >{getuserdata.age}</span></h3>
      <p><EmailIcon/> E-mail:<span> {getuserdata.email}</span></p>
      <p> <WorkIcon/>occupation:<span>{getuserdata.work}</span></p>
      </div>
      <div className='right_view  col-lg-6 col-md-6 col-12'>
     
<p className='mt-5'> <ContactPhoneIcon/>Mobile:<span>{getuserdata.mobile}</span></p>
<p className='mt-3'> <LocationOnIcon/>ADDRESS:<span>{getuserdata.add}</span></p>
<p className='mt-3'>Description:<span> {getuserdata.desc}</span></p>
      </div>
      </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Detail

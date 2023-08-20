import React ,{ useState,useContext}from 'react'
import { useNavigate } from 'react-router-dom'
import { adddata } from './context/Contextprovider';
const Register =() =>{
  const { userdata, setudata } = useContext(adddata);
  const homepage=useNavigate();
const [inpval,setINP]=useState({
  name:'',
  email:'',
  age:'',
 mobile:'',
work:'',
 add:'',
 desc:''
})

  const setdata=(e)=>{
const {name,value}=e.target;
setINP((preval)=>{
  return{
  ...preval,
  [name]:value
  }
})

  }
 const addinpdata =async(e)=>{
  e.preventDefault();
  const {name,email,age,mobile,work,add,desc} = inpval;
  const res = await fetch("/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name, email, work, add, mobile, desc, age
    })
});
  const data=await res.json();
  console.log(data)
  if (res.status === 422 || !data) {
    
    alert("error");
  }else{
    setudata(data)
    homepage('/');
  }
 } 
  return (
    <div className='container'>
<form className='mt-4'>
<div className='row'>
  <div className="mb-3 col-lg-6 col-md-6 col-12 ">
    <label for="exampleInputEmail1" className="form-label"> Name</label>
    <input type="text"  onChange= {setdata} value={inpval.name} name='name' className="form-control" />
     </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="Email" onChange= {setdata}  value={inpval.email} name='email' className="form-control"/>
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="Number"  onChange= {setdata} value={inpval.age} name='age' className="form-control" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">mobile</label>
    <input type="Number" onChange= {setdata}  value={inpval.mobile} name='mobile' className="form-control" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">work</label>
    <input type="text" onChange= {setdata}  value={inpval.work} name='work' className="form-control" />
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" onChange= {setdata}  value={inpval.add} name='add' className="form-control" />
  </div>
  <div className="mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" className="form-label">Description</label>
<textarea   name='desc' onChange= {setdata}  value={inpval.desc} className="form-control"></textarea>
  </div>
 
 <button type="submit" className="btn btn-primary" onClick={addinpdata}>Submit</button>
 </div>
</form>
     
    </div>
   
  )
}

export default Register



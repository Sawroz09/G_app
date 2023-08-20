import React, { useEffect,useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { adddata } from "./context/Contextprovider";
import { updatedata } from "./context/Contextprovider";
import { deletedata } from "./context/Contextprovider";
function Home() {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);


  const { userdata,  } = useContext(adddata);
  const {updata,}=useContext(updatedata);
  const {deldata,setdeldata}=useContext(deletedata);
  const getdata = async () => {

      const res = await fetch("/getdata", {
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

  useEffect(() => {
      getdata();
  }, [])
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
        console.log("error");
    } else {
        setdeldata(deletedata)
        
        getdata();
    }

}

  return (
    <>
    {
      userdata ?
      <>
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{userdata.name}</strong> USER ADDED SUCESSFULLY
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
      </>:""
    }
    {
      updata ?
      <>
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{updata.name}</strong> USER updated SUCESSFULLY
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
      </>:""
    }
   
    {
      deldata ?
      <>
         <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>{deldata.name}</strong> USER DELETED SUCESSFULLY
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
      </>:""
    }
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
        <NavLink to='/register'> <button className="btn btn-primary" > Add Data</button></NavLink> 
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Occupation</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead> 
          <tbody>
          {
            getuserdata.map((element,id)=>{
              return(
                <>

              
         
            <tr>
              <th scope="row">{id+1}</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td> {element.work}</td>
              <td>{element.mobile}</td>
              <td className=" d-flex justify-content-between">
   <NavLink to={`view/${element._id}`}>  <button className="btn btn-sucess"><VisibilityIcon/></button></NavLink>
   <NavLink to={`edit/${element._id}`}>   <button className="btn btn-primary"><EditIcon/></button></NavLink>
                <button className="btn btn-danger"  onClick={() => deleteuser(element._id)}> <DeleteForeverIcon/></button>
                
              </td>
            </tr> 
             </>
              )
            })
          }
            
           
          </tbody>
        </table>
      </div>
    </div>
</>  );
}

export default Home;

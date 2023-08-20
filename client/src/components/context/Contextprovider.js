import React, { createContext, useState } from 'react'
export const adddata=createContext("")
export const updatedata=createContext("")
export const deletedata=createContext("")
function ContextProvider({children}) {
    const  [userdata,setudata]=useState();
    const  [updata,setupdata]=useState();
    const  [deldata,setdeldata]=useState();
  return (
    <adddata.Provider value={{userdata,setudata}}>
    <updatedata.Provider value={{updata,setupdata}}>
    <deletedata.Provider value={{deldata,setdeldata}} >
      {children}
      </deletedata.Provider>
      </updatedata.Provider>
    </adddata.Provider>
  )
}

export default ContextProvider

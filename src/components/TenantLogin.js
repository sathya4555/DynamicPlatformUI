import React from 'react'
import { useState, useEffect } from 'react';
export const TenantLogin = () => {

    const [data, setData] = useState(null)
    useEffect(() => {
      console.log('inside hooks');
      get()
    }, [])

    // useEffect(() => {
    //   console.log(data);
   
    // }, [data])

    async function get() {
      try {
      console.log('inside get method');

        //   const reqUrl = `http://localhost:4001/${getURL}/`
        const reqUrl = `http://localhost:4001/tenants`
          const response1 = await fetch(reqUrl)
          const resJSON = await response1.json()
          console.log("Output data",resJSON);
          setData(resJSON)
        setTimeout(()=>{
          setData(resJSON)
        },2000)
     
          alert(data)
        
      } catch(error) {
    console.log('inside get apps catch',error);
    // setflag(1)
      }}
    return (
        <div>
          <p>sathya</p>
            {(data != null ? data.map((row) =>{
            <button type="button"  className="btn btn-danger">{row.Id} </button>
                
            }): <button type="button"  className="btn btn-danger">ghdgf</button>)}

{/* <button type="button"  className="btn btn-danger">fds </button> */}

        </div>
    )
}

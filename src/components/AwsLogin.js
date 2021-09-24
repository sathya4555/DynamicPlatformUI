import React, { useState, useContext, useEffect } from "react";


const AwsLogin = (props) => {
   let  menu ="sa"
    useEffect(() => {
        window.location.href = "https://platformdomain.auth.ca-central-1.amazoncognito.com/login?client_id=6ao3t42tqdtgrp56ojvauitm25&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3000/apps";
    }, [])

    function redirect(){
      window.location.href = "https://platformdomain.auth.ca-central-1.amazoncognito.com/login?client_id=6ao3t42tqdtgrp56ojvauitm25&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3000/apps";

    }



    // useEffect(() => {
    //   async function GETaPPS() {
    //   try {
    //     //   const reqUrl = `http://localhost:4001/${getURL}/`
    //     const reqUrl = `http://localhost:4001/tenants/`
    //       const response1 = await fetch(reqUrl)
    //       const resJSON = await response1.json()
    //       console.log(resJSON);
    //       setAPPS(resJSON)
        
    //   } catch(error) {
    // console.log('inside get apps catch',error);
    // // setflag(1)
    //   }}
    //   GETaPPS()
    // }, [])
    const [APPS, setAPPS] = useState([""])
    const [Tenant, setTenant] = useState([""])
    async function GETaPPS(e) {
        e.preventDefault();
        try {
          //   const reqUrl = `http://localhost:4001/${getURL}/`
          const reqUrl = `https://platformdomain.auth.ca-central-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=6ao3t42tqdtgrp56ojvauitm25&redirect_uri=http://localhost:3000/apps&state=STATE&scope=aws.cognito.signin.user.admin+openid+profile`
            const response1 = await fetch(reqUrl)
            // const resJSON = await response1.json()
            console.log(response1);
            // setAPPS(resJSON)
          
        } catch(error) {
      console.log('inside get apps catch',error);
    //   setflag(1)
        }}

        async function getTenant(e) {
            e.preventDefault();
            try {
                const reqUrl = `http://localhost:4001/tenants/`
            //   const reqUrl = `https://platformdomain.auth.ca-central-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=6ao3t42tqdtgrp56ojvauitm25&redirect_uri=http://localhost:3000/apps&state=STATE&scope=aws.cognito.signin.user.admin+openid+profile`
                const response1 = await fetch(reqUrl)
                 const resJSON = await response1.json()
                console.log("tenant",resJSON);
                setTenant(resJSON)
               menu=(
                  <p>
                        {APPS && APPS.map((row)=>{
                    <button type="button"  className="btn btn-danger">{row.CreationDate} </button>
               })}
                  </p>
               
              )
            } catch(error) {
          console.log('inside get apps catch',error);
        //   setflag(1)
            }}


       
    return (
        <div>
Login         

            <td><button type="button" onClick={(e) => GETaPPS(e)}  className="btn btn-danger">AUTH </button></td>

            <td><button type="button" onClick={(e) => getTenant(e)}  className="btn btn-danger">Tenants </button></td>

            <td>{menu}ss</td>

            {Tenant && Tenant.map((row)=>{
                    <button type="button"  className="btn btn-danger">{row.CreationDate} </button>
               })}
            <td><button type="button" onClick={(e) => redirect(e)}  className="btn btn-danger">Login </button></td>
            

        </div>
    )
}

export default AwsLogin

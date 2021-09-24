import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Nav } from './Nav';
import app_json from './Json/app_json.json'
import rolejsonimport from './Json/roles_json.json'
import FormData from './Formdata';
import { TenantLogin } from "./TenantLogin";
import AwsLogin from "./AwsLogin";

const Status = () => {
  const [status, setStatus] = useState(true);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  const [setjSON, setsetjSON] = useState('')
  const [rolejson, setrolejson] = useState('')
  const [flag, setflag] = useState(0)
const setappjson = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[0])
    console.log(setjSON);
    setflag(1)
}

const setrolejsonfunction = (e)=>{
  e.preventDefault();
  setsetjSON(rolejsonimport[0])
    console.log(rolejsonimport[0]);
    setflag(1)

}
const [data, setdata] = useState('')
// useEffect(() => {
//   async function get() {
//   try {
//     //   const reqUrl = `http://localhost:4001/${getURL}/`
//     const reqUrl = `http://localhost:4001/tenants`
//       const response1 = await fetch(reqUrl)
//       const resJSON = await response1.json()
//       console.log(resJSON);
//       setdata(resJSON)
    
//   } catch(error) {
// console.log('inside get apps catch',error);
// // setflag(1)
//   }}
//   get()
// }, [])

async function get(e) {
  try {
    //   const reqUrl = `http://localhost:4001/${getURL}/`
    const reqUrl = `http://localhost:4001/tenants`
      const response1 = await fetch(reqUrl)
      const resJSON = await response1.json()
      console.log(resJSON);
      setdata(resJSON)
      setflag(1)
    
  } catch(error) {
console.log('inside get apps catch',error);
// setflag(1)
  }}



  return (
    <div style={{ fontSize: "24px" }}>
      {status ? 
      <BrowserRouter>
      {/* <button onClick={logout}>Logout</button> */}
      <main className="form-signin">
      {/* <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">setappjson</button>
      <button type="button" onClick={(e) => setrolejsonfunction(e)}  className="btn btn-danger">setrolejson</button>
      <button type='button' onClick={(e) => get(e)}  >Get tenant</button> */}
  
      {/* <Route exact path="/awslogin" component={() =>  <AwsLogin  data={data}/>}/> */}

      {(flag === 1  ?  <Route exact path="/awslogin" component={() =>  <AwsLogin  data={data}/>}/>: "")}
        {/* <Link to="/admin/upload">About</Link> */}
        {/* <PrimarySearchAppBar /> */}
  
  {(flag === 1  ?  <Route exact path="/app" component={() => <FormData  setjSON={setjSON}/>} />: "")}
        {/* <Route exact path="/app" component={() => <FormData  setjSON={setjSON}/>} /> */}
        {/* <Route exact path="/login" component={() => <Login  setName={setName} />} /> */}
    
      </main>
      {/* <Dashboard/> */}
    </BrowserRouter>
      : "Please login"}
    </div>
  );
};
export default Status;
import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import {Redirect} from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);
const [status, setstatus] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        return  <Redirect  to="/app" />
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
    var SocketId = sessionStorage.getItem('socket_id')
    let request_guid = uuidv4();
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });}
    const response = fetch(`http://localhost:4001/auth/login`, {
      // const response = fetch('https://localhost:4000/APPS1_SERVICE/LOGIN',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
          "name": email,
          "password": password,
              "SocketId": SocketId,
                "RequestGuid": request_guid
          // "RequestGuid": request_guid
      })

  }).then(response => response.json())
  .then(json => sessionStorage.setItem("token", json.accessToken.jwtToken));

  // .then(json => sessionStorage.setItem("token", json.accessToken.jwtToken)),
      

// set
  };

  return (
    <div>
       <form onSubmit={onSubmit}>
        {/* <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit">Login</button>
      </form>   */}


    
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}
          onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  value={password}
          onChange={(event) => setPassword(event.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Login;
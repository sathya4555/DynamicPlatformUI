import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import  io  from 'socket.io-client';
import FormData from './components/Formdata';
import { Nav } from './components/Nav';
// import formJSON from '../components/Json/formElement.json';
import app_json from './components/Json/app_json.json'
import rolejsonimport from './components/Json/roles_json.json'
import Dashboard from './components/dashboard';

let socket = io.connect('https://localhost:4000');


 function App() {
  useEffect(() => {
    console.log('inside cons of websockets');
    let socket = io.connect('https://localhost:4000');
    //FIRST ACTION hapens wheN the page opens firSt time , this is one time activity 
    socket.on('connection', function (socket) {
      console.log('socket has been connected');
      console.log(socket)
    });
  
    //Thi seven Is caLled whEn  the server sends the data back to the client
    socket.on('successResponseFromServer', function (data) {
      //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
      console.log(data);
      // alert(`requested completed and socket id is ${data.Status.statusMessage.message}`)
      if(`${data.Status.statusMessage.message}` === 'undefined')
           alert(`requested completed and socket id is ${data.SocketId}`)
      else
          alert(`${data.Status.statusMessage.message}`)
      //for find you can use 'Filter' 
      //remove the item from the dictionary /array
    });
  
      //this is the event which is called when the server register the socket id and sends back the socket id
      socket.on('socketIdFromServer', function (data) {
        console.log(data)
        sessionStorage.setItem('socket_id', data.socket_id);
      });
  }, [])
  const [setjSON, setsetjSON] = useState('')
  const [rolejson, setrolejson] = useState('')
const setappjson = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[0])
    console.log(setjSON);
}

const setrolejsonfunction = (e)=>{
  e.preventDefault();
  setsetjSON(rolejsonimport[0])
    console.log(rolejsonimport[0]);
}

  return (
<div>
<BrowserRouter>
    <Nav />
    <main className="form-signin">
    <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">setappjson</button>
    <button type="button" onClick={(e) => setrolejsonfunction(e)}  className="btn btn-danger">setrolejson</button>


      {/* <Link to="/admin/upload">About</Link> */}
      {/* <PrimarySearchAppBar /> */}


      <Route exact path="/app" component={() => <FormData  setjSON={setjSON}/>} />
      {/* <Route exact path="/login" component={() => <Login  setName={setName} />} /> */}
  
    </main>
    {/* <Dashboard/> */}
  </BrowserRouter>
{/* <FormData/> */}

</div>
   
  );
  }


export default App;

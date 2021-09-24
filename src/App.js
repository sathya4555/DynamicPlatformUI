import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import  io  from 'socket.io-client';
import FormData from './components/Formdata';
import { Nav } from './components/Nav';
// import formJSON from '../components/Json/formElement.json';
import menu_json from './components/Json/menu_json.json'
import app_json from './components/Json/app_json.json'
import rolejsonimport from './components/Json/roles_json.json'
import Dashboard from './components/dashboard';
import Signup from './components/Signup';
import Login from './components/login';
import { Account } from './components/Account';
import Status from './components/Status';
// import TenantList from './components/TenantList';
import { TenantLogin } from './components/TenantLogin';
import AwsLogin from './components/AwsLogin';
import SideNav from './components/SideNav';
import usePosts from './components/usePosts';
import { slide as Menu } from 'react-burger-menu';
import Header from './components/Header';
import Routes from './auth/Routes';
import { Provider } from "react-redux";
// import { store } from "store";


let socket = io.connect('https://localhost:4000');


 function App() {
  const {setjSON1,getPosts,getApps,getRoles } = usePosts();
  console.log("inside app setJSON",setjSON1);
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
  const [flag, setflag] = useState(0)
const setappjson = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[0])
    console.log(setjSON);
    setflag(1)
}

const setrolejsonfunction = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[1])
    console.log(app_json[1]);
    setflag(1)
}

function getTableData(e){
// e.preventDefault()
console.log(e.target.id)
var ii= e.target.id
setsetjSON(app_json[ii])
// console.log("key===",i);
// alert(e.target.innerText);  
    console.log("insde get tabel data 1111111111111",app_json[ii]);
      setflag(1)
}

let button1=''
function getMenu(row){

  console.log("times","ssssss");
  // for (var i = 0; i < arr.length; i++){
  //   document.write("<br><br>array index: " + i);
  
    var obj = row;
    for (var key in obj){
      if(key==="name"){
      var value = obj[key];
      // console.log("key",key);
      // document.write("<br> - " + key + ": " + value);
      }
      button1=(<button style={{width:"13rem",textAlign:'center'}} type="button" id={i} onClick={getTableData}  className="btn btn-danger">{value}</button>)
      // onClick={(e) => (key == "id" && getTableData(e,key))} 
     
    }
    i=i+1
  // }
  // console.log("inside menu",value);
  return button1
}
let i=0;

function showOffline(e){  
  console.log(e.target.id)
//  this.props.offline()    
}
  return (
<div>
<BrowserRouter>
{/* <SideNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}

  {/* <Nav/> */}
  <Header/>
  {/* <Provider store={store}> */}
  {/* <Provider > */}

  {/* <Routes /> */}
  {/* </Provider> */}

    <Account>
      <Status/>
    <Route exact path="/signup" component={() =>  <Signup/>}/>
    <Route exact path="/login" component={() =>  <Login/>}/>
   
    <Route exact path="/awslogin" component={() =>  <AwsLogin />}/>

    </Account>
    <Menu>
    {menu_json.map((row)=>
      getMenu(row,i)
// {/* <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">ff</button> */}

      )}
{/* <a className="menu-item" href="/"> */}
{/* <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">setappjson</button> */}
{/* </a> */}
{/* <a className="menu-item" href="/admin/upload"> */}
{/* <button type="button" onClick={(e) => setrolejsonfunction(e)}  className="btn btn-danger">setrolejson</button> */}

{/* </a> */}
{/* <a className="menu-item" href="/admin/view">
  View Uploads
</a>
<a className="menu-item" href="/admin/editor">
  Editor
</a>
<a className="menu-item" href="/admin/quiz">
  Quiz
</a>
<a className="menu-item" href="/admin/viewdraft">
  View Draft
</a> */}



</Menu>
{(flag === 1  ?  <Route exact path="/app" component={() => <FormData  setjSON={setjSON}/>} />: "")}
 

  </BrowserRouter>
{/* <FormData/> */}
</div>
   
  );
  }


export default App;

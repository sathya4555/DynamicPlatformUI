import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import FormData from './Formdata';
import { slide as Menu } from 'react-burger-menu';
import './SideNav.css'
import menu_json from './Json/menu_json.json'
import app_json from './Json/app_json.json'
import rolejsonimport from './Json/roles_json.json'
import usePosts from './usePosts';

export default props => {
const {setjSON1,getPosts,getApps,getRoles } = usePosts();

const [data, setdata] = useState('')
// const { posts, getPosts } = usePosts();
  const [setjSON, setsetjSON] = useState('')
  const [rolejson, setrolejson] = useState('')
  const [flag, setflag] = useState(0)
const setappjson = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[0])
    console.log(setjSON);
    setflag(1)
    getPosts()
    getApps()
    console.log("LOG",setjSON1);
}

const setrolejsonfunction = (e)=>{
  e.preventDefault();
  setsetjSON(app_json[1])
    console.log(rolejsonimport[0]);
    getRoles()

    setflag(1)

}

function getMenu(){

}
// const [formadata, setformadata] = useState('a')
// export function getFormdata(){
// setformadata(setjSON1)
// return {
//   formadata
// }
// }
  return (
      <BrowserRouter>

    <Menu>

      {/* <a className="menu-item" href="/"> */}
      {/* {menu_json.map((row)=>{
      <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">row</button>
      })} */}
      <button type="button" onClick={(e) => setappjson(e)}  className="btn btn-danger">setappjson</button>
      {/* </a> */}
      {/* <a className="menu-item" href="/admin/upload"> */}
      <button type="button" onClick={(e) => setrolejsonfunction(e)}  className="btn btn-danger">setrolejson</button>

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
  {/* {(flag === 1  ?  <Route exact path="/app" component={() => <FormData  setjSON={setjSON}/>} />: "")} */}



    </Menu>
    </BrowserRouter>
  );
};
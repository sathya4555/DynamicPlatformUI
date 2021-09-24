import { useState } from 'react';
import app_json from './Json/app_json.json'
import rolejsonimport from './Json/roles_json.json'
// import axios from 'axios';
// import { convertToRaw } from 'draft-js';
export default function usePosts() {
  
const [setjSON1, setsetjSON] = useState('s')

const [flag, setflag] = useState(0)
const [Apps, setApps] = useState('')
const [Roles, setRoles] = useState('')
const getPosts = async () => {
    console.log("inside log of posts usej=hooks");
   return "sathya usepost"
  }

  const getApps = async () => {
    setsetjSON(app_json[0])
      console.log(setjSON1);
      return setjSON1
  }

  
  const getRoles = async () => {
    setsetjSON(rolejsonimport[0])
      console.log(setjSON1);
      return setjSON1
  }
return {
    setjSON1,
   getPosts,
   getApps,
   getRoles
  }
}
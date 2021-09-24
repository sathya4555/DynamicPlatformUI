import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
import { useState, useEffect } from 'react';

const Select = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)
    const [APPS, setAPPS] = useState([""])


useEffect(() => {
    async function GETaPPS() {
        try {
          const reqUrl = `http://localhost:4001/${field_id}/`
      
          //   const reqUrl = `http://localhost:4001/${props.setjSON.geturl}?page=1/`
          // const reqUrl = `http://localhost:4001/apps/`
            const response1 = await fetch(reqUrl)
            const resJSON = await response1.json()
            console.log(resJSON);
            setAPPS(resJSON)
      
     

        } catch(error) {
      console.log('inside get apps catch',error);

        }}
        GETaPPS()
  
}, [])



    async function GETaPPS() {
        try {
          const reqUrl = `http://localhost:4001/${field_id}/`
      
          //   const reqUrl = `http://localhost:4001/${props.setjSON.geturl}?page=1/`
          // const reqUrl = `http://localhost:4001/apps/`
            const response1 = await fetch(reqUrl)
            const resJSON = await response1.json()
            console.log("inside sleect",resJSON);
            setAPPS(resJSON)
      
     

        } catch(error) {
      console.log('inside get apps catch',error);

        }}
var menu=''
function filltddata(option){
            // var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
     
//   for (var i = 0; i < arr.length; i++){
  var obj = option;
  for (var key in obj){
    var value = obj[key];
    // document.write("<br> - " + key + ": " + value);
    menu=( <option value={value} key={key}>{value}</option>)
field_value=value
  }
// }
    return menu
            
        }

    return (
        <>
            <label className="form-label">{field_label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={event => handleChange(field_id, event)}
                onChange={event => GETaPPS(event)}
            >
                <option >Open this select menu</option>
                {APPS.length > 0 && APPS.map((option, i) =>
                    // <option value={option.app_name} key={i}>{option.app_name}</option>
                    filltddata(option)

                )}
            </select>
        </>
    )
}

export default Select

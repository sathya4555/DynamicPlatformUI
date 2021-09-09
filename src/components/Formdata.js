
import formJSON from '../components/Json/formElement.json';
import app_json from '../components/Json/app_json.json'
import { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import io from 'socket.io-client';
import Table from 'react-bootstrap/Table'
// import dashboardcss from './'

function FormData(props) {
    const [Id, setId] = useState(null);
    const [RowVersion, setRowVersion] = useState(null);
    const [CreationDate, setCreationDate] = useState(null);
    const [ModifiedDate, setModifiedDate] = useState(null);
    const [CreatedBy, setCreatedBy] = useState(null);
    const [ModifiedBy, setModifiedBy] = useState(null);
    const [app_name, setapp_name] = useState(null);
    const [app_description, setapp_description] = useState(null)
    const [elements, setElements] = useState(null);
    const [rolename, setrolename] = useState(null)
    const [role_privilage, setrole_privilage] = useState(null)
    // const [data, setdata] = useState(null)
    const [methodName, setmethodName] = useState(null)
    //   const [service, setservice] = useState(null)
    //   const [queue, setqueue] = useState(null)
    useEffect(() => {
        //  setElements(props.setjSON)
         console.log(props.setjSON);
        // console.log("useeffect1", page_label);
        // console.log("service", service);
        // console.log("queue", queue);
        // console.log("method",method);
    }, [])

    const [APPS, setAPPS] = useState([""])
const [tablerowdata,settablerowdata] = useState([""])
useEffect(() => {
    // setElements(props.setjSON)
    // console.log("useeffect1", page_label);
    // console.log("service", service);
    // console.log("queue", queue);
    // console.log("method",method.add);
    // console.log("geturl",geturl);
     props.setjSON.tabledata.map((row)=>{
          console.log(row.rowname) 
         //settablerowdata(row.rowname)
        // console.log(tablerowdata);
     });
  async function GETaPPS() {
  try {
    //   const reqUrl = `http://localhost:4001/${props.setjSON.geturl}/`
    const reqUrl = `http://localhost:4001/apps/`
      const response1 = await fetch(reqUrl)
      const resJSON = await response1.json()
      console.log(resJSON);
      setAPPS(resJSON)
    
  } catch(error) {
console.log('inside get apps catch',error);
  }}
  GETaPPS()
}, [])

    const getdata = () =>{
        // setElements(app_json[0])
        setElements(props.setjSON)
        console.log("useeffect1", page_label);
        console.log("service", service);
        console.log("queue", queue);
        console.log("method",method.add);
    }

    const { fields, page_label, service, queue,method ,geturl} = elements ?? {}
    var SocketId = sessionStorage.getItem('socket_id')
    let request_guid = uuidv4();
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });}
 let data=null;
 let url=null
    const handleSubmit = (e) => {
        e.preventDefault();
        elements.fields.map((row) => {
        })

        if(methodName == 'POST'){
            url=`https://localhost:4000/${service}/${queue}`
            data=[
                {
                    "RowVersion": RowVersion,
                    "CreationDate": CreationDate,
                    "ModifiedDate": ModifiedDate,
                    "CreatedBy": CreatedBy,
                    "ModifiedBy": ModifiedBy,
                    "role_id": null,
                    "app_name": app_name,
                    "app_description": app_description,
                    "role_name": rolename,
                    "role_priviledge": role_privilage
                },
            ]
        }

        if(methodName == 'PUT'){
            url=`https://localhost:4000/${service}/${queue}/1`
            data=[
                {
                   "RowVersion": RowVersion,
                    // "CreationDate": CreationDate,
                    "ModifiedDate": ModifiedDate,
                    "Id": Id,
                    "CreatedBy": CreatedBy,
                    "ModifiedBy": ModifiedBy,
                    "app_name": app_name,
                    "app_description": app_description,
                    // "role_name": rolename,
                    // "role_priviledge": role_privilage
                }
            ]

        }

        if(methodName == 'DELETE'){
            url=`https://localhost:4000/${service}/${queue}/`
            data=[
                {
                    "Id": Id,
                }
            ]

        }
        console.log("data",data);
        console.log("url",url)
        console.log("methodname",methodName);
        // https://localhost:4000/APPS1_SERVICE/APPS1
        const response = fetch(url, {
            // const response = fetch('https://localhost:4000/APPS1_SERVICE/APPS1',{
            method: methodName,
            headers: { 'Content-Type': 'application/json' },
            //credentials: 'include',
            body: JSON.stringify({
                "DataCollection": data,
                "SocketId": SocketId,
                "RequestGuid": request_guid
            })

        }).then(response => response.json())
            .then(json => console.log(json));


    }
    const editdata = async (e,id) => {
        setElements(props.setjSON)
        console.log("useeffect1", page_label);
        console.log("service", service);
        console.log("queue", queue);
        console.log("method",method.add);
        console.log("geturl",geturl);
        setId(id)
        console.log("id",id);
        setmethodName('PUT')
        setModifiedDate(new Date().toLocaleString())
        e.preventDefault();
        //     // const adminname = props.name
        //     let SocketId = sessionStorage.getItem('socket_id')
        //     const response = await fetch(`https://localhost:4000/${service}/${queue}/1`, {
        //       method: method.update,
        //       headers: { 'Content-Type': 'application/json' },
        //       //credentials: 'include',
        //       body: JSON.stringify({
        //       "DataCollection": [
        //         {
        //            "RowVersion": RowVersion,
        //             "CreationDate": CreationDate,
        //             "ModifiedDate": ModifiedDate,
        //             "Id": 10,
        //             "CreatedBy": CreatedBy,
        //             "ModifiedBy": ModifiedBy,
        //             "app_name": app_name,
        //             "app_description": app_description,
        //             "role_name": rolename,
        //             "role_priviledge": role_privilage
        //         }
        //     ],
        //       "SocketId": SocketId,
        //       "RequestGuid": request_guid
        
        //       })
        //     });
          }

          const deletedata = async (e,id) => {
            setElements(props.setjSON)
            console.log("useeffect1", page_label);
            console.log("service", service);
            console.log("queue", queue);
            console.log("method",method.delete);
            console.log("geturl",geturl);
            setId(id)
            console.log("id",id);
            setmethodName('DELETE')
            setModifiedDate(new Date().toLocaleString())
            e.preventDefault();
          }

          const  adddata =() =>{

//





            setmethodName('POST')
            setElements(props.setjSON)
            console.log("useeffect1", page_label);
            console.log("service", service);
            console.log("queue", queue);
            console.log("method",method.add);
          }
    const handleChange = (id, event) => {
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { field_type, field_id } = field;
            if (id === field_id) {
                switch (field_type) {
                    case 'checkbox':
                        field['field_value'] = event.target.checked;
                        break;

                    default:
                        field['field_value'] = event.target.value;
                        break;
                }

                elements.fields.map((row) => {
                    // console.log(row.field_value);
                    if (row.field_id == "created_by") {
                        setCreatedBy(row.field_value)
                        //   console.log("inside if",CreatedBy);
                    }
                    if (row.field_id == "modified_by") {
                        setModifiedBy(row.field_value)
                        //  console.log("inside if",ModifiedBy);
                    }
                    if (row.field_id == "row_version") {
                        setRowVersion(row.field_value)
                        //   console.log("inside if",RowVersion);
                    }
                    if (row.field_id == "app_name") {
                        setapp_name(row.field_value)
                        //  console.log("inside if",app_name);
                    }
                    if (row.field_id == "app_description") {
                        setapp_description(row.field_value)
                        // console.log("inside if",app_description);
                    }
                    if (row.field_id == "role_name") {
                        setrolename(row.field_value)
                        // console.log("inside if",app_description);
                    }
                    if (row.field_id == "role_priviledge") {
                        setrole_privilage(row.field_value)
                         console.log("inside if",role_privilage);
                    }

                    setCreationDate(new Date().toLocaleString())
                    setModifiedDate(new Date().toLocaleString())
                })
            }
            setElements(newElements)
        });
        console.log(elements)
    }
    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className="App container">
                <h3>{page_label}</h3>
                <form>
                    {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
                {/* <button type="button" onClick={()=>getdata()}  className="btn btn-danger">getData</button> */}
                <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button>
                
            </div>
            <Table striped bordered hover >
               <tr>
                   <th>Id</th>
               { props.setjSON &&  props.setjSON.tabledata.map((field) => 
               <th> {field.rowname}</th>
               ) }
               </tr>
               <tbody>
                   
            {APPS && APPS.map((row =>
            
              <tr>
                {/* { props.setjSON &&  props.setjSON.tabledata.map((field) => 
               <td> {row+"."+field.rowname}</td>
               ) 
               } */}
  
                <td>{row.Id}</td>
                <td>{row.CreationDate}</td>
                <td>{row.ModifiedDate}</td>
                <td>{row.ModifiedBy}</td>
                <td>{row.CreatedBy}</td>
                <td>{row.RowVersion}</td>
                <td>{row.app_name}</td>
                <td>{row.app_description}</td>
              <td><button type="button" onClick={(e) => editdata(e,row.Id)}  className="btn btn-danger">Edit </button></td>
              <td><button type="button" onClick={(e) => deletedata(e,row.Id)}  className="btn btn-danger">Delete </button></td>
              </tr>
            ))}
           { props.setjSON.fields.map((row)=>{
                <td>{row.field_id}</td>
        //  console.log(row.field_id) 
     })}
          </tbody>

               </Table>
        </FormContext.Provider>
    );
}

export default FormData;

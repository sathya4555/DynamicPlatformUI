
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
    const [getURL, setgetURL] = useState(null)
    const [flag, setflag] = useState(0)
    const [hh, sethh] = useState('')
    var token = localStorage.getItem("token");
    // const [data1, setdata1] = useState([""])
    let i =2
    //   const [service, setservice] = useState(null)
    //   const [queue, setqueue] = useState(null)
    const [arr, setarr] = useState([""])
    // let DataCollection =[]
    // const [DataCollection, setDataCollection] = useState(null)
    useEffect(() => {
        //  setElements(props.setjSON)
         console.log(props.setjSON);
        //  props.setjSON.tabledata.map((row) =>{
        //      arr.push(row.rowname)
                

        //  })
        setgetURL(props.setjSON.geturl)
        console.log("geturlin useeffect",getURL);
        // console.log("useeffect1", page_label);
        // console.log("service", service);
        // console.log("queue", queue);
        // console.log("method",method);
        console.log("arr test ",arr[1]);
    }, [])

    const [APPS, setAPPS] = useState([""])
const [tablerowdata,settablerowdata] = useState([""])
useEffect(() => {
    // setElements(props.setjSON)
    // console.log("useeffect1", page_label);
    // console.log("service", service);
    // console.log("queue", queue);
    // console.log("method",method.add);
    // console.log("DataCollection11111",DataCollection11);
    //  props.setjSON.DataCollection11.map((row)=>{
    //        console.log("drfet",row.CreationDate) 
    //      //settablerowdata(row.rowname)
    //     // console.log(tablerowdata);
    //  });
  async function GETaPPS() {
  try {
    //   const reqUrl = `http://localhost:4001/${getURL}/`
    const reqUrl = `http://localhost:4001/apps/`
      const response1 = await fetch(reqUrl)
      const resJSON = await response1.json()
      console.log(resJSON);
      setAPPS(resJSON)
    
  } catch(error) {
console.log('inside get apps catch',error);
setflag(1)
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

    const { fields, page_label, service, queue,method ,geturl,DataCollection} = elements ?? {}
    var SocketId = sessionStorage.getItem('socket_id')
    let request_guid = uuidv4();
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });}
 let data=null;
 let data1=null
 let url=null
 const handleChange = (id, event) => {
    event.preventDefault();
    const newElements = { ...elements }
    //  console.log("id== ",id)
    newElements.fields.forEach(field => {
        const { field_type, field_id } = field;
        setId(id)
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
                if (row.field_id == "Id") {
                    // setId(row.field_value)
                    //   console.log("inside if",app_name);
                    // DataCollection[0].Id=id
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                     const obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                }
                if (row.field_id == "CreatedBy") {
                    DataCollection[0].Id=idnew
                    let ss=row.field_id
                    DataCollection[0].CreatedBy=row.field_value
                       console.log("inside if data collection",DataCollection[row.field_id]);
                    //    console.log("value is",DataCollection[0]);
                        const obj = JSON.stringify(DataCollection)
                       console.log("value is",obj);
                        sethh(JSON.parse(obj)) 
                       console.log("value is hh",hh);
                   
                }
                if (row.field_id == "ModifiedBy") {
                    setModifiedBy(row.field_value)
                    //   console.log("inside if",ModifiedBy);
                      DataCollection[0].ModifiedBy=row.field_value
                       console.log("inside if data collection",DataCollection[row.field_id]);
                    //    console.log("value is",DataCollection[0]);
                        const obj = JSON.stringify(DataCollection)
                       console.log("value is",obj);
                       sethh(JSON.parse(obj)) 
                       console.log("value is hh",hh);
                }
                if (row.field_id == "RowVersion") {
                    setRowVersion(row.field_value)
                    //    console.log("inside if",RowVersion);
                    DataCollection[0].RowVersion=row.field_value
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                     const obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                }
                if (row.field_id == "app_name") {
                    setapp_name(row.field_value)
                    //   console.log("inside if",app_name);
                    DataCollection[0].app_name=row.field_value
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                     const obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                }
                if (row.field_id == "app_description") {
                    setapp_description(row.field_value)
                    //  console.log("inside if",app_description);
                    DataCollection[0].app_description=row.field_value
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                     const obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                }
                if (row.field_id == "role_name") {
                    setrolename(row.field_value)
                     console.log("inside if",app_description);
                }
                if (row.field_id == "role_priviledge") {
                    setrole_privilage(row.field_value)
                     console.log("inside if",role_privilage);
                }
                // if (row.field_id == "CreationDate") {
                    DataCollection[0].CreationDate=new Date().toLocaleString()
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                     let obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                // }

                // if (row.field_id == "ModifiedDate") {
                    DataCollection[0].ModifiedDate=new Date().toLocaleString()
                    console.log("inside if data collection",DataCollection[row.field_id]);
                 //    console.log("value is",DataCollection[0]);
                      obj = JSON.stringify(DataCollection)
                    console.log("value is",obj);
                         sethh(JSON.parse(obj)) 
                    console.log("value is hh",hh);
                // }
                setCreationDate(new Date().toLocaleString())
                setModifiedDate(new Date().toLocaleString())
            })
        }
        setElements(newElements)
    });
    console.log(elements)
}

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
            console.log("arr inside put",arr)
            if(page_label === "App" ){
                data1= {
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
            }
            if(page_label === "Role" ){
                console.log("inside put role and pagellabel is",page_label);
                data1= {
                    "RowVersion": RowVersion,
                     // "CreationDate": CreationDate,
                     "ModifiedDate": ModifiedDate,
                     "Id": Id,
                     "CreatedBy": CreatedBy,
                     "ModifiedBy": ModifiedBy,
                    //  "app_name": app_name,
                    //  "app_description": app_description,
                     "role_name": rolename,
                     "role_priviledge": role_privilage
                 }
            }
            
            data=[
                data1
            ]
            console.log("Data data1",data);

        }

        if(methodName == 'DELETE'){
            url=`https://localhost:4000/${service}/${queue}/1`
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
            headers: { 'Content-Type': 'application/json','Token': token },
            // credentials: 'include',
            body: JSON.stringify({
                "DataCollection": hh,
                "SocketId": SocketId,
                "RequestGuid": request_guid
            })

        }).then(response => response.json())
            .then(json => console.log(json));


    }
    const [idnew, setidnew] = useState("")
    const editdata = async (e,id) => {
        setElements(props.setjSON)
        console.log("useeffect1", page_label);
        console.log("service", service);
        console.log("queue", queue);
        // console.log("method",method.add);
        console.log("geturl",geturl);
        setId(id)
        setidnew(id)
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
            // console.log("method",method.delete);
            console.log("geturl",geturl);
            setId(id)
            console.log("id",id);
            setmethodName('DELETE')
            setModifiedDate(new Date().toLocaleString())
            e.preventDefault();
          }
const [addflag, setaddflag] = useState(0)
          const  adddata =() =>{

setCreationDate(new Date().toLocaleString())

setaddflag(1)
            setmethodName('POST')
            setElements(props.setjSON)
            console.log("useeffect1", page_label);
            console.log("service", service);
            console.log("queue", queue);
            console.log("method",method.add);
          }
  
    const fieldChanged = (fieldId, value) => {
        // setValues(currentValues => {
        //     currentValues[fieldId] = value;
        //     return currentValues;
        // });
        console.log("inside fireld changes",value);
    }
    let h1=JSON.stringify(DataCollection)
    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className="App container">
                <h3>{page_label}</h3>
                {(addflag === 1 ?     <form>
                    <button></button>
                    {fields ? fields.map((field, i) => <Element key={i} field={field} onChange={e => fieldChanged(field.field_id, e.target.value)}/>) : null}
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>: "")}
            
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
               {(flag === 0 ?  APPS.map((row) =>
            
            <tr>
                  {/* <td>{row.arr[i]}</td> */}
                {/* <td>
                   {row.i} 
                    </td> */}
 
              {/* { props.setjSON &&  props.setjSON.tabledata.map((field) => 
             <td> {roDataCollection[0].Id}</td>
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
          ): "")}   
           
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

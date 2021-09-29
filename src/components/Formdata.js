
import formJSON from '../components/Json/formElement.json';
import app_json from '../components/Json/app_json.json'
import { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import io from 'socket.io-client';
import Table from 'react-bootstrap/Table'
// import dashboardcss from './'
import './Formdata.css'
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
    const reqUrl = `http://localhost:4001/${props.setjSON.geturl}/`

    //   const reqUrl = `http://localhost:4001/${props.setjSON.geturl}?page=1/`
    // const reqUrl = `http://localhost:4001/apps/`
      const response1 = await fetch(reqUrl)
      const resJSON = await response1.json()
      console.log(resJSON);
      setAPPS(resJSON)
    // console.log("geturl props",props.setjSON.geturl);
   console.log("first DATACLOOECTION",props.setjSON.DataCollection); 
//    for (var i = 0; i < props.setjSON.DataCollection.length; i++){
//     // document.write("<br><br>array index: " + i);
//     var obj = props.setjSON.DataCollection[i];
//     for (var key in obj){
//       var value = obj[key];
//     //   document.write("<br> - " + key + ": " + value);
//         console.log("inside first data collection key",key,"  value= ",value);
//     }
//   }
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
   if(fields){
    for (var k = 0; k < fields.length; k++){
        var obj = fields[k];
        for (var key in obj){
            obj.field_options && obj.field_options.map((row)=>{
                    //   console.log("select options deep inside", row.option_label="sathya");
                        APPS.length > 0 && APPS.map((option, i) =>
                    // <option value={option.app_name} key={i}>{option.app_name}</option>
                    //   console.log("select options deep inside", row.option_label="sathya");
                   console.log( "option dynamic change",row.option_label=option.app_name)
                    
                    )
               

                })

        //     if(obj[key] === "select"){
        //         // if(key === "field_options"){
        //     for (var o = 0; o < fields.length; k++){
        //             var obj1 = fields.field_options[o];
        //             for (var key1 in obj1){
        //                 console.log("select options deep inside", key1, obj1);
        //             }
        //         // }
        //         var value = obj[key];
        //         console.log("inside useeffect loop stack overflow", value);
        //     }
        // //   document.write("<br> - " + key + ": " + value);
        // } 
        }
      }
   }
 



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

const [pageNumber, setpageNumber] = useState(1)
 async function paginateAdd() {
    try {
        setpageNumber(pageNumber+1)
        console.log("pagenenbumer",pageNumber);
        if(pageNumber >=1){
            // const reqUrl = `http://localhost:4001/${props.setjSON.geturl}/`

            const reqUrl = `http://localhost:4001/${props.setjSON.geturl}?page=${pageNumber}`
            // const reqUrl = `http://localhost:4001/apps/`
            console.log(reqUrl);
              const response1 = await fetch(reqUrl)
              const resJSON = await response1.json()
              console.log(resJSON)
              setAPPS(resJSON)
      
        }
    } catch(error) {
  console.log('inside get apps catch',error);
  setflag(1)
    }}


    async function paginateSub() {
        try {
            setpageNumber(pageNumber-1)
        console.log("pagenenbumer",pageNumber);
        if(pageNumber >=1){

            const reqUrl = `http://localhost:4001/${props.setjSON.geturl}?page=${pageNumber}`
            // const reqUrl = `http://localhost:4001/apps/`
            console.log(reqUrl);
              const response1 = await fetch(reqUrl)
              const resJSON = await response1.json()
              console.log(resJSON)
              setAPPS(resJSON)
      
        }

        } catch(error) {
      console.log('inside get apps catch',error);
      setflag(1)
        }}
 const handleChange = (id, event) => {
    event.preventDefault();
    const newElements = { ...elements }
    console.log("new elements = ",newElements.fields[0]);
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
                             // if (row.field_id == "CreatedBy") {
              
                    for (var i = 0; i < DataCollection.length; i++){
                      
                        // document.write("<br><br>array index: " + i);
                        var obj1 = DataCollection[i];
                        for (var key in obj1){
                        if (row.field_id == key) {
                        var value = row.field_value;
                        //   document.write("<br> - " + key + ": " + value);
                        DataCollection[0][key]=row.field_value
                            console.log("inside first data collection key",key,"  value= ",value);
                            const obj = JSON.stringify(DataCollection)
                                   console.log("value is",obj);
                                    sethh(JSON.parse(obj)) 
                                   console.log("value is hh",hh);
                               
                        }
                    }
                }
              
              
              
              

              
              
              
              
              
              
              
              
              
                // if (row.field_id == "Id") {
                //     // setId(row.field_value)
                //     //   console.log("inside if",app_name);
                //     // DataCollection[0].Id=id
                //     console.log("inside if data collection",DataCollection[row.field_id]);
                //  //    console.log("value is",DataCollection[0]);
                //      const obj = JSON.stringify(DataCollection)
                //     console.log("value is",obj);
                //          sethh(JSON.parse(obj)) 
                //     console.log("value is hh",hh);
                // }
                // if (row.field_id == "CreatedBy") {
                //     DataCollection[0].Id=idnew
                //     let ss=row.field_id
                //     DataCollection[0].CreatedBy=row.field_value
                //        console.log("inside if data collection",DataCollection[row.field_id]);
                //     //    console.log("value is",DataCollection[0]);
                //         const obj = JSON.stringify(DataCollection)
                //        console.log("value is",obj);
                //         sethh(JSON.parse(obj)) 
                //        console.log("value is hh",hh);
                   
                // }
                // if (row.field_id == "ModifiedBy") {
                //     setModifiedBy(row.field_value)
                //     //   console.log("inside if",ModifiedBy);
                //       DataCollection[0].ModifiedBy=row.field_value
                //        console.log("inside if data collection",DataCollection[row.field_id]);
                //     //    console.log("value is",DataCollection[0]);
                //         const obj = JSON.stringify(DataCollection)
                //        console.log("value is",obj);
                //        sethh(JSON.parse(obj)) 
                //        console.log("value is hh",hh);
                // }
                // if (row.field_id == "RowVersion") {
                //     setRowVersion(row.field_value)
                //     //    console.log("inside if",RowVersion);
                //     DataCollection[0].RowVersion=row.field_value
                //     console.log("inside if data collection",DataCollection[row.field_id]);
                //  //    console.log("value is",DataCollection[0]);
                //      const obj = JSON.stringify(DataCollection)
                //     console.log("value is",obj);
                //          sethh(JSON.parse(obj)) 
                //     console.log("value is hh",hh);
                // }
                // if (row.field_id == "app_name") {
                //     setapp_name(row.field_value)
                //     //   console.log("inside if",app_name);
                //     DataCollection[0].app_name=row.field_value
                //     console.log("inside if data collection",DataCollection[row.field_id]);
                //  //    console.log("value is",DataCollection[0]);
                //      const obj = JSON.stringify(DataCollection)
                //     console.log("value is",obj);
                //          sethh(JSON.parse(obj)) 
                //     console.log("value is hh",hh);
                // }
                // if (row.field_id == "app_description") {
                //     setapp_description(row.field_value)
                //     //  console.log("inside if",app_description);
                //     DataCollection[0].app_description=row.field_value
                //     console.log("inside if data collection",DataCollection[row.field_id]);
                //  //    console.log("value is",DataCollection[0]);
                //      const obj = JSON.stringify(DataCollection)
                //     console.log("value is",obj);
                //          sethh(JSON.parse(obj)) 
                //     console.log("value is hh",hh);
                // }
                // if (row.field_id == "role_name") {
                //     setrolename(row.field_value)
                //      console.log("inside if",app_description);
                // }
                // if (row.field_id == "role_priviledge") {
                //     setrole_privilage(row.field_value)
                //      console.log("inside if",role_privilage);
                // }
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
         window.scrollTo(0, 0)
setaddflag(1)
// DataCollection[0].Id=id
// DataCollection[0]['Id']=id
// // console.log("inside first data collection key",key,"  value= ",value);
// const obj = JSON.stringify(DataCollection)
//        console.log("value is",obj);
//         sethh(JSON.parse(obj)) 
//        console.log("value is hh",hh);
    // const { fields, page_label, service, queue,method ,geturl,DataCollection} = elements ?? {}

// DataCollection[0].Id="15"
// console.log("datacolleaction in edit isd ",DataCollection[0].Id)
if (DataCollection){
    DataCollection[0].Id=id
console.log("datacolleaction in edit isd ",DataCollection[0].Id)
const obj = JSON.stringify(DataCollection)
       console.log("value is",obj);
        sethh(JSON.parse(obj)) 
       console.log("value is hh",hh);
}


        setElements(props.setjSON)
        console.log("useeffect1", page_label);
        console.log("service", service);
        console.log("queue", queue);
        // console.log("method",method.add);
        console.log("geturl",geturl);
        setId(id)
        setidnew(id)
    //   console.log("id",DataCollection[0].Id);
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
            window.scrollTo(0, 0)
setCreationDate(new Date().toLocaleString())
setaddflag(1)
            setmethodName('POST')
            setElements(props.setjSON)
            console.log("useeffect1", page_label);
            console.log("service", service);
            console.log("queue", queue);
            // console.log("method",method.add);
          }
          let menu=""
    const fieldChanged = (fieldId, value) => {
        // setValues(currentValues => {
        //     currentValues[fieldId] = value;
        //     return currentValues;
        // });
        console.log("inside fireld changes",value);
    }
    let h1=JSON.stringify(DataCollection)
    function filltddata(row,field){
        // var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
 
for (var i = 0; i < APPS.length; i++){
//   document.write("<br><br>array index: " + i);
//   var obj = APPS[i];
   var obj = row;
// console.log("length",props.setjSON.tabledata.length);
//   console.log("obj",obj);

// console.log("fireld[]o",field);
  for (var key in obj){
    for (var key1 in field){
        // console.log("field_name",field[key1])
        //  console.log("obj1_name",key)

         if(key==field[key1]){
            var value = obj[key];
            //  document.write("<br> - " + key + ": " + value);
            // console.log("key =",key,"  value  = ",value)
            menu=(<td>{value}</td>)
        }
   
  }}

}
return menu
        
    }


 
    function filltddata1(row,field){
        // var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
 
for (var i = 0; i < APPS.length; i++){
//   document.write("<br><br>array index: " + i);
//   var obj = APPS[i];
   var obj = row;
// console.log("length",props.setjSON.tabledata.length);
//   console.log("obj",obj);

// console.log("fireld[]o",field);
  for (var key in obj){
    for (var key1 in field){
        // console.log("field_name",field[key1])
        //  console.log("obj1_name",key)

         if(key==field[key1]){
            var value = obj[key];
            //  document.write("<br> - " + key + ": " + value);
            // console.log("key =",key,"  value  = ",value)
            menu=(<td>{value}</td>)
        }
   
  }}

}
return menu
        
    }
    function close(){
        setaddflag(0)
    }

const [searchOpenflag, setsearchOpenflag] = useState(0)
const [searchresult, setsearchresult] = useState([""])
const searchADD = searchresult
const [searchInput, setsearchInput] = useState('')
const Search = async (e) => {
    e.preventDefault()
    props.setjSON &&  props.setjSON.tabledata.map(async(row)=>{
        console.log("rowname",row.rowname);
        const response = await fetch(`http://localhost:4001/${props.setjSON.geturl}/search`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'requestmodel': `{"Filter":{"Conditions":[{"FieldName":"${row.rowname}","FieldValue":"${searchInput}"}]},"Children": ["ddd"]}`},
            //credentials: 'include',
            // body: JSON.stringify({
            //   id,
            //   SocketId
      
      
            // })
          }).then(response => response.json())
        //   .then(json => console.log(json.DataCollection))
          .then(json => setsearchresult(json.DataCollection));
        //   console.log("input",searchInput);
           console.log("searchresult",searchresult);
           
           setsearchOpenflag(1)
    })
      
    }

    function SearchClear(e){
    e.preventDefault()
    // setsearchInput("")
        setsearchOpenflag(0)
    }
    return (
        <div>
        

<div id="cover">
  <form method="get" action="">
    <div class="tb">
      <div class="td"><input type="text" placeholder="Search" onChange={event => setsearchInput(event.target.value)} required/></div>
      <div class="td" id="s-cover">
        <button type="submit" onClick={(e) => Search(e)}>
          <div id="s-circle"></div>
          <span>Search</span>
        </button>
        <button type="submit" onClick={(e) => SearchClear(e)}>
          <div id="s-circle"></div>
          <span>Clear</span>
        </button>
      </div>
    </div>
  </form>
</div>

      
        <FormContext.Provider value={{ handleChange }}>
            <div style={{border: '1rem',margin: 'auto'}} className="App container">
                <h3>{page_label}  </h3>
              
                {(addflag === 1 ?     <form>
                    <button onClick={close}><i class="fa fa-close"></i></button>
                    {fields ? fields.map((field, i) => <Element key={i} field={field} onChange={e => fieldChanged(field.field_id, e.target.value)}/>) : null}
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>: "")}
            
                {/* <button type="button" onClick={()=>getdata()}  className="btn btn-danger">getData</button> */}
                {/* <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button> */}
                
            </div>

            {(searchOpenflag === 1 ?        <Table striped bordered hover style={{backgroundColor:"paleblue",width:"80rem",margin: 'auto'}}>
               <tr>
                   <th style={{backgroundColor:'grey'}} >Id</th>
               { props.setjSON &&  props.setjSON.tabledata.map((field) => 
               <th style={{backgroundColor:'grey'}}> {field.rowname}</th>
               ) }
                {/* <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button> */}
                {/* <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button> */}
               <th><button style={{backgroundColor:'grey',width:'5rem'}} type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">{"  "}<i style={{width:'1rem'}} class='fas fa-plus'></i></button> </th>
               </tr>
               <tbody>
               {(flag === 0 ? searchresult && searchresult.map((row) =>
            
            <tr>

                <td>{row.Id}</td>
              { props.setjSON &&  props.setjSON.tabledata.map((field) => 
              
                           filltddata1(row,field)
             ) 
             }
               
            <td><button type="button" style={{textAlign:'center'}} onClick={(e) => editdata(e,row.Id)}  className="btn btn-primary"><i class='fas fa-edit'></i> </button></td>
            <td><button type="button" onClick={(e) => deletedata(e,row.Id)}  className="btn btn-danger"><i class='fas fa-trash-alt'></i> </button></td>
            </tr>
          ): "")}   
           
           { props.setjSON.fields.map((row)=>{
                <td>{row.field_id}</td>
        //  console.log(row.field_id) 
     })}
          </tbody>

               </Table> :    <Table striped bordered hover style={{backgroundColor:"paleblue",width:"80rem",margin: 'auto'}}>
               <tr>
                   <th style={{backgroundColor:'grey'}} >Id</th>
               { props.setjSON &&  props.setjSON.tabledata.map((field) => 
               <th style={{backgroundColor:'grey'}}> {field.rowname}</th>
               ) }
                {/* <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button> */}
                {/* <button type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">Add Data</button> */}
               <th><button style={{backgroundColor:'grey',width:'5rem'}} type="button" onClick={(e) => adddata(e)}  className="btn btn-danger">{"  "}<i style={{width:'1rem'}} class='fas fa-plus'></i></button> </th>
               </tr>
               <tbody>
               {(flag === 0 ?  APPS.map((row) =>
            
            <tr>

                <td>{row.Id}</td>
              { props.setjSON &&  props.setjSON.tabledata.map((field) => 
              
                           filltddata(row,field)
             ) 
             }
               
            <td><button type="button" style={{textAlign:'center'}} onClick={(e) => editdata(e,row.Id)}  className="btn btn-primary"><i class='fas fa-edit'></i> </button></td>
            <td><button type="button" onClick={(e) => deletedata(e,row.Id)}  className="btn btn-danger"><i class='fas fa-trash-alt'></i> </button></td>
            </tr>
          ): "")}   
           
           { props.setjSON.fields.map((row)=>{
                <td>{row.field_id}</td>
        //  console.log(row.field_id) 
     })}
          </tbody>

               </Table>)}
         
               <div style={{textAlign: ' center'}}>
               <td><button type="button" style={{textAlign:'center'}} onClick={(e) => paginateSub()}  className="btn btn-primary"><i class="fa fa-minus"></i> </button></td>
               <td> {pageNumber && pageNumber}</td>

               <td><button type="button" style={{textAlign:'center'}} onClick={(e) => paginateAdd()}  className="btn btn-primary"><i class="fa fa-plus"></i> </button></td>

               </div>


        </FormContext.Provider>
        </div>
    );
}

export default FormData;

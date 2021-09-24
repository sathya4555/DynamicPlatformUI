import React from 'react'
import { useState, useEffect } from 'react';
export const TenantLogin = (props) => {

   console.log("ddd",props.data)
    return (
        <div>
            {(props.data != null ? props.data.foreach((row) =>{
            <button type="button"  className="btn btn-danger">{row.tanant_name} </button>
                
            }):"")}

           { props.data.map((row) =>{
            <button type="button"  className="btn btn-danger">{row.tanant_name} </button>
                
            })}
        </div>
    )
}

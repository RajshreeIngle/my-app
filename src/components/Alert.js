import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let str = word.toLowerCase();
        console.log(str.charAt(0))
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return (
        props.alert && <div>
             <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg} 
            </div>
        </div>
    )
}

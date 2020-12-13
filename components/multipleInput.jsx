import React from 'react'

export const MultipleInput = (props)=>{
  return(
    <>
    <input type={props.type} value={props.value} name={props.name}/>
    </>
  )
}

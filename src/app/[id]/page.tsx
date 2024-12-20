import React from 'react'

const page = (props : any ) => {
   console.log(props) 
  return (
    <h1 className='text-5xl '>{props.params.id}</h1>
    
  )
}

export default page
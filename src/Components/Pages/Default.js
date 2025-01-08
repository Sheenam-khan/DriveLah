import React, { Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

const Default=(props)=>{
    console.log("porps",props)
  return (
   <Fragment>
       <div
      style={{
        minHeight: 'calc(100vh - 500px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          backgroundColor: '#fff',
          padding: '80px 30px',
          margin: '100px auto',
          borderRadius: '10px',
          flex: '1',
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <h1 className='page-title'>DriveLah 
          <span className="mb-3 text-transform-capitalize" style={{textTransform:"capitalize",fontSize:'30px',marginLeft:"10px" ,color:"Highlight"}}>{props.location.pathname.substring(1)}</span>
          </h1>
        </div>
      </div>
    </div>
        
   </Fragment>
  )
}

export default Default
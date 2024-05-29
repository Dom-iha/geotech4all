import React from 'react'

function Service({params}: any) {
  const serviceName = params.service;

  return (
    <div className='grid min-h-screen place-items-center'>{serviceName}</div>
  )
}

export default Service
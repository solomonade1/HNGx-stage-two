"use client";
import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
      }, [error]);
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <h1>Something went wrong</h1>
    <button style={{ color: 'amber', ':hover': { color: 'amber' } }} onClick={() => reset()}>
      Try Again
    </button>
  </div>
  )
}

export default Error
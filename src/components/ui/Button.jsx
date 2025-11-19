import React from 'react'

export default function Button({ children, onClick, className = '', type = 'button' }){
  return (
    <button type={type} onClick={onClick} className={`inline-block px-5 py-2 rounded-md border ${className}`}>
      {children}
    </button>
  )
}

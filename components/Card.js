import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={`flex flex-col sm:grid sm:grid-cols-2 text-center my-8 ${reverse && 'order-2'}`}>
        {children}
    </div>
  )
}

export default Card
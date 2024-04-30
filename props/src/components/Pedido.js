import React from 'react'

const Pedido = ({ date, iconName, iconStyle, description,title }) => {
    

  return (
    <div className="card">
    <div className="card-header text-muted">
      {date}
    </div>
    <div className="card-body d-flex">
        <div className="d-flex align-items-center">
        <i className={`${iconName} ${iconStyle}`}></i>
        </div>
        <div className="border ms-2 flex-grow-1">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
    </div>
  </div>
  )
}

export default Pedido;
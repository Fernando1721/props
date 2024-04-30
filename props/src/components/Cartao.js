import React from 'react'

const Cartao = ({ children, cabecalho }) => {



  return (
    <div className="card">
    <div className="card-header text-muted">
        {cabecalho}
        
        </div>
        <div className="card-body d-flex">
            {children}
    </div>
  </div>
  )
}
<Cartao>
    <p>oi</p>
</Cartao>

export default Cartao
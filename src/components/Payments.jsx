import React, { useEffect, useState } from 'react'
const initailpayments = {
    zaad: false,
    evc: false,
    sahal: false,
}
const Payments = () => {
       const [paymentsMethos , setPaymentsMethos]  = useState(initailpayments)
       const [up, setup]=  useState(false);
       useEffect(()=> {}, [up])
  return (
    <div>
        <h2>Payments process </h2>
        <div className={`payments-cards ${paymentsMethos.zaad && "select" }`} onClick={()=> setPaymentsMethos({...initailpayments , zaad: true})}> 
            <div className="pay">
                <h3>Zaad Service</h3>
            </div>
        </div>
        <div className={`payments-cards ${paymentsMethos.evc && "select"}`} onClick={()=> setPaymentsMethos({...initailpayments, evc: true})}>
            <div className="pay">
                <h3>EVC Service</h3>
            </div>
        </div>

        <div className={`payments-cards ${paymentsMethos.sahal && "select" }`} onClick={()=> setPaymentsMethos({...initailpayments , sahal: true})}>
            <div className="pay">
                <h3>SAHAL Service</h3>
            </div>
        </div>
          <input type="text"  className='form-control' placeholder='25261993...' />
          <button type="button" className='process'>process</button>
    </div>
  )
}

export default Payments
import React from 'react'
const paymentsData = [{
  title:'Premium Payment',
  subTitle:'premium amount due',
  date:'08/21/2021',
  type:'past due',
  amount:'$125'
},{
  title:'Premium Payment',
  subTitle:'premium amount due',
  type:'due',
  date:'08/21/2021',
  amount:'$125'
},{
  title:'Premium Payment',
  subTitle:'premium amount due',
  type:'scheduled',
  date:'08/21/2021',
  amount:'$125'
}];
const Payment = ({
  title,
  subTitle,
  amount,
  date,
  type
}) => {
 return (
   <div className="Payment">
     <div className="Title">{title}</div>
      <div className="PaymentInfo">
        <div className="SubTitle">{subTitle}</div>
        <div className="Amount">{amount}</div>
        <div className="Date">Due on {date}</div>
      </div>
     <div className="Type">{type}</div>
   </div>
 );
}
export const Payments = () => {
  return (
    <div className="Payments">
      {paymentsData.map(payment => <Payment key={payment.type} {...payment}/>)}
    </div>
  )
}

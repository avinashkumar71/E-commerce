import React, { useContext } from 'react'
import './Mycart.css'
import { UserContext } from '../../App'

function Mycart() {
  console.log('mycart component')
  const {state,data,QuantityCounter} = useContext(UserContext)

  // function QuantityCounter(){
  //   const quantity = {}
  //   for(let item of state){
  //     if(item.id in quantity){
  //       quantity[item.id] = quantity[item.id] + 1
  //     }else{
  //       quantity[item.id] = 1
  //     }
  //   }
  //   return quantity
  // }
  const updated_state = [...new Set(state)]

  function grandTotal(){
    let s = 0
    updated_state.forEach((item)=>{
      s = s + item.price*QuantityCounter(state)[item.id]
    })
    return s
  }
  return (
    <div className='mycart_container'>
        <div className='mycart_wrapper'>
            <h2>MyCart</h2>
            <table>
              <tr>
                <th>S.no</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Total Price</th>
              </tr>
              {updated_state.map((item,index)=>{
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.product_name}</td>
                    <td>{item.price} ₹</td>
                    <td>{item.id in QuantityCounter(state)?QuantityCounter(state)[item.id]:0}</td>
                    <td>{item.id in QuantityCounter(state)?QuantityCounter(state)[item.id]*item.price:0} ₹</td>
                  </tr>
                )
              })}
             
            </table>
            <div className='final_price'>
                <p>Grand Total <span>{grandTotal()} ₹</span></p>
                <button>Place order</button>
            </div>
        </div>
    </div>
  )
}

export default Mycart
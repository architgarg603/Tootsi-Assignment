import React from 'react'
import style from './CartItem.module.css'
function CartItem({ data, idx, onChangeQuantity,onDeleteItem }) {

  return (
    <div className={style.wrapper}>
      <div className={style.product}>
        <div onClick={()=>onDeleteItem(idx, data[0])}>X</div>
        <img src = {data[2]} />
        <div>{data[1]}</div>
      </div>
      <div className={style.price}>${data[3]}</div>
      <div className={style.qty}>
        <div>
          <div onClick={()=>{
              if(data[8]>1){
                onChangeQuantity(idx,data[8]-1, data[0])
              }
          }}>-</div>
          <div>{data[8]}</div>
          <div onClick={()=>{
              if(data[8]<data[7]){
                console.log(Number(data[8])+1)
                onChangeQuantity(idx,Number(data[8])+1, data[0])
              }
          }}>+</div>

        </div>
      </div>
      <div className={style.subtotal}>${data[3] * data[8]}</div>
    </div>
  )
}

export default CartItem
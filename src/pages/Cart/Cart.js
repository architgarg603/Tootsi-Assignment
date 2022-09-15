import React, { useEffect, useState } from 'react'
import style from './Cart.module.css'
import CartItem from '../../components/Cart/CartItem'
import { useNavigate } from 'react-router-dom';
function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  let cartItems = localStorage.getItem('cart');
  if (cartItems == undefined)
    cartItems = {}
  else
    cartItems = JSON.parse(cartItems)
  useEffect(() => {
    if (Object.keys(cartItems).length == 0) navigate('/')
    let arr = []
    for (let key in cartItems)
      arr.push(cartItems[key])

    setItems(arr);

    return () => {
      localStorage.setItem('cart', JSON.stringify({}))
    }

  }, [])

  let total = 0;
  items.map(item => {
    total += item[3] * item[8]
  })

  const onSubmitHandler = () => {
    localStorage.setItem('cart', JSON.stringify({}));
    navigate('/thankyou')
  }

  const onChangeQuantity = (idx, val, id) => {
    items[idx].pop();
    items[idx].push(val);
    setItems([...items])
    cartItems[id].pop();
    cartItems[id].push(val);
    localStorage.setItem('cart', JSON.stringify(cartItems))

  }
  const onDeleteItem = (idx, id) => {
    items.splice(idx, 1)
    setItems([...items])
    delete cartItems[id]
    localStorage.setItem('cart', JSON.stringify(cartItems))

  }

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.heading}>
          <div className={style.product}>Product</div>
          <div className={style.price}>Price</div>
          <div className={style.qty}>Quantity</div>
          <div className={style.subtotal}>Subtotal</div>
        </div>
        <div className={style.items}>
          {items.map((item, idx) => <CartItem key={item[0]} onDeleteItem={onDeleteItem} idx={idx} data={item} onChangeQuantity={onChangeQuantity} />)}
        </div>
      </div>
      <div className={style.right}>
        <div className={style.calBox}>
          <div className={style.head}>Cart Totals</div>
          <div className={style.subTotal}>
            <div>Subtotal</div>
            <div>${total}</div>
          </div>
          <div className={style.total}>
            <div>Total</div>
            <div>${total}</div>
          </div>
          <div className={style.btn} onClick={onSubmitHandler}> PROCEED TO CHECKOUT</div>

        </div>
      </div>
    </div>

  )
}

export default Cart
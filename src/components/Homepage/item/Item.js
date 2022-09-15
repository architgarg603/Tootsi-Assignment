import React, { useEffect, useState } from 'react'
import style from './Item.module.css'
function Item({ data }) {
    const [qty, setQty] = useState(data[7] == 0 ? 0 : 1)
    const [cart, setCart] = useState({});
    const [checked, setChecked] = useState(false)
    const onchangeHandler = (e) => {
        const value = e.target.value;
        if (value > data[7])
            return;
        if (checked == true) {
            let val = localStorage.getItem('cart');
            if (val == undefined)
                val = {}
            else
                val = JSON.parse(val);
            let cart = val
            delete cart[Number(data[0])];
            console.log(cart, data[0])

            cart[data[0]] = [...data, e.target.value];
            console.log(checked)
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart({ ...cart })
        }
        console.log(checked)
        setQty(e.target.value)
    }

    const checkBoxHandler = (e) => {
        if (qty == 0) return;
        let val = localStorage.getItem('cart');
        if (val == undefined)
            val = {}
        else
            val = JSON.parse(val);

        if (e.target.checked)
            val[data[0]] = [...data, qty];
        else
            delete val[data[0]];

        setCart(val);
        setChecked(!checked)
        localStorage.setItem('cart', JSON.stringify(val));
    }

    useEffect(() => {
        let val = localStorage.getItem('cart');
        if (val == undefined)
            val = {}
        else
            val = JSON.parse(val);
        setCart(val);
        if (val[data[0]] != undefined)
            setChecked(true)


    }, [])
    return (
        <div className={style.wrapper}>
            <div className={style.image}>
                <img src={data[2]} />
            </div>
            <div className={style.name}>{data[1]}</div>
            <div className={style.color}>{data[4]}</div>
            {data[7] > 0 ?
                <div className={[style.stock1, style.in].join(" ")}><i class="fa-solid fa-face-smile"></i> In stock</div>
                :
                <div className={[style.stock2, style.out].join(" ")}><i class="fa-solid fa-face-meh"></i> Out of stock</div>
            }
            <div className={style.price}>${data[3]}</div>
            <div className={style.qty}>{data[7]}</div>
            <div className={style.buy}>
                <input type='number' onInput={onchangeHandler} className={style.Qty} value={qty} min='1' max={data[7]} />
                <div><i class="fa-solid fa-cart-shopping"></i></div>
                <input type='checkbox' checked={checked} onChange={checkBoxHandler} className={style.checkbox} />
            </div>
        </div>
    )
}

export default Item
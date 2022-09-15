import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Header.module.css'
function Header({ setDressType, setSize, setSearch, resetHandler, size, dressType }) {
    const navigate = useNavigate();
    const onCartHandler = () => {
        let val = localStorage.getItem('cart');
        if (val == undefined || val.length < 3) {
            window.alert('Cart is empty.');
            return
        }

        navigate('/cart')

    }
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <select onChange={(e) => setDressType(e.target.value)} value={dressType}>
                    <option value='all'>All</option>
                    <option value='Hoodie'>Hoodie</option>
                    <option value='Shirt'>Shirt</option>
                    <option value='T-shirt'>T-shirt</option>
                    <option value='Jeans'>Jeans</option>
                    <option value='Pants'>Pants</option>
                </select>
                <select onChange={(e) => setSize(e.target.value)} value={size}>
                    <option value='all'>Size</option>
                    <option value='L'>Large</option>
                    <option value='M'>Medium</option>
                    <option value='S'>Small</option>
                </select>
                <div onClick={resetHandler}><i class="fa-sharp fa-solid fa-rotate-left" ></i> Reset </div>
            </div>
            <div className={style.right}>

                <div className={style.search}>Search: <input type='text' onInput={(e) => setSearch(e.target.value)} /> </div>
                <div className={style.btn} onClick={onCartHandler}>Add To Cart</div>
            </div>
        </div>
    )
}

export default Header
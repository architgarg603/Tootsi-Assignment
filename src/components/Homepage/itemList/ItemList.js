import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import style from './ItemList.module.css'
import items from '../../../data/Data'
function ItemList({ dressType, size, search }) {
  const [data, setData] = useState([])
  useEffect(() => {
    let arr = items;
    if (dressType != 'all') {
      let temp = arr.filter(item => item[6] == dressType)
      arr = temp
    }
    if (size != 'all') {
      let temp = arr.filter(item => item[5] == size)
      arr = temp
    }
    
    if(search != ''){
      let temp = arr.filter(item => item[1].includes(search))
      arr = temp

    }

    setData([...arr]);

  }, [dressType, size, search])
  return (
    <div className={style.wrapper}>
      <div className={style.headings} >
        <div className={style.image}>Image</div>
        <div className={style.name}>Name <i class="fa-sharp fa-solid fa-sort-down"></i></div>
        <div className={style.color}>Color</div>
        <div className={style.stock}>Stock</div>
        <div className={style.price}>Price</div>
        <div className={style.qty}>Max Qty</div>
        <div className={style.buy}>Buy</div>
      </div>

      {data.map(item => <Item key={item[0]} data={item} />)}
    </div>
  )
}

export default ItemList
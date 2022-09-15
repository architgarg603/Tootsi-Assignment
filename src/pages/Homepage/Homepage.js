import React, { useState } from 'react'
import Header from '../../components/Homepage/Header/Header'
import ItemList from '../../components/Homepage/itemList/ItemList'
import style from './Homepage.module.css'

function Homepage() {
    const [dressType, setDressType] = useState('all')
    const [size, setSize] = useState('all')
    const [search, setSearch] = useState('')

    const resetHandler = ()=>{
        setDressType('all')
        setSize('all')
    }

    return (
        <div className={style.wrapper}>
            <Header dressType={dressType} size={size} setSize={setSize} resetHandler={resetHandler} setSearch={setSearch} setDressType={setDressType} />
            <ItemList dressType={dressType} size={size} search={search} />
        </div>
    )
}

export default Homepage
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Thankyou.module.css'
function Thankyou() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => {
            clearTimeout(token)
        }
    }, [])
    return (
        <div className={[style.wrapper, 'wrapper'].join(' ')}>
            <div className={style.head}>Thank you</div>
            <div className={style.subHead}>for shopping with us.</div>
            <div className={style.msg}><Link to='/'>Click here</Link>  if you are redirected to the Homepage  </div>
        </div>
    )
}

export default Thankyou
import React from 'react'
import s from './error.module.css'
import {useNavigate} from "react-router-dom";

export const Error = () => {
    const navigator = useNavigate()
    const changePage = () => {
        navigator('/login')
    }
    return (
        <div>
            <div className={s.wrapper}>

                <div className={s.errorPicture}>
                    <button className={s.errorButton}
                            onClick={changePage}>RETURN
                    </button>
                </div>
            </div>
        </div>
    )
}


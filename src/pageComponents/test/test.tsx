import React from "react";
import {SuperInput} from "../../superComponents/superInput/SuperInput";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import {SuperCheckbox} from "../../superComponents/superCheckbox/SuperCheckbox";
import s from './test.module.css'

export const Test = () => {
    return (
        <div className={s.test}>
            <div>I'm page Test</div>
            <SuperInput/>
            <SuperButton/>
            <SuperCheckbox/>
        </div>
    )
}
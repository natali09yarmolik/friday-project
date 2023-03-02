import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './superButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {

    const finalClassName= `${s.button} 
                       ${disabled ? s.disabled : xType==='red' 
                                  ? s.red :xType==='secondary' 
                                  ? s.secondary : s.default }`

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}


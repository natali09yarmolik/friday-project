import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react'
import s from './superInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
}

export const SuperInput: React.FC<SuperInputPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        onChangeText?.(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = s.error
        + (error ? ' ' + s.errorInput : '')
    const finalInputClassName = s.input
        + (error ? ' ' + s.errorInput : ' ' + s.superInput)
        + (onChange ? ' ' + s.superInput : '')

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps}
            />
            <span
                id={id ? id + '-span' : undefined}
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
}


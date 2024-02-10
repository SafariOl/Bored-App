import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../hook'
import { boredReducerFetch } from './BoredReducer'

export const Form:FC = () => {
    const [type, setType] = useState<string>('social');
    const dispatch = useAppDispatch()

    const options = [
        {label: 'Random', value: 0},
        {label: 'Social', value: 1},
        {label: 'Relaxation', value: 2},
        {label: 'Music', value: 3},
        {label: 'Education', value: 4},
        {label: 'DIY', value: 5},
        {label: 'Cooking', value: 6},
        {label: 'Busywork', value: 7},
        {label: 'Charity', value: 8},
    ]

    useEffect(() => {
        dispatch(boredReducerFetch(type.toLowerCase()))
    }, [])

    const handleClick:React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(boredReducerFetch(type.toLowerCase()))
    }

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
    }
    
    const handleSelect:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const selectedItem = e.target.value
        options.forEach(el => {
            if(el.value === parseInt(selectedItem)) setType(el.label)
        })
    }
  
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='select'>
            <select id="select" onChange={handleSelect}>
                {options.map(option => 
                    <option key={option.value} value={option.value}>{option.label}</option>    
                )}
            </select>
        </label>
        <button type='button' onClick={handleClick}>Find</button>
    </form>
  )
}

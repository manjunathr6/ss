import React from 'react';

interface InputProps {
  type: string,
  value: string,
  name: string,
  placeholder: string,
  changeHandler: React.ChangeEventHandler<HTMLInputElement>,
}

const Input:React.FC<InputProps> = (props) => {
  return (
    <fieldset>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.changeHandler(e)}
        />
      </fieldset>
  )
}

export default Input;
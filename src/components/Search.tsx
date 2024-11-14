import React from 'react'

interface IProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ value, onChange }: IProps) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xl bold mb-2">Search</label>
      <input
        className="border-solid border-2 border-black rounded-md p-2"
        type="text"
        value={value}
        onChange={onChange}
        placeholder='Search berries'
      />
    </div>
  )
}

import React from 'react'

interface IProps {
  children: React.ReactNode;
}

export const Chip = ({ children }: IProps) => {
  return (
    <div className="rounded-2xl bg-slate-200 px-2 py-1 m-1">{children}</div>
  )
}

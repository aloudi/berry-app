import React from 'react'
import { IBerry, IFlavor } from '../types'
import { capitalizeFirstLetter } from '../utils'
import { Chip } from './Chip'

interface IProps {
  berry: IBerry
}

export const BerryCard = ({ berry }: IProps) => {
  return (
    <div
      className="flex justify-between border-solid border-2 rounded-md border-black p-4 mb-2 min-w-md"
      key={berry.id}
    >
      <div className='flex items-center'>
        {capitalizeFirstLetter(berry.name)}
        <img
          className='h-6 w-6'
          src="https://logowik.com/content/uploads/images/346_raspberry_pi_logo.jpg"
          alt="berry logo"
        />
      </div>
      <div className="flex">
        {berry.flavors.map((flavor: IFlavor) => (
          flavor.potency > 0
            ? <Chip>{flavor.flavor.name}</Chip>
            : null
        ))}
      </div>
    </div>
  )
}

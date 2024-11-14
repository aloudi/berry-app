import React from 'react'
import { FIRMNESS_ORDER, FIRMNESS_NAMES, FIRMNESS } from '../constants'

interface IProps {
  value: FIRMNESS,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FirmnessSlider = ({ value, onChange}: IProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-xl mb-2">Firmness</label>
      <input
        className="mb-2"
        type="range"
        min={FIRMNESS_ORDER[FIRMNESS.ALL]}
        max={FIRMNESS_ORDER[FIRMNESS.SUPER_HARD]}
        step={1}
        value={FIRMNESS_ORDER[value]}
        onChange={onChange}
      />
      <p className="text-center">{FIRMNESS_NAMES[value]}</p>
    </div>
  )
};

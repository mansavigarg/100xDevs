import React from 'react'

const InputBox = ({label , placeholder , onchange}) => {
  return (
    <div>
        <div className=' text-m font-medium text-left py-2'>
            {label}
        </div>
        <input onChange={onchange} placeholder={placeholder} className=' w-full px-2 py-1 border rounded border-slate-300 shadow-lg '/>
    </div>
  )
}

export default InputBox;
import React from 'react'

function Slider() {
   const [value, setValue] = React.useState(30)
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setValue(parseInt(event.target.value))
    }

  return (
    <div className='flex flex-col items-center justify-center'>
      
    </div>
  )
}

export default Slider
import React from 'react'

interface Props {
    title:string
}
const FooterHeading = ({title}:Props) => {
  return (
    <div className=' border-webBlue border-l-[3px] text-xl text-white pl-4'>
        <h2 className='  first-letter:text-webBlue  capitalize font-[500]'>{title}</h2>
    </div>
  )
}

export default FooterHeading
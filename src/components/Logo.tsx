import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <div className=' outline-none object-cover'>
        <Image alt='Logo' src="/images/logo.png" width={110} height={110}/>
    </div>
    </Link>
  )
}

export default Logo
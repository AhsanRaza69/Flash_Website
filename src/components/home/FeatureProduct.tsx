import React from 'react'
import Container from '../Container'
import SameHeading from './SameHeading'
import HoverEffect from './HoverEffect'

const FeatureProduct = () => {
  return (
    <div className='bg-darkText/5 '>
    <Container className='' >
        <div className=' my-12'>
            <SameHeading title="FEATURE PRODUCTS" para="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users."/>
            <div className='grid gap-2    md:gap-8   md:grid-cols-3 md:grid-cols-4 my-4'>
             <HoverEffect title="Classic collection" image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-8-1.jpg"/>
             <HoverEffect title="Vintage Collection"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-img-1-1.jpg"  />
             <HoverEffect title="Classic Watch"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-5-1.jpg " />
             <HoverEffect title="Mac Product"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-img-6.jpg"/>
             <HoverEffect title="Old Gadget"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-img-7.jpg"/>
             <HoverEffect title="iPhone Showcase"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-img-2.jpg"/>
             <HoverEffect title="Vintage Watch" image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-4-1-1.jpg"/>
             <HoverEffect title="Story Book" image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/flash-port-3-1.jpg"/>
                </div>
            </div>
    </Container>
    </div>
  )
}

export default FeatureProduct
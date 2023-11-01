import React from 'react'
import Container from '../Container'
import SameHeading from './SameHeading'
import NewsCard from './NewsCard'

const LatestNews = () => {
  return (
    <div className=' my-8'>
    <Container className=''>
        <SameHeading title="OUR LATEST NEWS" para="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users. " />
        <div className=" grid grid-cols-1 my-4 gap-x-6   py-4 md:grid-cols-3">
         <NewsCard title="RECEIPE FOR FOOD LOVER"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/blog-1-370x270.jpg"/>
         <NewsCard title="Artistic Drawing Of Girl Has Gone Away"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/blog-2-370x270.jpg"/>
         <NewsCard title="Photography Tips For Photographer"  image="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/blog-3-370x270.jpg"/>
         
        </div>
    </Container>
        
    </div>
  )
}

export default LatestNews
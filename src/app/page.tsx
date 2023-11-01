import Banner from '@/components/Banner'
import Container from '@/components/Container'
import Text from '@/components/Text'
import FeatureProduct from '@/components/home/FeatureProduct'
import HomeCards_1 from '@/components/home/HomeCards_1'
import HomeCounter from '@/components/home/HomeCounter'
import HomeDownSec from '@/components/home/HomeDownSec'
import LatestNews from '@/components/home/LatestNews'
import LearnMore from '@/components/home/LearnMore'
import OtherReviews from '@/components/home/OtherReviews'
import OurTeam from '@/components/home/OurTeam'
import Sponsers from '@/components/home/Sponsers'
import TopHeader from '@/components/topHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
     <Banner/>
     <HomeCards_1/>
     <FeatureProduct/>
     <OurTeam/>
     <HomeDownSec/>
     <OtherReviews/>
     <HomeCounter/>
     <LatestNews/>
     <LearnMore/> 
     <Sponsers/>
    </main>
  )
}

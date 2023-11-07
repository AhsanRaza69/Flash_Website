import Container from "@/components/Container"
import Link from "next/link"
import BlogPost from "@/components/blog/BlogPost"
import SlideBar from "@/components/SlideBar"




const BlogPage = () => {
  return (
    <div>
        <div className=" bg-darkText/5 ">
          <div className=' px-3   lg:px-20 py-2 flex md:mt-10   justify-between items-center '>
          <h2 className="  text-2xl">
            Blog
          </h2>
          < Link href="/" className=" text-sm text-darkText">
           Home
          </Link>
          </div>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-3 md:gap-y-6 items-start     ">
              
              <BlogPost/>

              <SlideBar/>
              
        </Container>
    </div>
  )
}

export default BlogPage

export function generateMetadata(){
  return{
    title:"Blog-Flash",
    description:"blog page description"
  }
}
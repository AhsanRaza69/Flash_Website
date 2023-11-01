import Container from "@/components/Container"
import Link from "next/link"
import BlogPost from "@/components/blog/BlogPost"
import SlideBar from "@/components/SlideBar"




const page = () => {
  return (
    <div>
        <div className=" bg-darkText/5 ">
          <div className=' px-2   lg:px-20 py-2 flex mt-10  justify-between items-center '>
          <h2 className="  text-2xl">
            Blog
          </h2>
          < Link href="/" className=" text-sm text-darkText">
           Home
          </Link>
          </div>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-y-6     ">
              
              <BlogPost/>

              <SlideBar/>
              
        </Container>
    </div>
  )
}

export default page
import React from 'react'
import { ImSearch } from 'react-icons/im'
import BlogLink from './blog/BlogLink'


const SlideBar = () => {
  return (
    <div className=" flex flex-col gap-y-4  px-4  py-8   ">
                {/* search  */}
              <div className=' bg-white flex  w-full   md:pr-14 my-2  py-2 '>
                            <input type="text"
                            className=' placeholder:text-sm border-black   border-b-[1px] w-full py-2 px-2 pb-1 '
                            placeholder='Search...'

                            />
                          <span className=' bg-webBlue  py-2 px-3 text-white flex items-center justify-center shadow-inherit shadow-2xl'>
                          <ImSearch/>
                          </span>
                           </div>

              {/* /Links */}
              <div className="flex flex-col  gap-y-10">
                {/* Link_2 */}
                <BlogLink title="Recent Posts" Links={[
                  {
                  name:"RECEIPE FOR FOOD LOVER",
                  Link:"/"
                },
                  {
                  name:"Artistic Drawing Of Girl Has Gone Away",
                  Link:"/"
                },
                  {
                  name:"Photography Tips For Photographer",
                  Link:"/"
                },
                ]} />
                {/* Link_2 */}
                <BlogLink title="Archives" Links={[
                  {
                  name:"January 2017",
                  Link:"/"
                },
                
                ]} />
                {/* Link_3 */}
                <BlogLink title="Categories" Links={[
                  {
                  name:"Blog",
                  Link:"/"
                },
                  {
                  name:"Food",
                  Link:"/"
                },
              
                ]} />
                {/* Link_4 */}
                <BlogLink title="Meta" Links={[
                  {
                  name:"Log in",
                  Link:"/"
                },
                  {
                  name:"Entries feed",
                  Link:"/"
                },
                  {
                  name:"Comments feed",
                  Link:"/"
                },
                  {
                  name:"WordPress.org",
                  Link:"/"
                },
              
                ]} />
              </div>
              </div>
  )
}

export default SlideBar
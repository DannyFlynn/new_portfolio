import Image from "next/image";
import aboutImage from "../../images/popping_cloud.jpg";
import { SlideUp } from "../transitions/SlideUp";

const AboutMe = () => {
    return (

        <SlideUp >
            <div className='w-full flex p-4'>
                <h2 className="text-2xl sm:text-3xl font-bold  first-letter:text-red-500 relative">About <span className="text-red-500">M</span>e 🧐
                    <div className="absolute  w-full  h-2/3 top-3 lg:top-5 left-2 bg-white bg-opacity-15 rounded-md"></div></h2>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row p-4">
                <p className="">Hello again! When I&apos;m not coding, I love spending time with my son and have recently picked up a new hobby in learning Jiu Jitsu🥷🏻🥋.
                    I&apos;m a self-taught developer with a passion for anything related to software. Whether it&apos;s web development, game design, or app creation, I enjoy exploring and working on new projects. I believe that balancing work with personal interests keeps life exciting and fuels my creativity.</p>
                <Image src={aboutImage} alt="picture of developer" width={250} height={250} className="rounded-full lg:rounded-none p-4 h-full" loading="lazy" />
            </div>
        </SlideUp>

    )
}

export default AboutMe
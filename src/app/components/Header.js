import Image from "next/image";
import avatar from "../images/jhd_avatar.png";


const Header = () => {
    return (
        <header className="min-h-screen flex flex-col  justify-center items-center md:flex-row md:justify-center my-2 sm:my-12 md:my-0 p-3 relative">
            <div className="md:w-2/4 lg:w-1/3 p-4">
                <h1 className="text-3xl font-bold relative w-80 first-letter:text-red-500">Hello! I&apos;m <span className="text-red-500">D</span>anny 👨🏻‍💻
                    <div className="absolute w-11/12 sm:w-full  h-2/3 top-5 left-2 bg-white bg-opacity-15 rounded-md"></div>
                </h1>
                <p className="my-4 ">I&apos;m a self-taught developer with a passion for anything related to software. Whether it&apos;s web development, game design, or app creation, I love exploring and working on new projects. </p>
                <div className="flex justify-center mt-10 lg:mt-8">
                    <a href="tel:07895457593" className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 w-28 sm:w-36 text-center mb-10 mx-6">Call me</a>
                    <a href="mailto:flynny386@gmail.com" className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 w-28 sm:w-36 text-center mb-10 mx-6">Email me</a>
                </div>
            </div>
            <div className="p-4">
                <Image src={avatar} alt="avatar of developer" width={250} height={250} className="rounded-full" />
            </div>
        </header>
    )
}

export default Header
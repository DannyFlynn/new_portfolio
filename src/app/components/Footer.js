import { githubIcon, phoneIcon, mailIcon } from "@/app/fontawesome/Fontawesome";


const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center bg-red-500 bg-opacity-75">
            <div className="w-full p-3 justify-center flex lg:justify-end">
                <a href="#" className="mx-6">{githubIcon}</a>
                <a href="#" className="mx-6">{phoneIcon}</a>
                <a href="#" className="mx-6">{mailIcon}</a>
            </div>
            <div className="w-full p-3">
                <p>
                    Congratulations! You&apos;ve reached the bottom of my portfolio. Thanks for scrolling all the way down! 🚀 Let&apos;s chat and make some magic happen! 💬✨
                </p>
            </div>
        </div>
    )
}

export default Footer
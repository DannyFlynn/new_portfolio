import { githubIcon, phoneIcon, mailIcon } from "@/app/fontawesome/Fontawesome";


const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center bg-red-500 bg-opacity-75">
            <div className="w-full p-3 justify-center flex lg:justify-end">
                <a href="https://github.com/DannyFlynn" className="mx-6">{githubIcon}</a>
                <a href="tel:07895457593" className="mx-6">{phoneIcon}</a>
                <a href="mailto:flynny386@gmail.com" className="mx-6">{mailIcon}</a>
            </div>
            <div className="w-full p-3 text-center">
                <p>
                    Developed and designed with keys and mouse strokes 🧑🏻‍💻 Danny Flynn
                </p>
            </div>
        </div>
    )
}

export default Footer
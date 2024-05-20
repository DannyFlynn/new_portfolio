import { SlideUp } from "../transitions/SlideUp";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "Godot",
    "Flutter",
    "PHP",
    "Git",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap"
];


const Skills = () => {
    return (
        <SlideUp>
            <div class="w-full  flex p-4"><h2 class="text-2xl sm:text-3xl font-bold  first-letter:text-red-500 relative">My <span class="text-red-500">S</span>kills 🤹🏻<div class="absolute  w-full  h-2/3 top-3 lg:top-5 left-2 bg-white bg-opacity-15 rounded-md"></div></h2></div>
            <div>
                <ul className="flex flex-wrap justify-center mt-4 lg:mt-20">{skills.map((skill, id) => (
                    <li class="border-2 m-2  p-3 rounded-lg hover:lg:bg-red-600" key={id}>{skill}</li>
                ))}</ul>
            </div>
        </SlideUp>
    )
}

export default Skills
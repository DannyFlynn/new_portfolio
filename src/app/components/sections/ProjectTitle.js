


const ProjectTitle = ({ genreTitle, count, changeGenre }) => {
    return (
        <div className="w-full lg:w-1/2" id="projects">
            <div className="text-center lg:my-6">
                <h2 className="text-2xl sm:text-3xl font-bold  first-letter:text-red-500">{genreTitle[count]}<span className="text-red-500">D</span>ev <button
                    onClick={() => changeGenre(genreTitle[count])}
                    className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600">Change?</button></h2>
            </div>
        </div>
    )
}

export default ProjectTitle
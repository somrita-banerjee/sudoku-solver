import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        navigate(path)
    }

    return (
    <div className="bg-purple-300 p-20">
        <div className="flex justify-center items-center">
            <button
                className="h-20 m-5 rounded-2xl text-5xl bg-[#B61BA1] w-96 text-white shadow-md hover:shadow-2xl hover:cursor-pointer home-buttons"
                type="submit"
                onClick={() => handleClick('/play')}
                >PLAY</button>
        </div>
        <div className="flex justify-center items-center">
            <button
                className="h-20 m-5 rounded-2xl text-5xl bg-[#B61BA1] w-96 text-white shadow-md hover:shadow-2xl hover:cursor-pointer home-buttons"
                type="submit"
                onClick={() => handleClick('/solve')}
            >SOLVE</button>
        </div>
        
    </div>
)
}

export default Home
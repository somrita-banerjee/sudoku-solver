import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        navigate(path)
    }

    return (
    <div className="App-main">
        <div className="center-container">
            <button className="home-buttons" type="submit" onClick={() => handleClick('/play')}>PLAY</button>
        </div>
        <div className="center-container">
            <button className="home-buttons" type="submit" onClick={() => handleClick('/solve')}>SOLVE</button>
        </div>
        
    </div>
)
}

export default Home
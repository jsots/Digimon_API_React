import { useState, useEffect } from "react";

function Digimon() {
    const [digimon, setDigimon] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch("https://digimon-api.vercel.app/api/digimon")
            .then(res => res.json())
            .then(data => setDigimon(data))
    }, [])

    const handleNextClick = () => {
        if (index === digimon.length - 1) {
            setIndex(0)
        } else {
            setIndex((prev)=> prev + 1)
        }
    }

    const handlePrevClick = () => {
        if (index === 0 ) {
            setIndex(digimon.length-1)
        } else {
            setIndex((prev)=> prev - 1)
        }
    }

    return (
        <div>
            <h1>Welcome to the Digital-World</h1>
            <div className="container">
                <button className="prev" onClick={handlePrevClick}>Prev</button>
                <div className="digi-container">
                    <div className="data-container">
                        <img src={digimon[index]?.img} alt={digimon[index]?.name}/>
                        <p>Name: {digimon[index]?.name}</p>
                        <p>Level: {digimon[index]?.level}</p>
                    </div>
                </div>
                <button className="next" onClick={handleNextClick}>Next</button>
            </div>
        </div>
    )
}

export default Digimon;
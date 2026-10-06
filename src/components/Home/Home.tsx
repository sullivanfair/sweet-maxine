import Hero from "../Hero/Hero";
import { TegakiRenderer } from "tegaki";
import rockSalt from "../../assets/RockSalt/bundle";
import "./Home.css"
import { useState } from "react";

function Home()
{
    const[heroFinished, setHeroFinished] = useState(false);

    return (
        <>
            <Hero 
                text="Sweet Maxine" 
                speed={ 3 }
            />

            <h2>
                <TegakiRenderer
                    font={ rockSalt }
                    time={{ mode: "uncontrolled",  speed: 10, loop: false}}
                    onComplete={ () => setHeroFinished(true) }
                >
                    Covering your favorite classic and alternative rock since 2023
                </TegakiRenderer>
            </h2>

            { 
                heroFinished && 
                    <div className="home-div">
                        <TegakiRenderer
                            font={ rockSalt }
                            time={{ mode: "uncontrolled",  speed: 10, loop: false}}
                        >
                            Sweet Maxine made their debut in August, 2026 after performing under the alias, "The Fair Band"
                        </TegakiRenderer>
                    </div>
            }

        </>  
    )
}

export default Home
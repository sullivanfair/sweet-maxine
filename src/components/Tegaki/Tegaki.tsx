import { TegakiRenderer } from "tegaki/react"
import rockSalt from "../../assets/RockSalt/bundle";
import { useState } from "react"
import "./Tegaki.css"

type tegakiProps = {
    text: string
    speed: number
}

function Tegaki({ text, speed }: tegakiProps) 
{
    const [loop, setLoop] = useState(false);

    return(
        <TegakiRenderer
            font={rockSalt}
            time={{ mode: 'uncontrolled', speed: speed, loop: loop }}
            className='tegaki'
            onMouseEnter={ () => setLoop(true) }
            onMouseLeave={ () => setLoop(false) }
        >
            {text}
        </TegakiRenderer>
    )
}

export default Tegaki
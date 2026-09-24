import { TegakiRenderer } from 'tegaki/react';
import rockSalt from '../../assets/RockSalt/bundle';
import './Hero.css'

type heroProps = {
    text: string
    speed: number
}

function Hero({ text, speed }: heroProps)
{
    return (
        <TegakiRenderer 
            font={rockSalt}
            time={{ mode: 'uncontrolled', speed: speed }}
            className='hero'
        >
            {text}
        </TegakiRenderer>
    );
}

export default Hero
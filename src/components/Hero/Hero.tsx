import { TegakiRenderer } from 'tegaki/react';
import rockSalt from '../../assets/RockSalt/bundle';
import './Hero.css'

type heroProps = {
    text: string
    speed: number
    onComplete?: () => void
}

function Hero({ text, speed, onComplete }: heroProps)
{
    return (
        <TegakiRenderer 
            font={ rockSalt }
            time={{ mode: 'uncontrolled', speed: speed }}
            onComplete={ onComplete }
            className='hero'
        >
            { text }
        </TegakiRenderer>
    );
}

export default Hero
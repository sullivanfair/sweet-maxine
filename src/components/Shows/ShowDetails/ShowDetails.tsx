import { TegakiRenderer } from 'tegaki';
import './ShowDetails.css'
import rockSalt from '../../../assets/RockSalt/bundle'

type showDetailProps = {
    text: string
    speed: number
}

function ShowDetails({text, speed}: showDetailProps)
{
    return (
        <span>
            <TegakiRenderer
                font={ rockSalt }
                time={{ mode: 'uncontrolled', speed: speed }}
                className='showDetail'
            >
                { text }
            </TegakiRenderer>
        </span>
    )
}

export default ShowDetails
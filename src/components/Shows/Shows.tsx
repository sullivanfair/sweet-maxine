import Hero from '../Hero/Hero';
import { motion } from 'framer-motion';
import './Shows.css'
import ShowDetails from './ShowDetails/ShowDetails'

type show = {
    showId: number,
    event: string,
    location: string,
    date: string,
    complete: boolean
}

const shows: show[] = [

    {showId: 1, event: 'Ag Days', location: 'Riceville, IA', date: 'June 5th, 2026', complete: true},
    {showId: 2, event: 'Old Settler Days', location: 'Chester, IA', date: 'June 13th, 2026', complete: true},
    {showId: 3, event: 'The Mighty Howard County Fair', location: 'Cresco, IA', date: 'June 25th, 2026', complete: true},
    {showId: 4, event: 'Old Roundhouse Trail Days', location: 'Elma, IA', date: 'July 10th, 2026', complete: true},
    {showId: 5, event: 'Cheesefest', location: 'Schley, IA', date: 'July 18th, 2026', complete: true},
    {showId: 6, event: 'Wapsi Days', location: 'Riceville, IA', date: 'August 1st, 2026', complete: true},
    {showId: 7, event: 'Hemlock w/ Sweet Maxine', location: 'Riceville, IA', date: 'August 16th, 2026', complete: true},
    {showId: 8, event: 'JayR Brink Band w/ Sweet Maxine', location: 'Kendalville, IA', date: 'September 18th, 2026', complete: true},
    {showId: 9, event: 'Elma Locker 20th Anniversary', location: 'Elma, IA', date: 'Setptember 19th, 2026', complete: true},
    {showId: 10, event: 'Rusty\'s Last Call', location: 'Osage, IA', date: 'October 31st, 2026', complete: false}

]

function Shows()
{
    return (
        <>
            <Hero text='Shows' speed={2}/>
            <div>
                <ul className='showList'>
                    {shows.map((show) => (
                        <li key={show.showId} className='showItem'>
                            <div className='showCard'>
                                <ShowDetails text={show.event} speed={4}/>
                                <ShowDetails text={show.location} speed={4}/>
                                <ShowDetails text={show.date} speed={4}/>
                            </div>

                            {show.complete && 
                                <motion.span
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 4, ease: 'easeOut' }}
                                    className='motion-span'
                                />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Shows
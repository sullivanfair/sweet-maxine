import Tegaki from '../Tegaki/Tegaki'
import './Navbar.css'
import type { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

type navbarProps = {
    isHomePage: boolean
}

function Navbar({ isHomePage }: navbarProps)
{
    return (
        <nav>
            { 
                isHomePage ? 
                <ul>
                    <CustomLink to='/Shows'><Tegaki text='Shows' speed={2}/></CustomLink>
                    <CustomLink to='/About'><Tegaki text='Meet the Band' speed={5}/></CustomLink>
                    <CustomLink to='/Listen'><Tegaki text='Listen' speed={2}/></CustomLink>  
                </ul> : 
                <ul>
                    <CustomLink to='/'><Tegaki text='Sweet Maxine' speed={5}/></CustomLink>
                    <CustomLink to='/Shows'><Tegaki text='Shows' speed={2}/></CustomLink>
                    <CustomLink to='/About'><Tegaki text='Meet the Band' speed={5}/></CustomLink>
                    <CustomLink to='/Listen'><Tegaki text='Listen' speed={2}/></CustomLink>  
                </ul>
            }
        </nav>
    )
}

type CustomLinkProps = {
    to: string
    children: ReactNode
}

function CustomLink({ to, children, ...props }: CustomLinkProps)
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ""}>
            <Link to={to} {...props} className='link'>
                {children}
            </Link>
        </li>
    )
}

export default Navbar
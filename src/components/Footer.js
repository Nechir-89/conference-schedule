import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { VscGithubInverted } from 'react-icons/vsc'

function Footer() {
    return (
        <footer>
            <a className='sourceCode' href='https://github.com/Nechir-89/conference-schedule' target='_blank' rel='noopener noreferrer'>
                <span>Source Code</span>
                <VscGithubInverted />
            </a>
            <h3>Developers</h3>
            <div className='developers'>
                <a href='https://twitter.com/analucia_chin' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter />
                    Analuciachin
                </a>
                <a href='https://twitter.com/Nechir89' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter />
                    Nechirvan
                </a>

            </div>
        </footer>
    )
}

export default Footer;
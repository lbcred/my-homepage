import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SocialLinks(){
    const openURL = (url) => {
        window.open(url)
    }

    return (
        <div className="text-3xl space-x-5 text-pink-600">
            <FontAwesomeIcon 
                className="cursor-pointer hover:text-gray-600"
                icon = {faGithub}
                onClick={() => openURL("https://github.com/lbcred")}
            />
            <FontAwesomeIcon
                className="cursor-pointer hover:text-gray-600"
                icon = {faLinkedin} 
                onClick={() => openURL("https://www.linkedin.com/in/lewis-battersby-22aa94188/")}
            />
        </div>
    )
}

export default SocialLinks
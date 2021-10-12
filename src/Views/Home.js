import React from 'react'
import SocialLinks from '../Components/SocialLinks'

function Home(){
    return (
        <div  className="flex justify-center">
            <div className="text-center text-gray-800 pt-36 mx-5 space-y-36">
                <div className="p-7 pt-0 space-y-2 shadow-md bg-white rounded-2xl">
                    <h1 className="font-medium text-2xl p-5">About Me</h1>
                    <p>I am a Graduate Software Engineer working at Credera UK</p>
                    <p>Check my github to see any ongoing projects or work</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md">
                    <SocialLinks/>
                </div>
            </div>
        </div>
    )
}

export default Home
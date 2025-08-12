import React from 'react'

const NotCreatedYet = ({ name }) => {
    return (
        <>
            <div className="flex items-center justify-center h-screen w-full bg-purple-500 text-white">
                <p className="text-lg text-center">No {name} created yet.</p>
            </div>
        </>
    )
}

export default NotCreatedYet
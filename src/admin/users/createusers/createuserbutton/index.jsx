import React, { useState } from 'react'
import CreateuserForm from '..'

const CreateUserButton = () => {
    const [ dialog, setdialog] = useState(false)
    return (
        <div>
            <button onClick={() => setdialog(true)} className="bg-purple-600 px-4 py-2 rounded text-white">
                createUser
            </button>
            { dialog && <CreateuserForm closeDialog = {()=>setdialog(false)}  setdialog={setdialog}/>}
        </div>
    )
}

export default CreateUserButton
import React from 'react'
import { useCreateUser } from './hooks/useCreateUser'
import CreateuserForm from './createusers'

const CreateUserButton = () => {
    const { dialog, setdialog} = useCreateUser()
    return (
        <div>
            <button onClick={() => setdialog(true)} className="bg-gray-100 border px-4 py-2 rounded">
                createUser
            </button>

            {
                dialog && <CreateuserForm />
            }

        </div>
    )
}

export default CreateUserButton
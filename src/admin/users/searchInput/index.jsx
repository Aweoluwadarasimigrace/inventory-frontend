import React from 'react'
import { useSearchUser } from '../hooks/useSearchUser'

const SearchInput = () => {
    const {setSearchTerm, searchTerm, results}= useSearchUser()
  return (
    <>
       <div >
    <div>
        <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 w-full rounded"
      />

    </div>
      {results.length > 0 ? (
        results.map((user) => (
          <div key={user._id} className="p-3 z-50 shadow-md bg-white mt-2">
            <p><strong>{user.firstname}</strong> - {user.email}</p>
          </div>
        ))
      ) : (
        searchTerm && <p>No results found</p>
      )}
    </div>
    </>
  )
}

export default SearchInput
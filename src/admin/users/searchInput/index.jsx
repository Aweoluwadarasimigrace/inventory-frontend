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
        className="border px-4 py-2 w-[100%] rounded mb-4"
      />

    </div>
      {results.length > 0 ? (
        results.map((user) => (
          <div key={user._id} className="p-3 z-50 shadow-md bg-white">
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
import React from 'react'
import { useSearchUser } from '../hooks/useSearchUser'

const SearchInput = () => {
    const {setSearchTerm, searchTerm, results}= useSearchUser()
  return (
    <>
       <div className="p-4">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 w-full rounded mb-4"
      />

      {results.length > 0 ? (
        results.map((user) => (
          <div key={user._id} className="p-3 border rounded mb-2">
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
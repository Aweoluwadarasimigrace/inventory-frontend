import React from 'react'
import { useCreateCustomer } from '../../hooks/useCreateCustomer'

const CountryDropdown = () => {
    const { countries, setSelectedCountry, selectedCountry, setSelectedState, selectedState, states, changeFormDetails , cities, errors} = useCreateCustomer()
    return (
        <>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose yourcountry</label>
                <select name='country' onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select role</option>
                    {
                        countries.map((country, idx) => (
                            <option value={country?.name} key={idx}> {country?.name} </option>
                        ))
                    }
                </select>
                {errors.country && <small className="text-red-500">{errors.country}</small>}
            </div>


            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose your State</label>
                <select name='state' onChange={(e) => setSelectedState(e.target.value)} value={selectedState}  disabled={!states.length} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select Your state</option>
                    {
                        states.map((state, idx) => (
                            <option value={state?.name} key={idx}> {state?.name} </option>
                        ))
                    }
                </select>
                {errors.state && <small className="text-red-500">{errors.state}</small>}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose your State</label>
                <select name='city' onChange={changeFormDetails} value={FormData.city} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select Your state</option>
                    {
                        cities.map((city, idx) => (
                            <option value={city} key={idx}> {city} </option>
                        ))
                    }
                </select>
                 {errors.city && <small className="text-red-500">{errors.city}</small>}
            </div>
        </>
    )
}

export default CountryDropdown
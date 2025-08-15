import useCustomerStore from '@/store/getCustomers'
import React, { useEffect, useState } from 'react'
import { useEditCustomer } from '../hooks/useEditCustomer'
import { useRegister } from '@/(auth)/hooks/useRegister'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useCreateCustomer } from '../hooks/useCreateCustomer'


const EditCustomerForm = ({ onclose, open, customerId }) => {
  const { loading, customers } = useCustomerStore()
  const { changeFormDetails, submitForm, formData, setFormData } = useEditCustomer()
  const { countryValue } = useRegister()
  const { setSelectedCountry, setSelectedState, cities, countries, states, selectedCountry, selectedState } = useCreateCustomer()
  const [selectedcode, setselectedcode] = useState();
  const [isOpen, setisOpen] = useState(false);


  useEffect(() => {
    if (!customerId || !customers.length) return

    const customertoUpdate = customers.find((customer) => customer._id === customerId)
    console.log(customertoUpdate)

    if (customertoUpdate) {
      setFormData({
        firstname: customertoUpdate?.firstname || '',
        lastname: customertoUpdate?.lastname || "",
        email: customertoUpdate?.email || "",
        address: customertoUpdate?.address || "",
        contact: customertoUpdate?.contact || '',
        number: customertoUpdate?.number || '',
        countrycode: customertoUpdate?.countrycode || '',
        city: customertoUpdate?.city || "",
      })

      setSelectedCountry({ country: customertoUpdate?.country || "" })
      setSelectedState({ state: customertoUpdate?.state || "" })
    }

  }, [customerId, customers])


  return (
    <Dialog open={open} onOpenChange={onclose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-2" onSubmit={(e) => submitForm(e, customerId)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1. firstname */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Firstname</label>
              <input
                type="text"
                name='firstname'
                disabled
                value={formData?.firstname}
                placeholder="Enter your firstname"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />
            </div>

            {/* 2. lastname */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">lastname</label>
              <input
                type="text"
                name='lastname'
                disabled
                value={formData?.lastname || ""}
                placeholder="Enter your lastname"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />

              {/* 3. Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  name='email'
                  disabled
                  value={formData?.email || ""}
                  placeholder="Enter email"
                  className="w-full border border-slate-300 rounded-md px-4 py-2"
                />
              </div>


              {/* 5. Phone with Code */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <div className="flex gap-2">

                  {/* country dropdwonn */}

                  <div className='relative w-[130px]'>
                    <div onClick={() => setisOpen(!isOpen)} className='w-full p-3 border border-slate-300 rounded-md text-slate-700 cursor-pointer flex items-center justify-between'>
                      {selectedcode || formData?.countrycode}
                    </div>

                    {
                      isOpen && (
                        <div className='absolute z-10 mt-1 w-60 max-h-48 overflow-y-auto border border-slate-300 rounded-md shadow-lg bg-white'>
                          {countryValue.map((country, i) => (
                            <div key={i} onClick={() => {
                              setselectedcode(country.phoneCode)
                              setisOpen(false)
                              changeFormDetails({ target: { name: "countrycode", value: country.phoneCode } })
                            }} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer ">
                              {country.name} ({country.phoneCode})
                            </div>
                          ))}
                        </div>
                      )
                    }
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    name='number'
                    value={formData?.number || ""}
                    onChange={changeFormDetails}
                    className="flex-1 border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <textarea name='address'
                  onChange={changeFormDetails}
                  value={formData?.address || ""}
                  placeholder="Enter Your Address"
                  className="w-full border border-slate-300 rounded-md px-4 py-2">
                </textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose your country</label>
                <select name='country' onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry?.country} className="w-full border border-slate-300 rounded-md px-4 py-2">
                  <option value="">Select role</option>
                  {
                    countries.map((country, idx) => (
                      <option value={country?.name} key={idx}> {country?.name} </option>
                    ))
                  }
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose your State</label>
                <select name='state' onChange={(e) => setSelectedState(e.target.value)} value={selectedState?.state} disabled={!states.length} className="w-full border border-slate-300 rounded-md px-4 py-2">
                  <option value="">Select Your state</option>
                  {
                    states.map((state, idx) => (
                      <option value={state?.name} key={idx}> {state?.name} </option>
                    ))
                  }
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">choose your City</label>
                <select name='city' onChange={changeFormDetails} value={formData?.city} className="w-full border border-slate-300 rounded-md px-4 py-2">
                  <option value="">Select Your state</option>
                  {
                    cities.map((city, idx) => (
                      <option value={city} key={idx}> {city} </option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div>
          {/* Submit button */}
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onclose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-purple-600">{loading ? "Saving..." : "Save Changes"}</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}

export default EditCustomerForm 
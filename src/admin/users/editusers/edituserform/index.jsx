import { useRegister } from '@/(auth)/hooks/useRegister';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useAdminUserStore from '@/store/getUserCreatedByAdmin';
import React, { useState } from 'react'
import { useEditUsers } from '../../hooks/useEditUsers';

const EditUserForm = ({onClose, open}) => {
  const { loading, adminUser } = useAdminUserStore()
  const { changeFormDetails, submitForm, handleProfileImageChange } = useEditUsers()
  console.log(adminUser)
  const [selectedcode, setselectedcode] = useState();
  const [isOpen, setisOpen] = useState(false);
  const { countryValue } = useRegister();


  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <form onSubmit={(e) => submitForm(e, userId)} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Firstname */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Firstname</label>
              <input
                type="text"
                name="firstname"
                value={adminUser.firstname}
                disabled
                placeholder="Enter firstname"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />

            </div>

            {/* Lastname */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Lastname</label>
              <input
                type="text"
                name="lastname"
                disabled
                value={adminUser.lastname || ""}
                placeholder="Enter lastname"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />

            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                // value={adminUser.username || ""}
                onChange={changeFormDetails}
                placeholder="Enter username"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />

            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                disabled
                value={adminUser.email || ""}
                placeholder="Enter email"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />

            </div>

            {/* Phone with Country Code */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <div className="flex gap-2">
                <div className="relative w-[130px]">
                  <div
                    onClick={() => setisOpen(!isOpen)}
                    className="w-full p-3 border border-slate-300 rounded-md text-slate-700 cursor-pointer flex items-center justify-between"
                  >
                    {selectedcode || adminUser.countrycode}
                  </div>
                  {isOpen && (
                    <div className="absolute z-10 mt-1 w-60 max-h-48 overflow-y-auto border border-slate-300 rounded-md shadow-lg bg-white">
                      {countryValue.map((country, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setselectedcode(country.phoneCode);
                            setisOpen(false);
                            changeFormDetails({
                              target: { name: "countrycode", value: country.phoneCode },
                            });
                          }}
                          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
                        >
                          {country.name} ({country.phoneCode})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  name="number"
                  value={adminUser.number || ""}
                  onChange={changeFormDetails}
                  placeholder="Enter phone number"
                  className="flex-1 border border-slate-300 rounded-md px-4 py-2"
                />
              </div>

            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
              <select
                name="gender"
                value={adminUser.gender || ""}
                disabled
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
              <select
                name="role"
                value={adminUser.role || ""}
                disabled

                className="w-full border border-slate-300 rounded-md px-4 py-2"
              >
                <option value="">Select role</option>
                <option value="product manager">Product Manager</option>
                <option value="sales representative">Sales Representative</option>
              </select>

            </div>

            {/* Profile Image */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Profile Image</label>
              <input
                type="file"
                onChange={handleProfileImageChange}
                accept="image/*"
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />

            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{loading ? "Saving..." : "Save Changes"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditUserForm
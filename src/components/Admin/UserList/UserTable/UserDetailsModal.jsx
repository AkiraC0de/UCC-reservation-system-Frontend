import useUserList from "../../../../hooks/Admin/useUserList"
import { X, User, Mail, Check, AlertCircle, Calendar, BookOpen, Award, Trash2, Clock, Edit2, XCircle, Save } from "lucide-react"
import { TIME_SLOTS_30_MIN } from "../../../../configs/Room.config"
import { formatDBTime, formatDBTime2 } from "../../../../Utils/utils"
import { useState } from "react"
import { SyncLoader } from "react-spinners"

const UserDetailsModal = () => {
  
  const {isUserDetailOpen, selectedUser, setIsUserDetailOpen, setSelectedUser, fetchUsers} = useUserList()

  if(!isUserDetailOpen){
    return
  }
  

  const [isEditMode, setIsEditMode] = useState(false)
  const [editedUser, setEditedUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  const handleInputChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  }

  const handleSaveEdit = async () => {
    const URL = `http://localhost:8080/api/admin/user/${selectedUser._id}`
    const OPTION= {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(editedUser)
    }

    setIsLoading(true)
    await fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data.message)
      }

      setSelectedUser(data.data)
      setIsEditMode(false)
      
      fetchUsers()
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
    })

  }

  const closeModal = () => {
    setSelectedUser(null)
    setIsUserDetailOpen(false)
    setIsEditMode(false)
    setEditedUser({})
  }

  const getRoleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-700',
      faculty: 'bg-blue-100 text-blue-700',
      student: 'bg-green-100 text-green-700'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[role]}`}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </span>
    )
  }

  const getStatusBadge = (status) => {
    return status === 'verified' ? (
      <span className="flex items-center gap-1 text-green-700 text-sm">
        <Check size={16} className="text-green-600" />
        Verified
      </span>
    ) : (
      <span className="flex items-center gap-1 text-yellow-700 text-sm">
        <Clock size={16} className="text-yellow-600" />
        Pending
      </span>
    )
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-black/10">
      <div className="absolute right-1/50 top-1/40 h-38/40 shadow-xl bg-white p-1 rounded-2xl overflow-hidden anim-fade-pop-top">
        <div className="overflow-hidden  h-full w-full sm:w-96 bg-white">
          <div className="h-full flex flex-col ">

            <div className="border-b border-gray-200 bg-gray-200 rounded-xl relative">

              <div className="flex items-center justify-end mb-10 px-4 py-2">
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>  
              </div>

              <div className="w-18 h-18 bg-green-gradient-2 rounded-full center absolute top-5 translate-y-1/2 left-6 border-5 border-white">
                <span className="text-white font-bold text-2xl">
                  {selectedUser.firstName.charAt(0)}{selectedUser.lastName.charAt(0)}
                </span>
              </div>

              {selectedUser && (
                isEditMode ? (
                  <div className="flex flex-col p-6 pt-11 bg-white rounded-tl-2xl rounded-tr-2xl">
                    <div className="space-y-3 text-xs">
                      <div className="flex w-full gap-2">
                        <input
                          type="text"
                          value={editedUser?.firstName != undefined ? editedUser.firstName : selectedUser.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent "
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          value={editedUser?.lastName || selectedUser.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className=" w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent "
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                ) : 
                <div className="flex flex-col p-6 pt-11 bg-white rounded-tl-2xl rounded-tr-2xl">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </h3>
                  <p className="text-xs text-gray-text">{selectedUser.email}</p>
                </div>     
              )}

            </div>

            {/* Content */}
            {selectedUser && (
              <div className="flex-1 overflow-y-scroll scroll-bar-custom  p-6">
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <User size={16} />
                      Basic Information
                    </h4>
                    <div className="space-y-3  rounded-lg p-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email Address</p>
                          {isEditMode ? (
                            <input
                              type="email"
                              value={editedUser?.email || selectedUser.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-xs"
                            />
                            ) : (
                            <p className="text-sm text-gray-900 flex items-center gap-2">
                              <Mail size={14} />
                              {selectedUser.email}
                            </p> 
                          )}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Role</p>
                        {isEditMode ? (
                          <select
                            value={editedUser?.role || selectedUser.role}
                            onChange={(e) => handleInputChange('role', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-xs"
                          >
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            <option value="admin">Admin</option>
                          </select>
                        ) : (
                          <div>{getRoleBadge(selectedUser.role)}</div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Account Status</p>
                        <div>{getStatusBadge(selectedUser.status)}</div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email Verification</p>
                        <p className="text-sm text-gray-900">
                          {selectedUser.isEmailVerified ? (
                            <span className="text-green-600 flex items-center gap-1">
                              <Check size={14} /> Verified
                            </span>
                                                      ) : (
                            <span className="text-yellow-600 flex items-center gap-1">
                              <AlertCircle size={14} /> Not Verified
                            </span>
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Date Created</p>
                        <p className="text-sm text-gray-900 flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDBTime(selectedUser.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Program Info */}
                  {selectedUser.role === 'student' && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <BookOpen size={16} />
                        Academic Details
                      </h4>
                      <div className="space-y-3  rounded-lg p-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Program</p>
                          {isEditMode ? (
                            <input
                              type="text"
                              value={editedUser?.program || selectedUser.program}
                              onChange={(e) => handleInputChange('program', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                            />
                          ) : (
                            <p className="text-sm text-gray-900">{selectedUser.program}</p>
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Year Level</p>
                          {isEditMode ? (
                            <input
                              type="number"
                              min="1"
                              max="5"
                              value={editedUser?.yearLevel || selectedUser.yearLevel}
                              onChange={(e) => handleInputChange('yearLevel', parseInt(e.target.value))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                            />
                          ) : (
                            <p className="text-sm text-gray-900">{selectedUser?.yearLevel || 'N/A'}</p>
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Section</p>
                          {isEditMode ? (
                            <input
                              type="text"
                              value={editedUser?.section || selectedUser.section}
                              onChange={(e) => handleInputChange('section', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                            />
                          ) : (
                            <p className="text-sm text-gray-900">{selectedUser.section || 'N/A'}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reservation Activity */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Reservation Activity
                    </h4>
                    <div className=" rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Total Reservations Made</p>
                      <p className="text-sm text-gray-900">
                        {selectedUser.reservationsMade.length + selectedUser.itemsReserved.length} reservations
                      </p>

                      <p className="text-xs text-gray-500 mb-1 mt-3">Reservations HIstory</p>
                      {selectedUser?.reservationsMade?.length > 0 ? (
                        <div className="space-y-3">
                          {selectedUser.reservationsMade.map((reserv) => (
                            <div
                              key={reserv._id}
                              className="border border-gray-300 rounded-lg p-3 flex flex-col gap-1 bg-gray-50 text-xs"
                            >
                              <div className="flex justify-between">
                                <span className="text-gray-600">Date of Reservation:</span>
                                <span className="">{reserv.date}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600">Date submitted:</span>
                                <span className="">{formatDBTime2(reserv.createdAt)}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Room:</span>
                                <span className="">{reserv.roomId}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Time:</span>
                                <span className="">
                                  {TIME_SLOTS_30_MIN[reserv.startingTime]}
                                  {" - "}
                                  {TIME_SLOTS_30_MIN[reserv.outTime]}
                                </span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Purpose:</span>
                                <span className="">{reserv.purpose}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Status:</span>
                                <span
                                  className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
                                    reserv.status === "accepted"
                                      ? "bg-green-200 text-green-900"
                                      : reserv.status === "pending"
                                      ? "bg-yellow-200 text-yellow-900"
                                      : "bg-red-200 text-red-900"
                                  }`}
                                >
                                  {reserv.status}
                                </span>
                              </div>
                            </div>
                          ))}

                          {selectedUser.itemsReserved.map((reserv) => (
                            <div
                              key={reserv._id}
                              className="border border-gray-300 rounded-lg p-3 flex flex-col gap-1 bg-gray-50 text-xs"
                            >
                              <div className="flex justify-between">
                                <span className="text-gray-600">Date of Reservation:</span>
                                <span className="">{reserv.date}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600">Date submited:</span>
                                <span className="">{formatDBTime2(reserv.createdAt)}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Item:</span>
                                <span className="">{reserv.itemId}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Time:</span>
                                <span className="">
                                  {TIME_SLOTS_30_MIN[reserv.startingTime]}
                                  {" - "}
                                  {TIME_SLOTS_30_MIN[reserv.outTime]}
                                </span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Purpose:</span>
                                <span className="">{reserv.purpose}</span>
                              </div>

                              <div className="flex justify-between">
                                <span className="text-gray-600 ">Status:</span>
                                <span
                                  className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
                                    reserv.status === "accepted"
                                      ? "bg-green-200 text-green-900"
                                      : reserv.status === "pending"
                                      ? "bg-yellow-200 text-yellow-900"
                                      : "bg-red-200 text-red-900"
                                  }`}
                                >
                                  {reserv.status}
                                </span>
                              </div>
                            </div>
                          ))}


                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm italic">
                          No reservations found for this user.
                        </p>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Actions */}
            
            <div className="border-t border-gray-200 p-4 flex justify-end gap-3 bg-white">
              {isEditMode ? (
                <>
                  <button
                    disabled={isLoading}
                    onClick={handleSaveEdit}
                    className="text-sm w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-gradient-2 text-white rounded-lg hover:scale-103 transition-all cursor-pointer font-medium"
                  >
                    {isLoading ? 
                      <SyncLoader loading={isLoading} color="green" size={6}/>
                    : (<>
                      <Save size={16} />
                      Save Changes
                    </>)}
                  </button>
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="flex text-sm items-center gap-2 px-4 py-2 border-1 border-red-600 text-red-400 rounded-lg hover:scale-104 transition-all cursor-pointer"
                  >
                    <XCircle size={16} />
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="text-sm w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-gradient-2 text-white rounded-lg hover:scale-103 transition-all cursor-pointer font-medium"
                  >
                    <Edit2 size={16} />
                    Edit User Details
                  </button>

                  <button
                    onClick={() => handleDeleteUser(selectedUser.id)}
                    className="flex text-sm items-center gap-2 px-4 py-2 border-1 border-red-600 text-red-400 rounded-lg hover:scale-104 transition-all cursor-pointer"
                  >
                    <Trash2 size={16} />
                    Delete
                </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserDetailsModal
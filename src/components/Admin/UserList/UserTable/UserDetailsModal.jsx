import useUserList from "../../../../hooks/Admin/useUserList"
import { X, User, Mail, Check, AlertCircle, Calendar, BookOpen, Award, Trash2, Clock } from "lucide-react"

const UserDetailsModal = () => {
  const {isUserDetailOpen, selectedUser, setIsUserDetailOpen, setSelectedUser} = useUserList()

  const closeModal = () => {
    setSelectedUser(null)
    setIsUserDetailOpen(false)
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

  if(!isUserDetailOpen){
    return
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
                        <p className="text-sm text-gray-900 flex items-center gap-2">
                          <Mail size={14} />
                          {selectedUser.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Role</p>
                        <div>{getRoleBadge(selectedUser.role)}</div>
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
                          {selectedUser.createdAt}
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
                          <p className="text-sm text-gray-900">{selectedUser.program}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Year Level</p>
                          <p className="text-sm text-gray-900">{selectedUser.yearLevel || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Section</p>
                          <p className="text-sm text-gray-900">{selectedUser.section || 'N/A'}</p>
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
                        {selectedUser.reservationsMade.length} reservations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Actions
            <div className="border-t border-gray-200 p-4 flex justify-end gap-3 bg-white">
              {selectedUser?.status === 'pending' && (
                <button
                  onClick={() => handleVerifyUser(selectedUser.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Check size={16} />
                  Verify User
                </button>
              )}
              <button
                onClick={() => handleDeleteUser(selectedUser.id)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserDetailsModal
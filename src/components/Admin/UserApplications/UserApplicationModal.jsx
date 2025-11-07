import { 
  Check, X, AlertCircle, Mail, Calendar,
  FileText, GraduationCap, User, Download, ZoomIn, History 
} from 'lucide-react'
import { useState } from 'react'
import { formatDBTime2 } from '../../../Utils/utils'

const StatusBadge = ({ type, value }) => {
  const styles = {
    role: {
      student: 'bg-green-100 text-green-700',
      faculty: 'bg-blue-100 text-blue-700',
      admin: 'bg-purple-100 text-purple-700'
    },
    status: {
      pending: 'bg-yellow-100 text-yellow-700',
      verified: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700'
    }
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[type][value]}`}>
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  )
}

const UserApplicationModal = ({ user, isOpen, onClose, onApprove, onReject, onRequestReupload }) => {
  const [rejectReason, setRejectReason] = useState('');
  const [reuploadMessage, setReuploadMessage] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [showReuploadForm, setShowReuploadForm] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  if (!user) return null;
  

  const handleApprove = () => {
    onApprove(user._id);
    onClose();
  };

  const handleReject = () => {
    if (!rejectReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }
    onReject(user._id, rejectReason);
    setRejectReason('');
    setShowRejectForm(false);
    onClose();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/10 transition-opacity duration-300 z-60 ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div className={`anim-slide-to-left fixed right-0 top-0 h-full w-full sm:w-[500px] lg:w-[600px] bg-white shadow-2xl transform transition-transform duration-300 z-70 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">

          <div className="p-6 border-b border-gray-200 bg-green-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Application Review</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-green-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-gradient-2 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <StatusBadge type="role" value={user.role} />
                  <StatusBadge type="status" value={user.status} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <User size={16} />
                  Personal Information
                </h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Full Name</p>
                    <p className="text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email Address</p>
                    <p className="text-sm text-gray-900 flex items-center gap-2">
                      <Mail size={14} />
                      {user.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date Applied</p>
                    <p className="text-sm text-gray-900 flex items-center gap-2">
                      <Calendar size={14} />
                      {formatDBTime2(user.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <GraduationCap size={16} />
                  Academic Information
                </h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Program</p>
                    <p className="text-sm font-medium text-gray-900">{user.program}</p>
                  </div>
                  {user.yearLevel && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Year Level</p>
                        <p className="text-sm text-gray-900">Year {user.yearLevel}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Section</p>
                        <p className="text-sm text-gray-900">Section {user.section}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Uploaded Document */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FileText size={16} />
                  Uploaded ID / Registration Form
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="relative group">
                    <img 
                      src={`http://localhost:8080${user.studentIdImage}`}
                      alt="User ID"
                      className="w-full rounded-lg border-2 border-gray-200 cursor-pointer hover:border-green-500 transition-colors"
                      onClick={() => setIsImageZoomed(true)}
                    />
                    <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                      <button
                        onClick={() => setIsImageZoomed(true)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white p-3 rounded-full shadow-lg"
                      >
                        <ZoomIn size={20} className="text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => setIsImageZoomed(true)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      <ZoomIn size={16} />
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>

              {/* Reject Form */}
              {showRejectForm && (
                <div className="bg-red-50 rounded-lg p-4 border border-red-200 text-sm">
                  <h4 className="text-sm font-semibold text-red-900 mb-3">Rejection Reason</h4>
                  <textarea
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    placeholder="Please provide a reason for rejecting this application..."
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    rows="4"
                  />
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={handleReject}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Confirm Rejection
                    </button>
                    <button
                      onClick={() => setShowRejectForm(false)}
                      className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Footer Actions */}
          {!showRejectForm && (
            <div className="p-6 border-t text-sm border-gray-200 bg-gray-50 font-semibold">
              <div className="flex gap-3">
                <button
                  onClick={handleApprove}
                  className="flex-3 flex items-center justify-center gap-2 bg-green-gradient-2 cursor-pointer hover:scale-103 transition-all text-white px-4 py-3 rounded-lg font-medium"
                >
                  <Check size={20} />
                  Approve Application
                </button>
                <button
                  onClick={() => setShowRejectForm(true)}
                  className="flex items-center justify-center gap-2 border-1 border-red-600 text-red-700 px-4 py-2 rounded-lg hover:scale-103 transition-all "
                >
                  <X size={18} />
                  Reject
                </button>
              </div>
            </div>
          )}

        </div>
      </div>


      {isImageZoomed && (
        <div 
          className="fixed inset-0 bg-black/30 bg-opacity-90 z-[60] flex items-center justify-center p-4 "
          onClick={() => setIsImageZoomed(false)}
        >
          <button
            onClick={() => setIsImageZoomed(false)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
          <img 
            src={`http://localhost:8080${user.studentIdImage}`}
            alt="User ID - Full Size"
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default UserApplicationModal

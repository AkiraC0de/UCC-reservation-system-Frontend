import React, { useEffect, useMemo, useState } from 'react';
import { 
  Eye, X, Users,
} from 'lucide-react';
import Header from '../../components/Admin/UserApplications/Header';
import ApplicationSummary from '../../components/Admin/UserApplications/ApplicationSummary';
import Actions from '../../components/Admin/UserApplications/Actions';
import TableHead from '../../components/Admin/UserApplications/UserTable/TableHead';
import UserApplicationModal from '../../components/Admin/UserApplications/UserApplicationModal';
import { formatDBTime2 } from '../../Utils/utils';

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
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[type][value]}`}>
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
}

const Applications = () => {
  const [allApplications, setAllApplications] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedUser, setSelectedUser] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const fetchUsers = () => {
    const URL_REFRESH = "http://localhost:8080/api/admin/all-user"
    const OPTION_REFRESH = {
      method: "GET",
      credentials: 'include',
      headers: {
          "Content-Type": "application/json"
      },
    }
    fetch(URL_REFRESH, OPTION_REFRESH)
    .then(async res => {
      const data = await res.json()

      if (!res.ok) {
          throw new Error('CANT_FETCH_ALL_USERS_DATA')
      }

      if(!data.success){
        throw new Error(data.message) 
      }

      const userThatIsNotArchived = data.data.filter(user => user.status != "archived" )

      setAllApplications(userThatIsNotArchived)
    })
    .catch(err => {
        console.error("Fetching User Data critical error:", err);
    })
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  const filteredApplications = useMemo(() => (allApplications.filter(app => {
    if(app.status === "verified"){
      return false
    }
    const matchesSearch = 
      app.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || app.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  })), [allApplications])

  // HANDLER FUNCTIONS
  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReview = (user) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  const handleApprove = (userId) => {
    const URL = `http://localhost:8080/api/admin/user/${userId}`
    const OPTION= {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({status : "verified"})
    }

    fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data.message)
      }

      setIsDrawerOpen(false)
      showToastNotification('User verified successfully!')
      fetchUsers()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleReject = (userId, reason) => {
    const URL = `http://localhost:8080/api/admin/user/reject/${userId}`
    const OPTION= {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({reason})
    }

    fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data.message)
      }

      setIsDrawerOpen(false)
      showToastNotification('User Rejected!')
      fetchUsers()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleRequestReupload = (userId, message) => {
    console.log('Request reupload:', userId, 'Message:', message);
    showToastNotification('📤 Re-upload request sent to user');
    // API call: requestReupload(userId, message)
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedUser(null), 300);
  };


  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto">
        <Header/>
        <ApplicationSummary allApplications={allApplications}/>
        <Actions 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
        />
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden anim-fade-in-top">
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHead/>
              <tbody>
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-12">
                      <Users className="mx-auto mb-3 text-gray-400" size={48} />
                      <p className="text-gray-600 font-medium mb-1">No applications found</p>
                      <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => (
                    <tr key={app.id} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-700 font-semibold text-sm">
                              {app.firstName.charAt(0)}{app.lastName.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">
                              {app.firstName} {app.lastName}
                            </p>
                            <p className="text-xs text-gray-500 md:hidden truncate">{app.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 hidden lg:table-cell">
                        <p className="font-medium">{app.program}</p>
                        {app.yearLevel && (
                          <p className="text-xs text-gray-500">Year {app.yearLevel} - Section {app.section}</p>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 hidden md:table-cell">
                        <div className="max-w-[200px] truncate">{app.email}</div>
                      </td>
                      <td className="py-4 px-4">
                        <StatusBadge type="role" value={app.role} />
                      </td>
                      <td className="py-4 px-4">
                        <StatusBadge type="status" value={app.status} />
                      </td>
                      <td className="py-4 px-4 text-xs text-nowrap text-gray-600 hidden xl:table-cell">
                        {formatDBTime2(app.createdAt)}
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <button
                          onClick={() => handleReview(app)}
                          className="flex items-center gap-2 px-3 py-2 bg-green-gradient-2 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          <Eye size={16} />
                          <span className="hidden sm:inline">Review</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <UserApplicationModal
        user={selectedUser}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onApprove={handleApprove}
        onReject={handleReject}
        onRequestReupload={handleRequestReupload}
      />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-up">
          <p className="font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Applications;
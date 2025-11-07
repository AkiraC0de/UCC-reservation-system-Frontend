import React, { useState } from 'react';
import { 
  Search, Plus, Eye, Check, Trash2, X, Users, UserCheck, 
  Clock, GraduationCap, Filter, ChevronLeft, ChevronRight,
  Mail, User, Calendar, BookOpen, Award, AlertCircle
} from 'lucide-react';

const Applications = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const usersPerPage = 10;

  // ============================================
  // DUMMY DATA (Replace with API calls)
  // ============================================
  const allUsers = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Dela Cruz',
      email: 'juan.delacruz@university.edu',
      program: 'BSIT',
      yearLevel: 3,
      section: 'A',
      role: 'student',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2', 'res3', 'res4', 'res5'],
      createdAt: '2024-09-15'
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Santos',
      email: 'maria.santos@university.edu',
      program: 'BSCS',
      yearLevel: 4,
      section: 'B',
      role: 'student',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2', 'res3'],
      createdAt: '2024-08-20'
    },
    {
      id: 3,
      firstName: 'Pedro',
      lastName: 'Garcia',
      email: 'pedro.garcia@university.edu',
      program: 'Computer Science',
      yearLevel: null,
      section: null,
      role: 'faculty',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2'],
      createdAt: '2024-07-10'
    },
    {
      id: 4,
      firstName: 'Ana',
      lastName: 'Reyes',
      email: 'ana.reyes@university.edu',
      program: 'ACT',
      yearLevel: 2,
      section: 'C',
      role: 'student',
      status: 'pending',
      isEmailVerified: false,
      reservationsMade: [],
      createdAt: '2024-11-01'
    },
    {
      id: 5,
      firstName: 'Carlos',
      lastName: 'Mendoza',
      email: 'carlos.mendoza@university.edu',
      program: 'BSIT',
      yearLevel: 1,
      section: 'A',
      role: 'student',
      status: 'pending',
      isEmailVerified: false,
      reservationsMade: [],
      createdAt: '2024-11-03'
    },
    {
      id: 6,
      firstName: 'Sofia',
      lastName: 'Torres',
      email: 'sofia.torres@university.edu',
      program: 'BSCS',
      yearLevel: 3,
      section: 'B',
      role: 'student',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2', 'res3', 'res4'],
      createdAt: '2024-09-25'
    },
    {
      id: 7,
      firstName: 'Miguel',
      lastName: 'Ramos',
      email: 'miguel.ramos@university.edu',
      program: 'Information Technology',
      yearLevel: null,
      section: null,
      role: 'faculty',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1'],
      createdAt: '2024-06-15'
    },
    {
      id: 8,
      firstName: 'Lisa',
      lastName: 'Fernandez',
      email: 'lisa.fernandez@university.edu',
      program: 'ACT',
      yearLevel: 4,
      section: 'A',
      role: 'student',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2'],
      createdAt: '2024-08-05'
    },
    {
      id: 9,
      firstName: 'Ramon',
      lastName: 'Cruz',
      email: 'ramon.cruz@university.edu',
      program: 'System Administration',
      yearLevel: null,
      section: null,
      role: 'admin',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: [],
      createdAt: '2024-01-10'
    },
    {
      id: 10,
      firstName: 'Angela',
      lastName: 'Bautista',
      email: 'angela.bautista@university.edu',
      program: 'BSIT',
      yearLevel: 2,
      section: 'B',
      role: 'student',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2', 'res3'],
      createdAt: '2024-09-10'
    },
    {
      id: 11,
      firstName: 'Roberto',
      lastName: 'Villanueva',
      email: 'roberto.villanueva@university.edu',
      program: 'BSCS',
      yearLevel: 1,
      section: 'A',
      role: 'student',
      status: 'pending',
      isEmailVerified: false,
      reservationsMade: [],
      createdAt: '2024-11-05'
    },
    {
      id: 12,
      firstName: 'Elena',
      lastName: 'Martinez',
      email: 'elena.martinez@university.edu',
      program: 'Computer Engineering',
      yearLevel: null,
      section: null,
      role: 'faculty',
      status: 'verified',
      isEmailVerified: true,
      reservationsMade: ['res1', 'res2', 'res3'],
      createdAt: '2024-05-20'
    }
  ];

  // ============================================
  // COMPUTED VALUES
  // ============================================
  const stats = {
    totalUsers: allUsers.length,
    verifiedUsers: allUsers.filter(u => u.status === 'verified').length,
    pendingUsers: allUsers.filter(u => u.status === 'pending').length,
    facultyMembers: allUsers.filter(u => u.role === 'faculty').length
  };

  // Filter users based on search and filters
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = 
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.program.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  const getRoleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-700',
      faculty: 'bg-blue-100 text-blue-700',
      student: 'bg-green-100 text-green-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[role]}`}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </span>
    );
  };

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
    );
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  const handleVerifyUser = (userId) => {
    alert(`Verify user ${userId}`);
    // API call to verify user
  };

  const handleDeleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      alert(`Delete user ${userId}`);
      // API call to delete user
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedUser(null), 300);
  };

  // ============================================
  // COMPONENT RENDER
  // ============================================
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================ */}
        {/* PAGE HEADER */}
        {/* ============================================ */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">User List</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage all users, verify accounts, and track user activity</p>
        </div>

        {/* ============================================ */}
        {/* SUMMARY CARDS */}
        {/* ============================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg">
                <Users className="text-green-600" size={20} />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Total Users</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <UserCheck className="text-blue-600" size={20} />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Verified</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.verifiedUsers}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Clock className="text-yellow-600" size={20} />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Pending</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.pendingUsers}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-50 rounded-lg">
                <GraduationCap className="text-purple-600" size={20} />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Faculty</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.facultyMembers}</p>
          </div>
        </div>

        {/* ============================================ */}
        {/* FILTERS AND SEARCH */}
        {/* ============================================ */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, email, or program..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Role Filter */}
            <div className="w-full lg:w-48">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="w-full lg:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Add User Button */}
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <Plus size={20} />
              <span className="hidden sm:inline">Add User</span>
            </button>
          </div>
        </div>

        {/* ============================================ */}
        {/* USER TABLE */}
        {/* ============================================ */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Name</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Email</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700">Role</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Program</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden xl:table-cell">Year & Section</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden xl:table-cell">Date Created</th>
                  <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-12">
                      <Users className="mx-auto mb-3 text-gray-400" size={48} />
                      <p className="text-gray-600 font-medium mb-1">No users found</p>
                      <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                ) : (
                  currentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-700 font-semibold text-sm">
                              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="text-xs text-gray-500 md:hidden truncate">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 hidden md:table-cell">
                        <div className="max-w-[200px] truncate">{user.email}</div>
                      </td>
                      <td className="py-4 px-4">{getRoleBadge(user.role)}</td>
                      <td className="py-4 px-4 text-sm text-gray-700 hidden lg:table-cell">{user.program}</td>
                      <td className="py-4 px-4 text-sm text-gray-700 hidden xl:table-cell">
                        {user.yearLevel ? `Year ${user.yearLevel} - ${user.section}` : 'N/A'}
                      </td>
                      <td className="py-4 px-4">{getStatusBadge(user.status)}</td>
                      <td className="py-4 px-4 text-sm text-gray-600 hidden xl:table-cell">{user.createdAt}</td>
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(user)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          {user.status === 'pending' && (
                            <button
                              onClick={() => handleVerifyUser(user.id)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Verify User"
                            >
                              <Check size={18} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete User"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* ============================================ */}
          {/* PAGINATION */}
          {/* ============================================ */}
          {currentUsers.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} users
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-green-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ============================================ */}
      {/* USER DETAIL DRAWER */}
      {/* ============================================ */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 bg-opacity-50 transition-opacity"
            onClick={closeDrawer}
          ></div>

          {/* Drawer */}
          <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 bg-green-50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">User Details</h2>
                  <button
                    onClick={closeDrawer}
                    className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                {selectedUser && (
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {selectedUser.firstName.charAt(0)}{selectedUser.lastName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {selectedUser.firstName} {selectedUser.lastName}
                      </h3>
                      <p className="text-sm text-gray-600">{selectedUser.email}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              {selectedUser && (
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <User size={16} />
                        Basic Information
                      </h4>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
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
                        <div className="space-y-3 bg-gray-50 rounded-lg p-4">
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
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Total Reservations Made</p>
                        <p className="text-sm text-gray-900">
                          {selectedUser.reservationsMade.length} reservations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Actions */}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;

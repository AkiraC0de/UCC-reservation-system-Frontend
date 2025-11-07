import { useState } from "react";
import useUserList from "../../../hooks/Admin/useUserList"
import { PROGRAM_CHOICES } from "../../../configs/Auth.config"
import { 
  X, User, Mail, Lock, BookOpen, Users, Check, AlertCircle, 
  UserPlus, Eye, EyeOff 
} from 'lucide-react'
import { SyncLoader } from "react-spinners";

const AddNewUser = () => {
  const {isAddUserOpen, setIsAddUserOpen, fetchUsers} = useUserList()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    program: '',
    yearLevel: '',
    section: '',
    status: 'verified'
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if(!isAddUserOpen){
    return
  }

  const handleCreateUser = async () => {
    console.log(formData)
    const noError = validateForm()
    console.log(noError)
    if(!noError){
      return
    }

    const URL = `http://localhost:8080/api/admin/user`
    const OPTION= {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    }

    setIsSubmitting(true)
    await fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(!data.success){
        throw new Error(data.message)
      }
      
      fetchUsers()
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student',
        program: '',
        yearLevel: '',
        section: '',
        status: 'verified'
      })
      setIsAddUserOpen(false)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setIsSubmitting(false)
    })

  }

  const programs = {
    student: PROGRAM_CHOICES,
    faculty: [
      'Computer Studies Department',
      'Education Department',
      'Phsycology Department',
      'Mathematics Department'
    ]
  }
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (formData.role === 'student') {
      if (!formData.program) newErrors.program = 'Program is required for students'
      if (!formData.yearLevel) newErrors.yearLevel = 'Year level is required for students'
      if (!formData.section) newErrors.section = 'Section is required for students'
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-black/10">
      <div className="absolute right-1/50 flex flex-col top-1/40 h-38/40 shadow-xl w-105 bg-white rounded-2xl overflow-hidden anim-fade-pop-top">
        
        <div className="bg-green-gradient-2 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <UserPlus className="text-green-600" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Add New User</h2>
                <p className="text-sm text-green-50">Create a new account for the system</p>
              </div>
            </div>
            <button
              onClick={() => setIsAddUserOpen(false)}
              className="p-2 hover:bg-green-600 rounded-lg transition-colors text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-6 scroll-bar-custom flex-1">
            <div className="space-y-6">

              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <User size={16} />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Juan"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Dela Cruz"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative  text-xs">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="juan.delacruz@university.edu"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-xs">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full">
                <h3 className="text-xs font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Users size={16} />
                  Account Settings
                </h3>
                <div className="flex flex-col w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="admin">Admin</option>
                    </select>
                </div>
              </div>     


              {(formData.role === 'student' || formData.role === 'faculty') && (
                <div>
                  
                  <div className="space-y-4">

                    {formData.role === 'student' && (<div>
                      <h3 className="text-xs font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <BookOpen size={16} />
                        {formData.role === 'student' ? 'Academic Information' : 'Department Information'}
                      </h3>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {formData.role === 'student' ? 'Program' : ''} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                        className={`text-xs w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          errors.program ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select {formData.role === 'student' ? 'program' : 'department'}</option>
                        {
                          formData.role == "student" && (
                            programs.student.map(prog => (
                              <option key={prog.value} value={prog.value}>
                                {prog.label}
                              </option>
                            ))
                          ) 
                      }
                      </select>
                      {errors.program && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.program}
                        </p>
                      )}
                    </div>)}

                    {formData.role === 'student' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Year Level <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.yearLevel}
                            onChange={(e) => handleInputChange('yearLevel', e.target.value)}
                            className={`text-xs w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.yearLevel ? 'border-red-500' : 'border-gray-300'
                            }`}
                          >
                            <option value="">Select year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                          </select>
                          {errors.yearLevel && (
                            <p className=" text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.yearLevel}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Section <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.section}
                            onChange={(e) => handleInputChange('section', e.target.value)}
                            className={`text-xs w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.section ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="A"
                          />
                          {errors.section && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.section}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
        </div>

        <div className="border-t text-xs border-gray-200 px-6 py-4 bg-gray-50 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  role: 'student',
                  program: '',
                  yearLevel: '',
                  section: '',
                  status: 'verified'
                })
                setIsAddUserOpen(false)
              }}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:scale-104 transition-all cursor-pointer font-medium"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreateUser}
              disabled={isSubmitting}
              className="px-6 py-2 bg-green-gradient-2 text-white rounded-lg hover:scale-104 transition-all cursor-pointer font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <SyncLoader size={6} color="#00a63d"/>
              ) : (
                <>
                  <Check size={18} />
                  Create User
                </>
              )}
            </button>
          </div>

      </div>
    </div>
  )
}
export default AddNewUser
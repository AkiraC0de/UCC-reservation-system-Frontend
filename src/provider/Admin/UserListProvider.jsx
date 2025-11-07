import { useEffect, useMemo, useState } from "react"
import { UserListContext } from "../../context/Admin/UserListContext"

const UserListProvider = ({children}) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filteredUsers, setFilteredUsers] = useState(users)


  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [yearLevelFilter, setYearLevelFilter] = useState("all")

  const [isUserDetailOpen, setIsUserDetailOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(false)

  useEffect(() => {
    if(isLoading){
      return
    }

    const filteredData = users.filter(user => {
      const matchesSearch = 
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.program.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesRole = roleFilter === 'all' || user.role === roleFilter
      const matchedYearLevel = yearLevelFilter === 'all' || user.yearLevel === Number(yearLevelFilter)

      return matchesSearch && matchesRole && matchedYearLevel
    })


    setFilteredUsers(filteredData)
  }, [yearLevelFilter, roleFilter, searchQuery])

  const stats = useMemo(() => ({
    totalUsers: users.length,
    studentUsers: users.filter(u => u.role === 'student').length,
    facultyUsers: users.filter(u => u.role === 'faculty').length
  }), [users])

  const URL_REFRESH = "http://localhost:8080/api/admin/all-user"
  const OPTION_REFRESH = {
    method: "GET",
    credentials: 'include',
    headers: {
        "Content-Type": "application/json"
    },
  }

  const fetchUsers = () => {
    setIsLoading(true)
    fetch(URL_REFRESH, OPTION_REFRESH)
    .then(async res => {
      const data = await res.json()

      if (!res.ok) {
          throw new Error('CANT_FETCH_ALL_USERS_DATA')
      }

      if(!data.success){
        throw new Error(data.message) 
      }

      const userThatIsNotArchived = data.data.filter(user => user.status != "archived")

      setUsers(userThatIsNotArchived)
      setFilteredUsers(userThatIsNotArchived)
    })
    .catch(err => {
        console.error("Fetching User Data critical error:", err);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  // Auto fetch the users data
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UserListContext.Provider value={{
      users,
      stats,
      searchQuery,
      roleFilter,
      yearLevelFilter,
      filteredUsers,
      setSearchQuery,
      setRoleFilter,
      setYearLevelFilter,
      isUserDetailOpen,
      setIsUserDetailOpen,
      selectedUser,
      setSelectedUser,
      fetchUsers
    }}>
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
    </UserListContext.Provider>
  )
}
export default UserListProvider
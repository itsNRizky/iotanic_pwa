import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  //initial state
})
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const login = ({email, password}, callback) => {
    fetch('http://localhost:3600/api/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((res) => {
        
        setUser(res.values.account)
        callback()
      })
  }
  return (
    <AuthContext.Provider value={{
      user,
      login,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
  return useContext(AuthContext)
}
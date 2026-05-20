import { useEffect, useState } from "react"
import Authentication from "./pages/Authentication"
import Dashboard from "./pages/Dashboard"

function App() {
  const [authPage, setAuthPage] = useState(() => {
    const path = window.location.pathname
    if (path === "/signup") return "signup"
    return "login"
  })
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token") && !!localStorage.getItem("user")
  })

  useEffect(() => {
    if (isLoggedIn) {
      if (window.location.pathname !== "/dashboard") {
        window.history.replaceState({}, "", "/dashboard")
      }
    } else if (window.location.pathname === "/dashboard") {
      window.history.replaceState({}, "", "/login")
    }
  }, [isLoggedIn])

  useEffect(() => {
    const handlePopState = () => {
      if (isLoggedIn) {
        if (window.location.pathname !== "/dashboard") {
          window.history.replaceState({}, "", "/dashboard")
        }
        return
      }

      const path = window.location.pathname
      setAuthPage(path === "/signup" ? "signup" : "login")
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [isLoggedIn])

  const handleLoginSuccess = (userData, token) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    setIsLoggedIn(true)
    window.history.pushState({}, "", "/dashboard")
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    setIsLoggedIn(false)
    setAuthPage("login")
    window.history.pushState({}, "", "/login")
  }

  const handleAuthPageChange = (page) => {
    setAuthPage(page)
    window.history.pushState({}, "", page === "signup" ? "/signup" : "/login")
  }

  return (
    <>
      {isLoggedIn ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Authentication
          authPage={authPage}
          onPageChange={handleAuthPageChange}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  )
}

export default App

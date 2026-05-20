import Login from "../components/Login"
import Signup from "../components/Signup"

export default function Authentication({ authPage, onPageChange, onLoginSuccess }) {
  return (
    <section className="">
      {authPage === "login" ? (
        <Login onLoginSuccess={onLoginSuccess} onSwitchPage={() => onPageChange("signup")} />
      ) : (
        <Signup onSwitchPage={() => onPageChange("login")} />
      )}
    </section>
  )
}

import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import "../styles/authentication.css";

export default function Authentication() {
  return (
    <main className="authentication-container">
      <div className="white-container">
      <LoginComponent />
      <RegisterComponent/>
      </div>
      <div className="orange-container">
        <h1>Transform Your Fitness Journey</h1>
        <p>Create personalized workout programs and meal
        plans tailored to your goals.</p>
      </div>
    </main>
  )
}

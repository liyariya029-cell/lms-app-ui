import { useState } from "react";
import toast from "react-hot-toast";
import Dashboard from "./Dashboard";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ---------- Signup ----------
  function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {
      if (!email || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      toast.success("Signup successful ✅ (Not redirecting — Login redirects)");
    };

    return (
      <div>
        <h2>Signup</h2>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button onClick={handleSignup}>Signup</button>
      </div>
    );
  }

  // ---------- Login ----------
  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
      if (!email || !password) {
        toast.error("Please fill all fields");
        return;
      }
      toast.success("Login successful ✅");
      setIsLoggedIn(true);
    };

    return (
      <div>
        <h2>Login</h2>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div>
          <input 
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // ---------- If Logged In → Show Dashboard ----------
  if (isLoggedIn) return <Dashboard onLogout={() => setIsLoggedIn(false)} />;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showLogin ? <Login /> : <Signup />}
      <button onClick={() => setShowLogin(!showLogin)}>
        Switch to {showLogin ? "Signup" : "Login"}
      </button>
    </div>
  );
}

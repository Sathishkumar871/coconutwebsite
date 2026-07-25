import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OwnerLogin.css";

export default function OwnerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Enter Email & Password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/owner/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "ownerToken",
          data.token
        );

        navigate("/owner/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="owner-login-page">
      <div className="owner-login-card">
        <h1>CocoFresh Owner</h1>

        <p>Secure Dashboard Login</p>

        <input
          type="email"
          placeholder="Owner Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Login"}
        </button>
      </div>
    </div>
  );
}
import "../styles/logout.css";
import { Link } from "react-router-dom";

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Logout() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      auth.signOut();
    }
  }, [user]);

  return (
    <div className="card" style={{ marginTop: "50px" }}>
      <h2>Logout</h2>
      <p>You have been logged out.</p>
      <button ><Link to="/">Go to homepage</Link></button>
    </div>
  );
}
export default Logout;

import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "47b726a9-0bc2-437c-b19b-0a593601775c" } }
      )
      .then((r) => router.push("/chats"));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit()}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

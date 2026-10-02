import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="app">
      <h1>testing form handling with JS</h1>
      <div className="main-container">
        <div className="login-form">
          <h1>login form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email :</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="password">password :</label>
            <input
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* submit-btn */}
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="display-data">output</div>
      </div>
    </div>
  );
};

export default App;

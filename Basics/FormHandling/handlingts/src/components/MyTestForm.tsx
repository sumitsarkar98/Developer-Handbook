import React, { useState } from "react";
import type { UserData } from "../types/types";

const MyTestForm: React.FC = () => {
  const initialFormData: UserData = {
    email: "",
    password: "",
    age: 0,
  };

  const [formData, setFormData] = useState<UserData>(initialFormData);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>form handling</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Submit */}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <h1>display data</h1>
      <p>Email : {formData.email}</p>
      <p>Password : {formData.password}</p>
      <p>Age : {formData.age}</p>
      <h1>hello</h1>
    </div>
  );
};

export default MyTestForm;

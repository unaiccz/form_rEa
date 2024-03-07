import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    user: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="user"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="*****"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Nav1 from "../Nav1/Nav1";
import Title from "./../Title/Title";

export default function Contact2() {
  document.title = "Contact";

  const [inputStates, setInputStates] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="w-50 m-auto vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <Title title="contact" color="black" className="text-center col-12" />

            <form>
              <div className="form-group py-2">
                <label
                  htmlFor="name"
                  className={`label21 ${inputStates.name ? "visible" : "invisible"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={inputStates.name}
                  onChange={handleInputChange}
                  placeholder="Username"
                />
              </div>

              <div className="form-group py-2">
                <label
                  htmlFor="phone"
                  className={`label21 ${inputStates.phone ? "visible" : "invisible"}`}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={inputStates.phone}
                  onChange={handleInputChange}
                  placeholder="User number"
                />
              </div>

              <div className="form-group py-2">
                <label
                  htmlFor="email"
                  className={`label21 ${inputStates.email ? "visible" : "invisible"}`}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={inputStates.email}
                  onChange={handleInputChange}
                  placeholder="User email"
                />
              </div>

              <div className="form-group py-2">
                <label
                  htmlFor="password"
                  className={`label21 ${inputStates.password ? "visible" : "invisible"}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={inputStates.password}
                  onChange={handleInputChange}
                  placeholder="User password"
                />
              </div>

              <button type="submit" className="btn btn-success m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

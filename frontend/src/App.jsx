import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/userlist")
  //     .then((res) => res.json())
  //     .then(setUser);

  //   axios
  //     .get("http://localhost:3000/userlist")
  //     .then((res) => res.data)
  //     .then(setUser);

  //   axios
  //     .post("http://localhost:3000/createuser", {
  //       name: name,
  //       email: email,
  //       number: number,
  //     })
  //     .then((res) => console.log(res));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userlist")
      .then((res) => setUser(res.data));
  }, []);

  const handleUser = () => {
    axios
      .post("http://localhost:3000/createuser", {
        name,
        email,
        number,
      })
      .then((res) => {
        setUser(res.data);
        setName("");
        setEmail("");
        setNumber("");
      });
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="py-11 flex  justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl  px-5">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Create User
            </h2>

            <div className="space-y-5">
              <input
                onChange={handleInputName}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                onChange={handleInputEmail}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                onChange={handleInputNumber}
                placeholder="Enter your number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleUser}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Create User
              </button>
            </div>
          </div>
        </div>

        <div className="m-10">
          <h2 className="text-2xl font-bold ">User List :</h2>
          {user.map((item) => (
            <ul className="px-5 py-1 border-2 border-gray-800 my-5 w-[250px]">
              <li>{item.name}</li>
              <li>{item.number}</li>
              <li>{item.email}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

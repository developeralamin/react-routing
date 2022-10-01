import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  //   const { userId } = useParams();
  const [searchParam, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSUbmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
    // setSearchParams({ age: age });
  };

  return (
    <div>
      User
      <form onSubmit={handleSUbmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button>Find a User</button>
      </form>
      {/*    <h1>{searchParam.get("id")}</h1>
      <h1>{searchParam.get("age")}</h1>
      <h1>{searchParam.get("name")}</h1> */}
    </div>
  );
};

export default User;

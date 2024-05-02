import React, { ChangeEvent, useState } from "react";
import { Author } from "../../Types/types";
export default function AddAuthor() {
  const [newAuthor, setNewAuthor] = useState<Author>({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewAuthor({ ...newAuthor, [name]: value });
  };
  return (
    <div>
      <h4>Add Authors</h4>
      <input
        type="text"
        placeholder="Author Id"
        name="id"
        value={newAuthor.id}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        value={newAuthor.firstname}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        value={newAuthor.lastname}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={newAuthor.phone}
        onChange={handleInput}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={newAuthor.email}
        onChange={handleInput}
      />

      <input
        type="email"
        placeholder="Address"
        name="address"
        value={newAuthor.address}
        onChange={handleInput}
      />
    </div>
  );
}

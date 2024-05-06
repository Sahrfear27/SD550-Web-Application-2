import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Author } from "../../Types/type";
import { useNavigate } from "react-router-dom";
import libraryServices from "../../Apis/Services/library.services";
import GlobalContex from "../../Contex/Contex";
import { nanoid } from "nanoid";
export default function AddAuthor() {
  const { author, setAuthor } = useContext(GlobalContex);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<Author>({
    id: nanoid(),
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleAddAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (
        !(
          inputValue.id == "" ||
          inputValue.lastname == "" ||
          inputValue.lastname == "" ||
          inputValue.phone == "" ||
          inputValue.email == "" ||
          inputValue.address == ""
        )
      ) {
        const response = await libraryServices.addNewAuthor(inputValue);
        if (response.status == 201) {
          setAuthor([...author, response.data]);
          setInputValue({
            id: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            address: "",
          });
        }
        navigate("/author");
      } else {
        alert("Please Enter Input value");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4>Add New Author</h4>
      <div className="text-center">
        <input
          type="text"
          placeholder="Enter Id"
          name="id"
          value={inputValue.id}
          onChange={handleAddAuthor}
          disabled
        />
        <br />
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={inputValue.firstname}
          onChange={handleAddAuthor}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={inputValue.lastname}
          onChange={handleAddAuthor}
        />
        <br />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          value={inputValue.phone}
          onChange={handleAddAuthor}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputValue.email}
          onChange={handleAddAuthor}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={inputValue.address}
          onChange={handleAddAuthor}
        />

        <br />
        <br />
        <button onClick={handleAdd} className="btn btn-success btn-sm">
          Add
        </button>
      </div>
    </div>
  );
}

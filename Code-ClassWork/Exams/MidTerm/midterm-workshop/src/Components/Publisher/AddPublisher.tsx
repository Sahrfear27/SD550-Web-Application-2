import { ChangeEvent, MouseEvent, useState } from "react";
import { Publiser } from "../../Types/type";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import libraryServices from "../../Apis/Services/library.services";
export default function AddPublisher() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<Publiser>({
    id: nanoid(),
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleAddPublisher = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (
        !(
          inputValue.name == "" ||
          inputValue.phone == "" ||
          inputValue.email == "" ||
          inputValue.address == ""
        )
      ) {
        const response = await libraryServices.newPublisher(inputValue);
        console.log(response.data);
        if (response.status == 201) {
          navigate("/publisher");
        }
      } else {
        alert("Please Enter Input");
      }
    } catch (error) {}
  };
  return (
    <div className="text-center">
      <h4>Add a Publisher</h4>
      {/* <input
        type="text"
        placeholder="Publisher Id"
        name="id"
        value={inputValue.id}
        onChange={handleAddPublisher}
        disabled
      /> */}
      <br />
      <input
        type="text"
        placeholder="Publisher Name"
        name="name"
        value={inputValue.name}
        onChange={handleAddPublisher}
      />
      <br />
      <input
        type="text"
        placeholder="Publisher Phone"
        name="phone"
        value={inputValue.phone}
        onChange={handleAddPublisher}
      />
      <br />
      <input
        type="email"
        placeholder="Publisher Email"
        name="email"
        value={inputValue.email}
        onChange={handleAddPublisher}
      />
      <br />
      <input
        type="text"
        placeholder=" Address"
        name="address"
        value={inputValue.address}
        onChange={handleAddPublisher}
      />

      <br />
      <br />
      <button onClick={handleAdd} className="btn btn-success btn-sm">
        Add
      </button>
    </div>
  );
}

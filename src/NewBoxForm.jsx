import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color</label>
        <input
        type="text"
        name="color"
        placeholder="Box Color"
        value={formData.color}
        onChange={handleChange}
        />

        <label htmlFor="width">Width</label>
        <input
        type="number"
        name="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
        />

        <label htmlFor="height">Height</label>
        <input
        type="number"
        name="height"
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
        />

        <button>Add Box</button>
      </form>
  );
};

export default NewBoxForm;
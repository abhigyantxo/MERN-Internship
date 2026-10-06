import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      return;
    }

    setSubmittedName(name);
    setName("");
  }

  return (
    <div className="form-container">

      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>

      {submittedName && (
        <p>
          Hello, {submittedName}! Your form was submitted successfully.
        </p>
      )}

    </div>
  );
}

export default Form;
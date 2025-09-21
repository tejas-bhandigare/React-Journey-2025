import { useState } from "react";


export default function SimpleForm() {
    // 1. state variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // 2. HANDLING FORM SUBMISSION
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted ! \nName : ${name} \nEmail : ${email}`);

        // 3.clearing the fields after submit

        setName("");
        setEmail("");

    };
    return (
        <form onSubmit={handleSubmit} className="card">
            <h2> Simple form </h2>

            { /* Name input */}

            <input
                type="text"
                placeholder="Enter the Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            { /* Email input */}

            <input
                type="email"
                placeholder="Enter the Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br/>

            <button className="btn" type="submit">Submit</button>


        </form>
    );
}

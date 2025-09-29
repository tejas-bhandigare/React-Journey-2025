import { useState } from "react";

export default function Checkout() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <h2>✅ Payment Successful! 🎉</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Card/UPI" required />
      <button type="submit">Pay Now</button>
    </form>
  );
}

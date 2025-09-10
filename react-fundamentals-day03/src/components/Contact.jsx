import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Thanks — message logged to console.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" type="email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

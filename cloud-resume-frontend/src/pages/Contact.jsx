import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvrvpkv"; 

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="section">
      <div className="container contact-shell">
        <div className="contact-copy">
          <h1 className="section-title">Get in Touch</h1>
          <p className="lead">
            Want to talk about cloud, automation, or a new project idea? Fill out the
            form and your message will be emailed straight to me.
          </p>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here…"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn primary full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="status success">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="status error">
              Something went wrong. Please try again in a bit.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

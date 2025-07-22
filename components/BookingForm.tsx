"use client";
import { useState } from "react";

type Props = {
  userId?: string;      // Optional: prefill from session (add later)
  pathwayId?: string;   // Optional: link to chosen pathway (add later)
};
export default function BookingForm(props: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle"|"pending"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("pending");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-50 rounded shadow max-w-md mx-auto space-y-4">
      <h3 className="text-xl font-semibold">Book a Counseling Session</h3>
      <div>
        <label className="block mb-1">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required className="border p-2 w-full rounded" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="border p-2 w-full rounded" />
      </div>
      <div>
        <label className="block mb-1">Preferred Date & Time</label>
        <input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} required className="border p-2 w-full rounded" />
      </div>
      <button type="submit" className="btn btn--primary w-full" disabled={status==="pending"}>
        {status==="pending" ? "Booking..." : "Book Session"}
      </button>
      {status==="success" && <div className="text-green-600 pt-2">Booking successful!</div>}
      {status==="error" && <div className="text-red-600 pt-2">Booking failed. Try again.</div>}
    </form>
  );
}


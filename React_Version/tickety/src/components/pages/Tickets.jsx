import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Protect route: redirect if not logged in
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      alert("Unauthorized access — please log in.");
      navigate("/auth/login");
    } else {
      const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      setTickets(storedTickets);
    }
  }, [navigate]);

  // Save tickets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or update a ticket
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.title || !form.status) {
      alert("Title and status are required.");
      return;
    }

    if (!["open", "in_progress", "closed"].includes(form.status)) {
      alert("Status must be 'open', 'in_progress', or 'closed'.");
      return;
    }

    if (editIndex !== null) {
      // Update ticket
      const updated = [...tickets];
      updated[editIndex] = form;
      setTickets(updated);
      setEditIndex(null);
    } else {
      // Create new ticket
      setTickets([...tickets, form]);
    }

    setForm({ title: "", description: "", status: "open" });
  };

  // Edit a ticket
  const handleEdit = (index) => {
    setForm(tickets[index]);
    setEditIndex(index);
  };

  // Delete a ticket
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Ticket Management</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Dashboard
        </button>
      </header>

      {/* Ticket Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8 space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Ticket Title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Description (optional)"
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {editIndex !== null ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>

      {/* Ticket List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets available.</p>
        ) : (
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 relative border-l-4"
              style={{
                borderColor:
                  ticket.status === "open"
                    ? "#16a34a" // green
                    : ticket.status === "in_progress"
                    ? "#f59e0b" // amber
                    : "#6b7280", // gray
              }}
            >
              <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>
              <p className="text-gray-600 mb-3">{ticket.description}</p>
              <span
                className={`px-3 py-1 rounded text-sm text-white ${
                  ticket.status === "open"
                    ? "bg-green-500"
                    : ticket.status === "in_progress"
                    ? "bg-amber-500"
                    : "bg-gray-500"
                }`}
              >
                {ticket.status}
              </span>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tickets;

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // Protect route: check if user is logged in
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      alert("Your session has expired — please log in again.");
      navigate("/auth/login");
    }
  }, [navigate]);

  // Dummy stats for now — we’ll connect to real ticket data later
  const stats = {
    total: 5,
    open: 2,
    resolved: 3,
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow text-center">
          <h3 className="text-gray-600">Total Tickets</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow text-center">
          <h3 className="text-gray-600">Open Tickets</h3>
          <p className="text-2xl font-bold text-green-600">{stats.open}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow text-center">
          <h3 className="text-gray-600">Resolved Tickets</h3>
          <p className="text-2xl font-bold text-gray-600">{stats.resolved}</p>
        </div>
      </section>

      <div className="text-center">
        <Link
          to="/Tickets"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Go to Ticket Management
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

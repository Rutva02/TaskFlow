
export default function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="dashboard-card">
      <div>
        <p className="card-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div
        className="card-icon"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {icon}
      </div>
    </div>
  );
}

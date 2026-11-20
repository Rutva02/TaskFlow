
export default function ProfileCard({ name, email, role }) {
  return (
    <div className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {name.charAt(0).toUpperCase()}
      </div>

      <h2>{name}</h2>
      <p>{email}</p>

      <span className="profile-role">{role}</span>
    </div>
  );
}

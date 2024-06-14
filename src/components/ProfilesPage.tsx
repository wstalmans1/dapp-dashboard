import '../styles/main.css';
import { Link } from "react-router-dom";

export default function ProfilesPage() {

  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="w-screen h-screen bg-slate-600 text-white">
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </Link>
      ))}
    </div>
  );
}
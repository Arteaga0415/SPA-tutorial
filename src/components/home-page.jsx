import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-row gap-5">
        <button onClick={() => navigate("/users")}>Ir a users</button>
        <button onClick={() => navigate("/profile/123")}>Ver perfil 123</button>
        <button onClick={() => navigate("/users/slice", { replace: true })}>
          Ir a usersSlice (replace)
        </button>
      </div>
    </div>
  );
}

import LoginPage from "../pages/LoginPage";

export default function ProtectedRoute({ children }) {
    const user = localStorage.getItem("user");

    return user ? children : <LoginPage />
}
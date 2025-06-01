import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="*" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/summarize"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

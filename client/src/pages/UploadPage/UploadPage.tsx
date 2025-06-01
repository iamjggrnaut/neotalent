import { Link } from "react-router-dom";
import PDFUploader from "../../components/PDFUploader";
import "./upload-page.style.css";
import { useContext } from "react";
import AppContext from "../../service/context/AppContext";

const UploadPage = () => {
  const { logout } = useContext(AppContext);

  return (
    <div className="upload-page-wrapper">
      <div className="place-right">
        <Link to={"#"} onClick={logout}>
          Logout
        </Link>
      </div>
      <div className="upload-page">
        <PDFUploader />
      </div>
    </div>
  );
};

export default UploadPage;

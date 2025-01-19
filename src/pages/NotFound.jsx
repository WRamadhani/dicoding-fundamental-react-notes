import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not__found">
      <h2>Note tidak ditemukan</h2>
      <Link to={"/"} className="not__found--link">
        Kembali ke halaman awal
      </Link>
    </div>
  );
}

export default NotFound;

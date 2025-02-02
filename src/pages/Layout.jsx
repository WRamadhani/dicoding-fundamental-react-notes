import { useState, useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import LocaleContext from "../context/LocaleContext";
import MessageContext from "../context/MessageContext";
import { getAccessToken, putAccessToken } from "../utils/api";

import Navigation from "../components/Navigation";
import NoteApp from "./NoteApp";
import AddNote from "./AddNote";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import NoteDetail from "./NoteDetail";
import useTimeout from "../hooks/useTimeout";

function Layout() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");
  const [message, setMessage] = useState({ status: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);
  // const [formInput, setFormInput] = useState({});
  const [token, setToken] = useState(getAccessToken() || null);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    setToken(() => {
      localStorage.removeItem("accessToken");
      return null;
    });
    navigate("/");
  };
  console.log(message);
  console.log(showMessage);

  const onLoginHandler = (accessToken) => {
    console.log(accessToken);
    putAccessToken(accessToken);
    setToken(accessToken);
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const toggleShowMessage = () => {
    setShowMessage((prevShowMessage) => {
      return !prevShowMessage;
    });
  };

  const setDisplayMessage = (message) => {
    setMessage(() => {
      return { status: message.status, message: message.message };
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const messageContextValue = useMemo(() => {
    return {
      message,
      setDisplayMessage,
      showMessage,
      toggleShowMessage,
    };
  }, [message, showMessage]);

  useTimeout(() => {
    setShowMessage(false);
  }, 4000);

  if (!token) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <Navigation token={token} onLogout={onLogoutHandler} />
        <MessageContext.Provider value={messageContextValue}>
          <main>
            <Routes>
              <Route
                path="/register"
                element={<Register onSuccess={onLoginHandler} />}
              />
              <Route path="/" element={<Login onSuccess={onLoginHandler} />} />
              <Route
                path="*"
                element={<NotFound message={"Page Not Found"} />}
              />
            </Routes>
          </main>
        </MessageContext.Provider>
        <footer></footer>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <Navigation token={token} onLogout={onLogoutHandler} />
      <MessageContext.Provider value={messageContextValue}>
        <main>
          <Routes>
            <Route path="/" element={<NoteApp />} />
            <Route path="/archive" element={<NoteApp isArchived={true} />} />
            <Route path="/notes/create" element={<AddNote />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
            <Route path="*" element={<NotFound message={"Page Not Found"} />} />
          </Routes>
        </main>
      </MessageContext.Provider>
      <footer>
        <p>Dicoding - Belajar Fundamental Aplikasi Web dengan React</p>
        <p>Membangun Single Page Application menggunakan React</p>
        <div>
          <p>
            <a
              href="https://github.com/WRamadhani/dicoding-fundamental-react-notes"
              target="_blank"
            >
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/wahyu-ramadhani"
              target="_blank"
            >
              Wahyu Ramadhani
            </a>
          </p>
        </div>
      </footer>
    </LocaleContext.Provider>
  );
}

export default Layout;

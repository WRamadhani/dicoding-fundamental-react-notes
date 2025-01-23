import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import LocaleContext from "../context/LocaleContext";
import MessageContext from "../context/MessageContext";

import Navigation from "../components/Navigation";
import NoteApp from "./NoteApp";
import AddNote from "./AddNote";
import Register from "./Register";

function Layout() {
  const [locale, setLocale] = useState("en");
  const [message, setMessage] = useState({ status: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
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

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <Navigation />
      <MessageContext.Provider value={messageContextValue}>
        <main>
          <Routes>
            <Route path="/" element={<NoteApp />} />
            <Route path="/arsip" element={<NoteApp isArchived={true} />} />
            <Route path="/notes/create" element={<AddNote />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </MessageContext.Provider>
      <footer></footer>
    </LocaleContext.Provider>
  );
}

export default Layout;

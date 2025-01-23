import { useContext } from "react";
import __Text from "../utils/enTranslation";
import LocaleContext from "../context/LocaleContext";

function Message({ status, message, onClick }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className={"message " + status} onClick={onClick}>
      <p>Pesan : {__Text(locale, message)}</p>
    </div>
  );
}

export default Message;

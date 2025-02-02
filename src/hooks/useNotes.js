import React from "react";
import { getActiveNotes, getArchivedNotes } from "../utils/api";

function useNotes() {
    const [loading, setLoading] = React.useState(true);
    const [notes, setNotes] = React.useState([]);
   
    React.useEffect(() => {
      getActiveNotes().then(({data}) => {
        setNotes(data);
        setLoading(false);
      });

      getArchivedNotes().then(({data}) => {
        setNotes((prevNotes) => [...prevNotes, ...data]);
        setLoading(false);
      });
   
      return () => {
        setLoading(true);
      };
    }, []);
    return [notes, loading];
}
 
export default useNotes;
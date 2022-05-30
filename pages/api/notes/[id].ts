import nc from "next-connect";
// handle server error middleware
import onError from "../../../middlewares/errors";
// import the notes controller for postingNotes and fetching all notes
import { updateNote, deleteNote, getNote } from "../../../controllers/NotesController";

const handler = nc({ onError });

// get a single note
handler.get(getNote);
// update a single note
handler.put(updateNote);
// delete a single note
handler.delete(deleteNote);

export default handler;

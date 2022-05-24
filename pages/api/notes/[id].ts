import nc from "next-connect";
import { updateNote, deleteNote, getNote } from "../../../controllers/NotesController";

import onError from "../../../middlewares/errors";
const handler = nc({ onError });

handler.get(getNote);
handler.put(updateNote);
handler.delete(deleteNote);

export default handler;

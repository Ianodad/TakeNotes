import nc from "next-connect";
import { updateNote, deleteNote } from "../../../controllers/NotesController";

import onError from "../../../middlewares/errors";
const handler = nc({ onError });

handler.put(updateNote);
handler.delete(deleteNote);

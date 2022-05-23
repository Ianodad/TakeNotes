// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import onError from "../../../middlewares/errors";
import { postNote, getAllNotes } from "../../../controllers/NotesController";

const handler = nc({ onError });

handler.get(getAllNotes);
handler.post(postNote);

export default handler;

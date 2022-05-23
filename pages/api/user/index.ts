import nc from "next-connect";
import onError from "../../../middlewares/errors";
const handler = nc({ onError });

handler.get();
handler.post();
handler.put();
handler.delete();

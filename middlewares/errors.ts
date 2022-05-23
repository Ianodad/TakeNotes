import { NextApiRequest, NextApiResponse } from "next";

export default async function onError(
  error: Error,
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void,
) {
  res.status(500).end(error.toString());
  next();
}

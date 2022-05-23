/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (func: any) => (req: NextApiRequest, res: NextApiResponse, next: () => void) =>
  Promise.resolve(func(req, res, next)).catch(next);

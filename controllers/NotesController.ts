import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";

const getAllNotes = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const notes = await prisma.note.findMany();
  res.status(200).json({
    status: "success",
    data: {
      notes,
    },
  });
});

const postNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, author, authorId } = req.body;

  await prisma.note.create({
    data: {
      title,
      content,
    },
  });
});

const deleteNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  console.log(id);
  await prisma.note.delete({
    where: {
      id,
    },
  });

  res.status(200).json({
    status: "success",
    data: null,
  });
});

const updateNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { title, content, author, authorId } = req.body;

  await prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
});

export { getAllNotes, postNote, deleteNote, updateNote };
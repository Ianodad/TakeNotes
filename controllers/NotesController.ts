import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma";

interface stickyNoteProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  published: boolean;
  updatedAt: Date;
}
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
  const { id } = req.query;
  await prisma.note.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    status: "success",
    data: null,
  });
});

const getNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const note = await prisma.note.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      note,
    },
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
  res.status(200).json({
    status: "success",
    data: {
      status: "success",
    },
  });
});

export { getAllNotes, postNote, deleteNote, updateNote, getNote };

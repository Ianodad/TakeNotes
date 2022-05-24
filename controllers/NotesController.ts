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
  const { id } = req.query;
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

const getNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const note = await prisma.note.findUnique({
    where: {
      id,
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

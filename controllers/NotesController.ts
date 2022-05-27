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
  const { title, content, color } = req.body;

  const note = await prisma.note.create({
    data: {
      title,
      content,
      color,
    },
  });
  res.status(200).json({
    status: "success",
    data: note,
  });
});

const deleteNote = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await prisma.note.delete({
    where: {
      id: id.toString(),
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
      id: id.toString(),
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
  const { title, content, color } = req.body;

  await prisma.note.update({
    where: {
      id: id.toString(),
    },
    data: {
      title,
      content,
      color,
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

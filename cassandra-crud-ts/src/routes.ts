import express from "express";
import { createUser, getUsers, updateUser, deleteUser } from "./userController";

const router = express.Router();

router.get("/users", async (req, res) => res.json(await getUsers()));

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  res.json(await createUser(name, email));
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json(await updateUser(id, name, email));
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});

export default router;

import express from 'express';
import { createContact, getAllContacts, deleteContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.get("/", getAllContacts);
router.get("/delete-contact", deleteContact);
router.post("/create-contact", createContact);


export default router;
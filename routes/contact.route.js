import express from 'express';
import { createContact, getAllContacts, deleteContact } from '../controllers/contact.controller.js';
import { validateFields } from '../middlewares/validations.middleware.js';

const router = express.Router();

router.get("/", getAllContacts);
router.get("/delete-contact", deleteContact);
router.post("/create-contact", validateFields, createContact);


export default router;
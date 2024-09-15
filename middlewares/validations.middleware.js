import Contact from "../models/contact.model.js";

const nameRegex = /^[A-Za-z]+([ \-][A-Za-z]+)*$/;
const phoneRegex = /^\d{10}$/;

export const validateFields = async (req, res, next) => {
  const { name, phone } = req.body;
  let errors = [];
  if(!name || !name?.trim()) {
    errors.push('Name is required');
  }
  if(!phone || !phone?.trim()) {
    errors.push('Phone No. is required');
  }
  if(!nameRegex.test(name)) {
    errors.push('Name is not valid');
  }
  if(!phoneRegex.test(phone)) {
    errors.push('Phone No. is not valid');
  }
  if(errors?.length) {
    const contacts = await Contact.find({});
    return res.redirect('contact', { 
      errorMsg: errors[0],
      title: "Contacts List",
      contact_list: contacts,
    })
  }
  next();
};
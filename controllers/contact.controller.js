import Contact from '../models/contact.model.js'

export const getAllContacts = (req, res) => {
  Contact.find({}, function (err, contact) {
    if (err) {
      console.log("error in fechting contact from database", err);
      return;
    }

    return res.render("home", {
      title: "Contacts List",
      contact_list: contact,
    });
  });
};

export const createContact = (req, res) => {
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log("error in creating contact", err);
        return;
      }

      console.log("*********", newContact);

      return res.redirect("back");
    }
  );
};

export const deleteContact = (req, res) => {
  let id = req.query.id;
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting Object from database", err);
      return;
    }

    return res.redirect("back");
  });
}
const express = require("express");
const path = require("path");
const port = 5000;

const db = require("./config/mongoose.js");

const Contact = require("./modals/contact.js");

const app = express();

// var contactsList = [
//   {
//     name: "Aman Kumar",
//     phone: "2927474743",
//   },
//   {
//     name: "Ajit Kumar",
//     phone: "0123456797",
//   },
//   {
//     name: "Murli Kumar",
//     phone: "9876543210",
//   },
//   {
//     name: "Apala Kumari",
//     phone: "0467594726",
//   },
// ];

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.use(express.static("assets"));

app.get("/", function (req, res) {
  Contact.find({}, function (err, contact) {
    if (err) {
      console.log("Error in fechting contact from database", err);
      return;
    }

    return res.render("home", {
      title: "Contacts List",
      contact_list: contact,
    });
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "My Playground" });
});

app.post("/create-contact", function (req, res) {
  // ContactsList.push({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });

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
});

app.get("/delete-contact", function (req, res) {
  // let phone = req.query.phone;
  // let contactIndex = contactsList.findIndex(
  //   (contact) => contact.phone == phone
  // );
  // if (contactIndex != -1) {
  //   contactsList.splice(contactIndex, 1);
  // }
  // return res.redirect("back");

  let id = req.query.id;
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting Object from database", err);
      return;
    }

    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server !", err);
  }

  console.log("Yess!! My Express server is running on Port:", port);
});

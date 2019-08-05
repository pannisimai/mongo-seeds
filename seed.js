const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/seed-test", {
  useNewUrlParser: true
});

const User = mongoose.model("User", {
  name: String,
  username: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);
console.dir(User);
// const user1 = new User({
//   name: "panni simai",
//   username: "pannis",
//   email: "wow@wowpanni.com"
// });

// const user2 = new User({
//   name: "oliver weber",
//   username: "oliverw",
//   email: "wow@wow.com"
// });

// user1.save().then(() => console.log("meow"));
// user2.save().then(() => console.log("bark"));

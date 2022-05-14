const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://into:1234@cluster0.7eunh.mongodb.net/furnitureStore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("все красиво работает");
});

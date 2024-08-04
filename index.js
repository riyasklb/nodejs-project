import mongoose from 'mongoose';
import app from './server.cjs';
// import { getPost } from "./postController.js";  // Ensure this is uncommented if needed and that postController.js is an ES module
// console.log(getPost());

// import { celciusToFahrnheit } from './utils.js';  // Ensure this is uncommented if needed and that utils.js is an ES module
// console.log(`Celsius to Fahrenheit: ${celciusToFahrnheit(0)}`);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://riyas:56146925@domainapi.qpyufrb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=domainAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Node API is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

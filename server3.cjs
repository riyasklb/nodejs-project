// const PORT = process.env.PORT || 3000;
// const express = require('express');
// const mongoose = require('mongoose');
// const Product = require('./model/prodectModel.cjs'); // Use the renamed file

// const app = express();
// app.use(express.json());




// //update product
// app.put('/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             return res.status(404).json({ message: `cannot find any product${id}` })

//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });





// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });

// app.get('/product', async (req, res) => {
//     try {
//         const product = await Product.find({})
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });



// //delete product
// app.delete('/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!process) {
//             return req.status(404).json({ message: `cannot find any product${id}` })
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });


// app.get('/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productid = await Product.findById(id);
//         res.status(200).json(productid);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });

// app.post('/product', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
//     }
// });

// mongoose.connect('mongodb+srv://riyas:56146925@domainapi.qpyufrb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=domainAPI', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => {
//             console.log(`Node API is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

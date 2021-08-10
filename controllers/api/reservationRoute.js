const router = require ('express').Router();
const { reservation } = require('../../models')



// router.get('/myres', async(req,res) => {
//   try {
//       const CustomerData = await reservation.findAll();
//   }
//   catch (error) {
//     res.status(500).json(err);
//   }
// });
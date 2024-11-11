// const express = require('express'); 
// const { v4: uuidv4 } = require('uuid');
// const app = express();             
// const accounts = require('./accounts');
// app.use(express.json()); 
// const PORT = 8000; 


// //get all
// app.get('/accounts', (req, res) => {
//     res.status(200).json(accounts); 
//   });
  


// // post (create new acc)
// app.post('/accounts', (req, res) => {
//     const newAccount = {
//         id: uuidv4(),
//         username: req.body.username,
//         funds: 0, 
//     };
//     accounts.push(newAccount); 
//     res.status(201).json(newAccount); 
//   });
  


// // delet by id 
// app.delete('/accounts/:accountId', (req, res) => {
//     const accountId = req.params.accountId; 
//     const accountIndex = accounts.findIndex(account => account.id === accountId); 
  
//     if (accountIndex === -1) {
//       return res.status(404).json({ message: 'Account not found' });
//     }
  
//     accounts.splice(accountIndex, 1);
//       res.status(204).end();
//   });
  


//   // put : update by id 
// app.put('/accounts/:accountId', (req, res) => {
//     const accountId = req.params.accountId; 
//     const account = accounts.find(account => account.id === accountId); 
  
//     if (!account) {
//       return res.status(404).json({ message: 'Account not found' });
//     }
//     account.username = req.body.username || account.username; 
//     account.funds = req.body.funds !== undefined ? req.body.funds : account.funds; 
//     res.status(200).json(account);
//   });
  


//   // get single+currency
// app.get('/accounts/:username', (req, res) => {
//     const username = req.params.username.toLowerCase(); 
//     const account = accounts.find(acc => acc.username.toLowerCase() === username); 
  
//     if (!account) {
//       return res.status(404).json({ message: 'Account not found' });
//     }
     
//     //currency 
//     if (req.query.currency === 'usd') {
//       const usdFunds = account.funds * 3.28;
//       return res.status(200).json({ ...account, funds: usdFunds });
//     }
//       res.status(200).json(account);
//     });


// // startt the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
  
    
const express = require('express'); 
const app = express();
const PORT = 8002;

app.use(express.json());
const accountRoutes = require('./apis/accounts/routes');

app.use(accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

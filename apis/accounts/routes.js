const express = require('express');

const router = express.Router();
const {
  getAllAccounts,
  createAccount,
  deleteAccount, 
  updateAccount,
  getAccountByUsername
} = require('./controllers');

router.get('/accounts', getAllAccounts);
router.post('/accounts', createAccount);
router.delete('/accounts/:accountId', deleteAccount);
router.put('/accounts/:accountId', updateAccount);
router.get('/accounts/:username', getAccountByUsername);

module.exports = router;

const { v4: uuidv4 } = require('uuid');
const accounts = require('../../accounts');

exports.getAllAccounts = (req, res) => {
  res.status(200).json(accounts);
};

exports.createAccount = (req, res) => {
  const newAccount = {
    id: uuidv4(),
    username: req.body.username,
    funds: 0,
  };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

exports.deleteAccount = (req, res) => {
  const accountId = req.params.accountId;
  const accountIndex = accounts.findIndex(account => account.id === accountId);

  if (accountIndex === -1) {
    return res.status(404).json({ message: 'Account not found' });
  }

  accounts.splice(accountIndex, 1);
  res.status(204).end();
};

exports.updateAccount = (req, res) => {
  const accountId = req.params.accountId;
  const account = accounts.find(account => account.id === accountId);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  account.username = req.body.username || account.username;
  account.funds = req.body.funds !== undefined ? req.body.funds : account.funds;
  res.status(200).json(account);
};

exports.getAccountByUsername = (req, res) => {
  const username = req.params.username.toLowerCase();
  const account = accounts.find(acc => acc.username.toLowerCase() === username);

  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }

  if (req.query.currency === 'usd') {
    const usdFunds = account.funds * 3.28;
    return res.status(200).json({ ...account, funds: usdFunds });
  }

  res.status(200).json(account);
};

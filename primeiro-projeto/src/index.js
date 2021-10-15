const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Middleware para parse do body em json
app.use(express.json());

const custumers = [];

// API Middleware
const verifyIfExistsAccountCPF = (request, response, next) => {
   const { cpf } = request.headers;

   const customer = custumers.find((customer) => customer.cpf === cpf);

   if (!customer) {
      return response.status(400).json({ error: 'Customer not found' });
   }

   request.customer = customer;
   return next();
};

const getBalance = (statement) => {   
   const balance = statement.reduce((acc, operation) => {
      if (operation.type === 'credit') {
         return acc + operation.amount;
      } else {
         return acc - operation.amount;
      }
   }, 0);

   return balance;

};

app.post('/account', (request, response) => {
   const { cpf, name } = request.body;
   const customerAlreadyExists = custumers.some(c => c.cpf === cpf);

   if (customerAlreadyExists) {
      return response.status(400).json({ error: 'Customer already exists' });
   }

   custumers.push({
      cpf,
      name,
      id: uuidv4(),
      statement: []
   });

   return response.status(201).send();
});

app.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
   const customer = request.customer;
   if (!customer) {
      return response.status(404).json({ error: 'Customer not found' });
   }

   return response.status(200).json(customer.statement); 
});

app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
   const { description, amount } = request.body;

   const { customer } = request;

   const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: 'credit'
   };

   customer.statement.push(statementOperation);

   return response.status(201).send();
});

app.post('/withDraw', verifyIfExistsAccountCPF, (request, response) => {
   const { amount } = request.body;
   const { customer } = request;

   const balance = getBalance(customer.statement);

   if (balance < amount) {
      return response.status(400).json({error: 'Insufficient funds'});
   }

   const statementOperation = {
      amount,
      created_at: new Date(),
      type: 'debit'
   };

   customer.statement.push(statementOperation);
   return response.status(201).send();
});

app.get('/statement/date', verifyIfExistsAccountCPF, (request, response) => {
   const { customer } = request;
   const { date } = request.query;

   const dateFormat = new Date(date + ' 00:00');

   const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString());

   return response.json(statement);
});

app.put('/account', verifyIfExistsAccountCPF, (request, response) => {
   const { name } = request.body;
   const { customer } = request;

   customer.name = name;
   return response.status(200).send();
});

app.get('/account', verifyIfExistsAccountCPF, (request, response) => {
   const { customer } = request;
   return response.json(customer);
});

app.delete('/account', verifyIfExistsAccountCPF, (request, response) => {
   const { customer } = request;
   customers.splice(customer, 1);
   return response.send(200).json(customers);
});

app.listen(3333, () => {
   console.log('BACKEND running in the port 3333');
});
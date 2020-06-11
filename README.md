# Frontend Code Test

Hey :wave:, thanks for taking the time to do our technical test!

## Task

Your goal is to build a product called Application Form. This product will dynamically generate a form based on data received from an API using React and GraphQL. Use GraphQL as a proxy between the frontend and the REST APIs.

There are three banks requesting an Application Form:

- Bank of Azeroth
- Naboo Bank
- Middle Earth Bank

### Requirements

```
As a user
When I go to /:lender-name
I want to see the form for the lender
So that I can apply for a bank loan
```

```
As a user
When I submit the form
I want to know if I was accepted or declined
```

### REST APIs

```jsonc
// GET /api/lenders/:lender-name
{
  "name": "Bank of Azeroth",
  "fields": [
    "firstName",
    "lastName",
    "gender",
    "email",
    "phoneNumber",
    "monthlyIncome"
  ]
}

// POST /api/lenders/:lender-name
{
  "firstName": "Ann",
  "lastName": "Heselden",
  "gender": "female",
  "email": "ann.heselden@divido.com",
  "phoneNumber": "+447473468883",
  "monthlyIncome": 50000
}
```

## UX and Design

It’s entirely up to you how you would like to design the Application Form! Feel free to use 3rd party tools like `emotion` or `material-ui`.

## Testing

Feel free to add tests if you want, or present what tests you would add if you had more time.

## Running the project

```bash
yarn && yarn dev
```

import { FC } from 'react';

const IndexPage: FC = () => (
  <div
    style={{
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    <h1 id="frontend-code-test">Frontend Code Test</h1>
    <p>Hey 👋, thanks for taking the time to do our technical test!</p>
    <p>
      Checkout the project on{' '}
      <a href="https://github.com/dividohq/frontend-code-test">Github</a>.
    </p>

    <h2 id="task">Task</h2>
    <p>
      Your goal is to build a product called Application Form. This product will
      dynamically generate a form based on data received from an API using React
      and GraphQL. Use GraphQL as a proxy between the frontend and the REST
      APIs.
    </p>
    <p>There are three banks requesting an Application Form:</p>
    <ul>
      <li>Bank of Azeroth</li>
      <li>Naboo Bank</li>
      <li>Middle Earth Bank</li>
    </ul>

    <h3 id="requirements">Requirements</h3>
    <pre>
      <code>As a user</code>
      <br />
      <code>When I go to /:lender-name </code>
      <br />
      <code>I want to see the form for the lender</code>
      <br />
      <code>So that I can apply for a bank loan</code>
    </pre>
    <pre>
      <code>As a user </code>
      <br />
      <code>When I submit the form</code>
      <br />
      <code>I want to know if I was accepted or declined</code>
    </pre>

    <h3 id="rest-apis">REST APIs</h3>
    <pre>
      <code>
        {`
// GET /api/lenders/:lender-name
{
  "name": "Bank of Azeroth",
  "fields": [
    "first_name",
    "last_name",
    "gender",
    "email",
    "phone_number",
    "monthly_income"
  ]
}

// POST /api/lenders/:lender-name

// Request
{
  "first_name": "Ann",
  "last_name": "Heselden",
  "gender": "female",
  "email": "ann.heselden@divido.com",
  "phone_number": "+447473468883",
  "monthly_income": 50000
}

// Response
{
  "decision": "accepted",
}
        `}
      </code>
    </pre>

    <h2 id="uxanddesign">UX and Design</h2>
    <p>
      It’s entirely up to you how you would like to design the Application Form!
      Feel free to use 3rd party tools like <code>emotion</code> or{' '}
      <code>material-ui</code>.
    </p>

    <h2 id="testing">Testing</h2>
    <p>
      Feel free to add tests if you want, or present what tests you would add if
      you had more time.
    </p>

    <h2 id="getting-started">Running the project</h2>
    <pre>
      <code>yarn &amp;&amp; yarn dev</code>
    </pre>
  </div>
);

export default IndexPage;

import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse, LenderDecisionResponse } from '.';

export const bankOfAzerothData: LenderResponse = {
  name: 'Bank of Azeroth',
  fields: ['first_name', 'last_name', 'email', 'gender', 'monthly_income'],
};

const handler = (req: NextApiRequest, res: NextApiResponse<LenderResponse | LenderDecisionResponse>) => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.5 ? 'accepted' : 'declined';
    res.status(200).json({decision});
  } else {
    res.status(200).json(bankOfAzerothData);
  }
};

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse, LenderDecisionResponse } from '.';

export const nabooBankData: LenderResponse = {
  name: 'Naboo Bank',
  fields: ['first_name', 'last_name', 'gender', 'monthly_income', 'address'],
};

const handler = (req: NextApiRequest, res: NextApiResponse<LenderResponse | LenderDecisionResponse>) => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.5 ? 'accepted' : 'declined';
    res.status(200).json({decision});
  } else {
    res.status(200).json(nabooBankData);
  }
};

export default handler;

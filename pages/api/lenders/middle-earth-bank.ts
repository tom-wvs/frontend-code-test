import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse, LenderDecisionResponse } from '.';

export const middleEarthBankData: LenderResponse = {
  name: 'Middle Earth Bank',
  fields: ['first_name', 'email', 'date_of_birth', 'monthly_income'],
};

const handler = (req: NextApiRequest, res: NextApiResponse<LenderResponse | LenderDecisionResponse>) => {
  if (req.method === 'POST') {
    const decision = Math.random() > 0.5 ? 'accepted' : 'declined';
    res.status(200).json({decision});
  } else {
    res.status(200).json(middleEarthBankData);
  }
};

export default handler;

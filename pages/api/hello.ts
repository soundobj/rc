// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import loki from 'lokijs';

var db = new loki('sandbox.db');
var items = db.addCollection('items');
items.insert({ name : 'mjolnir', owner: 'thor', maker: 'dwarves' });

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, query, method, body } = req;
  console.log(`req: ${url} method: ${method} query:`, query);
  
  if ( method === 'get') {
    res.status(200).json(items.findOne({name: 'mjolnir'}))
    return
  }

  if (method === 'patch') {
    console.log('patching', body);
    return
  }
}

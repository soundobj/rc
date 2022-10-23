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
  
  if ( method === 'GET') {
    res.status(200).json(items.findOne({name: 'mjolnir'}))
    return
  }

  if (method === 'PATCH') {
    const nextBody = JSON.parse(body);
    const owner = nextBody.payload;
    console.log('patching owner', owner);
    const nextTest = items.findOne({ name: 'mjolnir'});
    nextTest.owner = owner;
    console.log('nextTest', nextTest);
    
    items.update(nextTest);
    res.status(200).json(items.findOne({name: 'mjolnir'}));
    return
  }
}

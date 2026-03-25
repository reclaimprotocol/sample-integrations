import { type NextRequest } from 'next/server'
import { verifyProof } from '@reclaimprotocol/js-sdk';

export async function POST(request: NextRequest) {
  const proofs = await request.json()
  console.log(proofs);
  const { isVerified, data } = await verifyProof(proofs, { providerId: 'example'});
  console.log("Is Verified" , isVerified);
  console.log("Extracted Data", data);
  return Response.json({ status: 'ok', message: 'Verification processed' })
}

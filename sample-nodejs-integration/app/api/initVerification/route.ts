import { type NextRequest } from 'next/server'
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { redirect, RedirectType } from 'next/navigation'

export async function GET(request: NextRequest) {
  const reclaimProofRequest = await ReclaimProofRequest.init(
    process.env.RECLAIMPROTOCOL_APP_ID!,
    process.env.RECLAIMPROTOCOL_APP_SECRET!,
    'ff4d7afe-4b78-4795-9429-d20df2deaad7'
  )
  reclaimProofRequest.setAppCallbackUrl("https://madhavanmalolan.ngrok.dev/api/processVerification", true);
  // true : sets contentType to JSON

  const address = "unique-user-id";
  const message = "some meta data for processing on callback";
  reclaimProofRequest.setContext(address, message);

  const proofRequestUrl = await reclaimProofRequest.getRequestUrl();

  console.log(proofRequestUrl);
  return redirect(proofRequestUrl);
}

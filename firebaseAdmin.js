import { initializeApp, cert } from 'firebase-admin/app'

import serviceAccount from '' assert { type: 'json' }; // TODO

const app = initializeApp({
  credential: cert(serviceAccount),
  apiKey: "", // TODO
  authDomain: "", // TODO
  databaseURL: "", // TODO
  projectId: "", // TODO
  storageBucket: "" // TODO
})

export default app

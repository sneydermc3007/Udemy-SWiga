import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors'




const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
    mensaje: "Hola mundo desde firebase !!"
  })
});

export const getGOTY = functions.https.onRequest(
       async (request, response) => {

    // const nombre = request.query.nombre || 'Sin nombre';

    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map(doc => doc.data())

    response.json( juegos )

});

// Express
const app = express();
app.use(cors({ origin: true }));

app.get('/goty', async (req, res) => {

    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map(doc => doc.data())

    res.json( juegos )
});

export const api = functions.https.onRequest(app);

app.post('/goty/:id', async(req, res) => {

    const id = req.params.id;
    const gameRef = db.collection('goty').doc(id)
    const gameSnap = await gameRef.get();

    if ( !gameSnap.exists ){
        res.status(404).json({
            ok: false,
            mensaje: 'No hay un juego con ese ID ' + id
        });

    } else {

        const antes = gameSnap.data() || { votos: 0 };
        await gameRef.update({
            votos: antes.votos + 1
        });

        res.json({
            ok: true,
            mensaje: `Gracias por tu voto a ${antes.name}`
        })
    }

    

})
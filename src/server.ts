import express from 'express'
import { routes } from './routes';
import cors from 'cors'

const app = express()

// app.use(cors({
//     origin: 'hhtps://localhost/xxxx'
// }));
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log('HTTP server running');
})
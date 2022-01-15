import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
const {
    PORT = 3100,
} = process.env;
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hell world',
    });
});
app.post('/p', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
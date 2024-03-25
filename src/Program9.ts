import { Express ,Request, Response, response } from "express"

const express = require('express');
const app = express();
const port = 3000;

app.get('/hi', function(req: Request, res: Response) {
    response.send('This is Juans server');
});

app.get('/greet', function(req: Request, res: Response) {
    const name = req.query.name || 'Guest'; 
    response.send(`Hey, ${name}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


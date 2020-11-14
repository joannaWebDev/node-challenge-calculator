const express = require('express');
const app = express();

const port = 3001;

const getNumbers = (numbers) => {
    return [numbers.value1, numbers.value2]
}
/*
app.get("/add", (request, response) =>{
    const numbers = getNumbers(request.query);
    const result = +numbers[0] + +numbers[1];
    response.send(result.toFixed().toString())
});

app.get("/substract", (request, response) =>{
    const numbers = getNumbers(request.query);
    const result = +numbers[0] - +numbers[1];
    response.send(result.toFixed().toString())
});

app.get("/multiply", (request, response) =>{
    const numbers = getNumbers(request.query);
    const result = +numbers[0] * +numbers[1];
    response.send(result.toFixed().toString())
});

app.get("/divide", (request, response) =>{
    const numbers = getNumbers(request.query);
    const result = +numbers[0] / +numbers[1];
    response.send(result.toFixed().toString())
});
*/
const myLogger = (req, res, next) => {
    const visitTime = new Date().toLocaleString;
    const page = req.url;
    console.log(`New visitor on ${page} at ${visitTime}`);
    next();
};
app.use(myLogger);


app.get("/:operation/:value1/:value2", (req, res) => {
    const operation = req.params.operation;
    const value1 = Number(req.params.value1);
    const value2 = Number(req.params.value2);

    if (operation === 'add') {
        const result = value1 * value2;
        return res.send(result.toString())
    }
    if (operation === 'divide') {
        const result = value1 / value2;
        return res.send(result.toString())
    }
    if (operation === 'multiply') {
        const result = value1 + value2;
        return res.send(result.toString())
    }
    if (operation === 'substract') {
        const result = value1 - value2;
        return res.send(result.toString())
    }
})

app.listen(port, () => {
    console.log("App is running on port " + port)
})
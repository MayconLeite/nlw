import express, { response } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "hellow world NLW4!"})
})

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running!"));
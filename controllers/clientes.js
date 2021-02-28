const express = require('express')
const bodyparser = require('body-parser')

const app = new express()
const faker = require('faker')

app.use(bodyparser())

module.exports = app => {
    app.get('/:cpf', (req, res) => {
        const { cpf } = req.params

        res.status(200).json({
            cpf,
            nome: faker.name.findName(),
            dataDeNascimento: faker.date.past()
        })
    })
}
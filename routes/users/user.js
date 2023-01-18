const { PrismaClient } = require('@prisma/client')
const { v1: uuidv1, v4: uuidv4 } = require('uuid')

uuidv1() // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
uuidv4() // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
const prisma = new PrismaClient()

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  const allUsers = await prisma.Users.findMany()

  res.json(allUsers)
})

router.get('/:id', async (req, res) => {
  const user = await prisma.Users.findUnique({
    where: {
      id: req.params.id,
    },
  })
  res.json(user)
})

router.post('/', async (req, res) => {
  const user = await prisma.Users.create({
    data: {
      id: uuidv4(),
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status,
      role: req.body.role,
      token: req.body.token,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  res.json(user)
})

//PUT with optionnal fields
router.put('/:id', async (req, res) => {
  const user = await prisma.Users.update({
    where: {
      id: req.params.id,
    },
    data: {
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status,
      role: req.body.role,
      token: req.body.token,
      updatedAt: new Date(),
    },
  })
  res.json(user)
})

router.delete('/:id', async (req, res) => {
  const user = await prisma.Users.delete({
    where: {
      id: req.params.id,
    },
  })
  res.json(user)
})

module.exports = router

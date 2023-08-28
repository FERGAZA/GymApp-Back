
const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

const jwt = require('jsonwebtoken')
const { verifyToken } = require("../Middleware/VerifyToken")


router.post("/signup", (req, res, next) => {

    const { email, password, firstName, lastName, icon } = req.body

    if (password.length < 1) {

        res.status(400).json({ message: 'Password should have more than one character' })

        return
    }

    User
        .findOne({ email })
        .then((founduser) => {

            if (founduser) {

                res.status(400).json({ message: 'User already exist' })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, passwrod: hashedPassword, firstName, lastName })
        })

        .then(() => res.sendStatus(201))
        .catch(err => next(err))

})


router.post("/login", (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {

        res.status(400).json({ message: 'email & password are mandatory' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {

                res.status(400).json({ message: 'User not found' })
                return
            }
            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, firstName } = req.body
                const payload = { _id, email, firstName }

                const authToken = just.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            }

            else {
                res.status(400).json({ message: 'Incorrect password' })
            }
        })

        .catch(err => next(err))

})

router.get("/verify", verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })

})

module.export = router

const bcrypt = require('bcryptjs')
const User = require("../models/User.model")

const saltRounds = 10

const jwt = require('jsonwebtoken')


const signUp = (req, res, next) => {

    const { email, password, firstname, lastname, icon } = req.body

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

            return User.create({ email, password: hashedPassword, firstname, lastname })
        })

        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}


const logIn = (req, res, next) => {
    const { email, password } = req.body

    if (email === '' || password === '') {

        res.status(400).json({ message: 'email & password are mandatory' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {

                res.status(401).json({ message: 'User not found' })
                return
            }
            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, firstname, lastname, icon, role } = foundUser
                const payload = { _id, email, firstname, lastname, icon, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )
                res.status(200).json({ authToken })
            }

            else {
                res.status(401).json({ message: 'Incorrect password' })
            }
        })

        .catch(err => next(err))

}

const verify = (req, res, next) => {
    const loggedUser = req.payload

    res.json({ loggedUser })

}

module.exports = {
    signUp,
    logIn,
    verify

}
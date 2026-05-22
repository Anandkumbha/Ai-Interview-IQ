import express from 'express';
const router = express.Router()

router.post("/signup", (req, res) => {
    console.log("api hitting from routes")
})

router.post("/login", (req, res) => {
    console.log("login")
})

export default router
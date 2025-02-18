const express = require('express');
const User = require("../models/User3");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const router = express.Router();

router.post("/signup", async (req , res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json({message: "User Created", user});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ id: user.id, name: user.name }, "RDTES", { expiresIn: "1h" });
  
      res.cookie("jwt", token, { httpOnly: true, secure: true, sameSite: "strict" });
      res.json({ message: "Login successful", token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });


  const authMiddleware = (req, res, next) => {
    console.log(req);
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    jwt.verify(token, "RDTES", (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = decoded;
      next();
    });
  };

  router.get("/dashboard", authMiddleware, (req, res) => {
    console.log(req.user);
    res.json({ message: `Welcome User ${req.user.name}` });
  });

module.exports = router;
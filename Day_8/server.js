// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Your Sequelize instance
const User = require('./models/User'); // User model
const Post = require('./models/Post'); // Post model
require('./models/association'); // Import associations

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// // Sync database (optional, if you want to ensure models are in sync)
// sequelize.sync();

// Routes
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/posts', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch all users with their posts
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            include: Post, // Eager loading
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Fetch all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching posts.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
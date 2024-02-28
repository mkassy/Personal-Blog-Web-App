import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let posts = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// GET route to render the homepage
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// GET route to render the create post form
app.get('/create-post', (req, res) => { 
    res.render('create-post.ejs');
});


// POST route to handle form submission for creating a new post
app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content };
    posts.push(newPost);
    // Redirect to the view post page after saving the new post
    res.redirect('/view-post/' + (posts.length - 1));
});


// GET route to render view post page
app.get('/view-post/:postId', (req, res) => {
    const postId = req.params.postId;
    const post = posts[postId];
    res.render('view-post.ejs', { posts, post }); 
});

// GET route to render the view-to-edit page
app.get('/view-to-edit/:postId', (req, res) => {
    const postId = req.params.postId;
    const post = posts[postId];
    res.render('view-to-edit.ejs', { posts, post });
});


// GET route to render the edit post form
app.get('/edit-post/:postId', (req, res) => {
    const postId = req.params.postId;
    const post = posts[postId];
    res.render('edit-post.ejs', { post, postId });
});

// POST route to handle post updates 
app.post('/edit-post/:postId', (req, res) => {
    const postId = req.params.postId;
    const { title, content } = req.body;
    posts[postId].title = title;
    posts[postId].content = content;
    res.redirect('/');
});


// POST route to handle post deletion 
app.post('/delete-post/:postId', (req, res) => {
    const postId = req.params.postId;
    posts.splice(postId, 1);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

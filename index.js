import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let posts = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// GET route to render the homepage
app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
});


// POST route to handle form submission for creating a new post
app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content };
    posts.push(newPost);
    res.redirect('/');
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


app.get('/view-post/:postId', (req, res) => {
    const postId = req.params.postId;
    const post = posts[postId];
    res.render('view-post.ejs', { post });
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

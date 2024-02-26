// function addPost(title, content) {
//     const postsContainer = document.getElementById('posts-container');
//     const postElement = document.createElement('div');
//     postElement.innerHTML = `
//       <h2>${title}</h2>
//       <p>${content}</p>
//       <button onclick="deletePost(this)">Delete Post</button>
//     `;
//     postsContainer.appendChild(postElement);
// }

// function deletePost(button) {
//     const postElement = button.parentNode;
//     postElement.parentNode.removeChild(postElement);
// }

// // Example usage
// document.getElementById('add-post-btn').addEventListener('click', function() {
//     const title = document.getElementById('post-title').value;
//     const content = document.getElementById('post-content').value;
//     addPost(title, content);
// });

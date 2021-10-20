const post = document.getElementById('postEntry');

post.addEventListener('submit', addPost)

function addPost (e) {
    e.preventDefault();
    const title = e.target.titlebox.value
    if(title){
        const name = e.target.authorbox.value
        const body = e.target.story.value
        const img = e.target.chosefile.value
        const content = { title: title, name: name, body: body, img: img}

        const methods = {
            method: 'POST',
            body: JSON.stringify(content),
            headers: { "Content-Type": "application/json"}
        };
    }
}
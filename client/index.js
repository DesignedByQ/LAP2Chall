const form = document.getElementById('formPost');

form.addEventListener('submit', addPost)

getAllPosts();

// function getAllPosts(){
//     fetch('http://localhost:3000/posts')
//     .then(r => r.json())
//     .then(appendAllPosts)
//     .catch(console.warn)
// }

async function getAllPosts(){
    try{
        let response = await fetch('http://localhost:3000/posts')
        let jsonData = await response.json()
        let postContainer = document.getElementById('postResults--container')
        for(let i=0; i<jsonData.length; i++){
            let card = document.createElement('div')
            card.classList.add('post')
            card.id = `card${i}`
            card.textContent = `${jsonData[i].title, jsonData[i].author, jsonData[i].body}`
            postContainer.append(card);
        }
    } catch(err) {
        console.log(err)
    }
}


function addPost (e) {
    e.preventDefault();
    const title = e.target.titlebox.value
    // const name = e.target.authorbox.value
    // const body = e.target.story.value
    // const img = e.target.chosefile.value
    const content = { 
        title: e.target.titlebox.value, 
        name: e.target.authorbox.value, 
        body: e.target.story.value, 
        img: e.target.chosefile
    }
    const methods = {
        method: 'POST',
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json"}
    };


    fetch('http:localhost:3000/posts', methods)
    .then(res => res.json())
    // .then(appendSinglePost)
    .then(() => e.target.reset())
    .catch(console.warn)
    
    console.log(content)
}

// document.querySelector('#titlebox').value = "";
//             document.querySelector('#authorbox').value = "";
//             document.querySelector('#story').value = "";
//             document.querySelector('#chosefile').value = null;
//             location.reload()

// function appendAllPosts(data) {
//     data.posts.forEach(appendSinglePost)
// }

// function appendSinglePost() {
//     let postContainer = document.getElementById('postResults--container')
//     let card = document.createElement('div')
//     card.classList.add('post')
//     card.id = 'card'
//     card.textContent = `${jsonData.body}`
//     postContainer.append(card);
// }








// addpost() 
// getPost()
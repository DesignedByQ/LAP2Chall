const form = document.getElementById('formPost');

form.addEventListener('submit', addPost)

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
    

        fetch('http:localhost:3000/posts', methods)
        .then(res => {
            res.json()
            document.querySelector('#titlebox').value = "";
            document.querySelector('#authorbox').value = "";
            document.querySelector('#story').value = "";
            document.querySelector('#chosefile').value = null;
            location.reload()
        })
    } else {alert("Please enter more characters")}    
}







// async function getPost(){
//     try{
//         let response = await fetch('http://localhost:3000/post')
//         let jsonData = await response.json()
//         let postContainer = document.getElementById('postResults--container')
//         for(let i=0; i<jsonData.length; i++){
//             let card = document.createElement('div')
//             card.classList.add('post')
//             card.id = `card${i}`
//             card.textContent = `${jsonData[i].body}`
//             postContainer.append(card);
//         }
//     } catch(err) {
//         console.log(err)
//     }
// }



// addpost() 
// getPost()
const db = connect('')

db.posts.drop()

db.posts.insert({title: "first post", name: "author name", body: "content", imgsrc: "", })
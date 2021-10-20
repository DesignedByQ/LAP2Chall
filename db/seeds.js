db = connect("localhost:27017/post")

db.posts.drop()

db.posts.insert({title: "first post", name: "author name", body: "content", imgsrc: ""})
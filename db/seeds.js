db = connect("localhost:27017/post")

db.posts.drop()

db.posts.insertMany([{title: "first post", name: "author name", body: "content", imgsrc: ""},
                    {title: "second post", name: "new author name", body: "new content", imgsrc: ""}])
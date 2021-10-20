const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')
// const db = require('')

class Post {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.title = data.title
        this.body = data.body
        this.imgsrc = data.imgsrc
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const postData = await db.collection('posts').find().toArray()
                const posts = postData.map(post => new Post({...post, id: post._id}))
                resolve(posts);
            } catch (err) {
                console.log(err);
                reject("could not retreive posts")
            }
        })
    }

    // static findById
}

module.exports = Post;
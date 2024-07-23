// class Post {
//     constructor(id: number, title: string) {
//         this.id = id;
//         this.title = title;
//     }
//
//     getPost(){
//         return `postId ${this.id}, postTitle: ${this.title}`
//     }
// }
//
// const post: Post = new Post(1, "title 1");

class Post {
    id: number = 0;
    protected title: string = "";
    private name: string = "";
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    getPost(){
        return `postId ${this.id}, postTitle: ${this.title}`
    }
}

const post: Post = new Post(1, "title 1");

class PostB extends Post{
    getPost() {
        return this.title;
    }
}

class PostC {
    constructor(
        public id: number = 0,
        protected title: string = ''
    ) {}
}

// Error
// class PostC extends Post{
//     getPost() {
//         return this.name;
//     }
// }

console.log(post.id);
// console.log(post.title); // Error
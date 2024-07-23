interface getLikeNumber{
    (like: number): number; // call-signature
}

interface Post{
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}

const post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number){
        return like;
    }
}

post1.getLikeNumber(1);

interface Post2{
    [key: string]: unknown;
    id: number;
    title: string
}

const post2:Post2 = {
    id: 1,
    title: 'post 1',
}

post2['description'] = 'description 1';
post2['pages'] = 300;

interface Names{
    [item: number]: string;
}

const userNames:Names = ['John', 'Kim', 'Joe']
userNames[0] === 'John';
class Participant{
    constructor(name){
        this.name = name;
        this.chatRoom = null;
        this.message = [];
    }

    send(message, to){
        this.chatRoom.send(message, this, to);
    }

    receive(message, from){
        this.message.push({message, from})
    }

    showMessage() {
        console.log(this.message);
    }
}

// mediator
// Participant -> Chatroom
class ChatRoom {
    constructor() {
        this.participants = {}
    }

    enter(participant){
        this.participants[participant.name] = participant;
        participant.chatRoom = this;
        console.log('enter: ', participant.chatRoom);
    }

    send(message, participant, to){
        this.participants[to.name].receive(message, participant);
    }
}

const chatRoom = new ChatRoom();

const user1 = new Participant('user1');
const user2 = new Participant('user2');
const user3 = new Participant('user3');

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log(chatRoom);

user1.send('Hello', user2);
user1.send('Hi', user2);

console.log(chatRoom);
// Returns half of the given number
export function half(x) {
    return x / 2;
}

// Returns multiplication of 2 numbers
export function multiply(x, y) {
    return x * y;
}

// Returns string
export function doSomething() {
    return "Hey..!! Isha Kothadia here";
}

// Validators
export let flag = false;
export function touch() {
flag = true;
}

// VAR, LET & CONST
export function varExample() 
{
    for(var i = 0; i < 5; i++) 
    {
        console.log(i);
    }
    console.log(i);
}
export function letExample() 
{
    for(let i = 0; i < 20; i++) 
    {
        console.log(i);
    }
    // console.log(i);
}

// DEFAULT
export function addition(x, y = 0) {
    return x + y;
}

// REST
export function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
    console.log(friends + ' are friends of ' + user)
}

// SPREAD
export function bestFriends(firstFriend, secondFriend, thirdFriend) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriend);
}

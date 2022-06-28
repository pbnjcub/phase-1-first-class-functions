function eatWithFriends() {
    return `I really want to eat with friends today.`
}

function playBasketball() {
    return 'I want to play basketball.'
}

function watchAMovie() {
    return 'I want to watch Spiderman.'
}

function receivesAFunction(activity2){
    eatWithFriends();
    activity2();
    
}

function returnsANamedFunction() {
    const namedFunction = (a, b) => a + b;
    return namedFunction
};

function returnsAnAnonymousFunction() {
    return function () {
        console.log("hello")
    }
}





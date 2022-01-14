// mixed_messages terminal program
// required software: node.js or another runtime
// each time this program is run, a random dad joke will be printed to the console
// future functionality: 
// the ability to choose the type of joke (i.e. dad, knock knock, etc.)


// object to contain list of dad jokes and methods required to print random ones to the console
let jokes = {
    _dadJokeList: [
        "How many telemarketers does it take to change a light bulb? Only one, but he has to do it while you are eating dinner.",
        "How many narcissists does it take to screw in a light bulb? One. The narcissist holds the light bulb while the rest of the world revolves around him.",
        "How many DIY buffs does it take to change a light bulb? One, but it takes two weeks and four trips to the hardware store.",
        "How many paranoids does it take to change a light bulb? Who wants to know?",
        "I read that by law you must turn on your headlights when it's raining in Sweden, but how am I supposed to know when it is raining in Sweden?",
        "I was addicted to hokey pokey...but I turned myself around.",
        "I don't trust stairs. They are always up to something.",
        "Today, my son asked, “Can I have a bookmark?” I burst into tears—11 years old and he still doesn't know my name is Brian.",
        "I remember as a kid, my dad got fired from his job as a road worker for theft. I refused to believe he could do such a thing, but when I got home, the signs were all there.",
        "Why didn't Han Solo enjoy his steak dinner? It was Chewie.",
        "Why don't pirates take a bath before they walk the plank? They just wash up on shore.",
        "Why do you never see elephants hiding in trees? Because they're so good at it.",
        "Did you hear about the racing snail who got rid of his shell? He thought it would make him faster, but it just made him sluggish.",
        "A turtle is crossing the road when he's mugged by two snails. When the police ask him what happened, the shaken turtle replies, 'I don't know. It all happened so fast.'",
        "Did you hear about the guy who froze to death at the drive-in? He went to see Closed for the Winter.",
        "We all know about Murphy's Law: anything that can go wrong will go wrong. But have you heard of Cole's Law? It's thinly sliced cabbage.",
        "When does a joke become a 'dad joke?' When it becomes apparent.",
        "I sold our vacuum cleaner; it was just gathering dust.",
        "I searched for a lighter on Amazon, but all I could find was 401 matches...",
        "What do you call a hippie's wife? Mississippi.",
        "What's the least spoken language in the world? Sign language.",
        "What did the evil chicken lay? Deviled eggs.",
        "Did you hear they arrested the devil? Yeah, they got him on possession.",
        "A friend of mine didn't pay his exorcist. He got repossessed.",
        "How do you make holy water? You boil the hell out of it.",
        "What sound does a witch's car make? Broom broom!",
        "I want to go on record that I support farming. As a matter of fact, you could call me protractor.",
        "What's the best way to watch a fly-fishing tournament? Live stream.",
        "How do you tell the difference between an alligator and a crocodile? You will see one later and one in a while."
    ],
    get dadJokeList () {
        return this._dadJokeList;
    },
    set dadJokeList (newList) {
        this._dadJokeList = newList;
    },
    addDadJokeToList (joke) {
        this._dadJokeList.push(joke);
    },

    _momJokeList: [
        'Why is a computer so smart? Because it listens to its motherboard',
        "What kind of flowers are best for Mother's Day? Mums.",
        "What did the baby corn say to the mama corn? Where's Pop-corn?",
        "What did the panda give his mommy? A bear hug.",
        "Don't wake up mom! There are at least seven species that eat their young. Your mom may be one of them."
    ],
    get momJokeList () {
        return this._momJokeList;
    },
    set momJokeList (newList) {
        this._momJokeList = newList;
    },
    addmomJokeToList (joke) {
        this._momJokeList.push(joke);
    },

    _knockKnockJokeList: [
        "Knock! Knock! Who's there? Mikey. Mikey who? Mikey isn't working, can you let me in?",
        "Knock! Knock! Who's there? Scold. Scold who? Scold outside, let me in!",
        "Knock! Knock! Who's there? Needle. Needle who? Needle little help getting in the door!",
        "Knock! Knock! Who's there? Dejav. Dejav who? Knock! Knock!",
        "Knock! Knock! Who's there? Hike. Hike who? I didn't know you liked Japanese poetry!"
    ],
    get knockKnockJokeList () {
        return this._knockKnockJokeList;
    },
    set knockKnockJokeList (newList) {
        this._knockKnockJokeList = newList;
    },
    addKnockKnockJokeToList (joke) {
        this._knockKnockJokeList.push(joke);
    },

    // prints a random joke to the console. Also returns the joke for use elsewhere in the program.
    generateJokes () {
        let jokes = [];
        jokes.push(this._dadJokeList[Math.floor(Math.random() * this._dadJokeList.length)]);
        jokes.push(this._momJokeList[Math.floor(Math.random() * this._momJokeList.length)]);
        jokes.push(this._knockKnockJokeList[Math.floor(Math.random() * this._knockKnockJokeList.length)]);

        jokes.forEach(joke => {
            console.log(joke);
        })

        return jokes;
    }
}

// calls generateJoke method
jokes.generateJokes();




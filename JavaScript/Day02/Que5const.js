const profile = {
    userName : "Rahul Verma",
    isFollow : false,
    Followers : 123,
    following : 150,
};
console.log(profile);
console.log(typeof profile); // output  object
console.log(typeof profile["userName"]); // output string
console.log(profile.isFollow); // output False
console.log(profile.Followers); // output 123
console.log(typeof profile.isFollow); // output boolean
console.log(typeof profile ["isFollow"]); // output boolean
profile["following"] = profile["following"] + 5; // increase value 5 in following key
console.log(profile["following"]); // output 155
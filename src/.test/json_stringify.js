const person = {
    id: 1,
    firstName: "John Doe",
    age: 30,
    gender: "Male",
    dateOfBirth: "1995-04-08",
    address: {
        street: "456 Oak Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
        country: "United States"
    },
    hobbies: [
        "Traveling",
        "Cooking",
        "Cycling"
    ],
};

console.log(JSON.stringify(person, undefined, 2));

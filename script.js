setTimeout(
    function () {
        console.log("Noe har skjedd!");
    }, 
    10000
);

//
//

function timeout1 () {
    console.log("Noe skal skje");

    setTimeout (function () {
        console.log("Noe har skjedd");
    }, 10000)
}

timeout1();

//
//

function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
};

async function timeout2 () {
    console.log("Noe kommer til å skje");
    await delay(5000);
    console.log("Noe har skjedd!");
}

timeout2();

//
//

const myCatFacts = ["Cats are the best", "Cats are just small lions"];

console.log(myCatFacts[0]);

for (let index = 0; index < myCatFacts.length; index++) {
    console.log(myCatFacts[index]);
};

//
//

async function getApiData () {
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    const data = await response.json();
    console.log(data.data[3].fact);
}

getApiData();
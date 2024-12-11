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
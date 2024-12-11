/*
setTimeout() is a built-in JavaScript function used to execute
a block of code after a specified delay (in milliseconds).
The function takes two arguments: a callback function and a delay in milliseconds.
The callback function will be executed after the specified delay.

In this example, a function is scheduled to run after 10,000 milliseconds 
(10 seconds).
*/
setTimeout(
    function () {
        // This will be executed after 10 seconds.
        console.log("Noe har skjedd!");
    }, 
    10000 // Delay of 10,000 milliseconds (10 seconds).
);

/*
In this section, we are using the `setTimeout()` function to execute code after a 10-second delay.

In this is an example of how to use `setTimeout` for scheduling a task asynchronously.
*/

function timeout () {
    // Log this message immediately when the function is called.
    console.log("Noe skal skje"); // Logs the message to the console immediately.

    // Set a timeout to execute a function after 10,000 milliseconds (10 seconds).
    setTimeout(function () {
        // This will be executed after 10 seconds.
        console.log("Noe har skjedd"); // Logs the message after 10 seconds.
    }, 10000); // Delay of 10,000 milliseconds (10 seconds).
}

// Call the timeout function to execute the code inside it.
timeout();


/* 
Manually setting the timeout functionality using a Promise.
Here, we replace `setTimeout()` with a custom Promise-based delay function.

In this example demonstrates how to create custom delays in an async function.
*/
function delay(ms) {
    return new Promise(function (resolve) {
        // This is a custom implementation using `setTimeout` within a Promise.
        setTimeout(resolve, ms);
    });
};

async function timeout () {
    console.log("Noe kommer til å skje"); // Logs the message immediately when the function starts.
    
    // Wait for the `delay()` function to resolve after 5 seconds.
    await delay(5000);
    
    // Once the delay is over, log this message.
    console.log("Noe har skjedd!");
}

// Call the async `timeout` function.
timeout();

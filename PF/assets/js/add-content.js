// JavaScript Document

    // Get the current date and time
    var today = new Date();
    // Get the current hour (0-23)
    var hourNow = today.getHours();
    // Declare a variable to store the greeting message
    var greeting;

    // Determine the appropriate greeting based on the current hour
    if (hourNow > 18) { // If it's after 6 PM
        greeting = 'Good evening!';
    } else if (hourNow > 12) { // If it's after 12 PM (noon)
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) { // If it's after 12 AM (midnight)
        greeting = 'Good morning!';
    } else { // For any other time (e.g., exactly midnight)
        greeting = 'Welcome!';
    }

    // Write the greeting message to the document as an h3 heading
    document.write('<h3>' + greeting + '</h3>');

$(document).ready(function () //Function to run when website is loaded
{
    var totalAmount = 200;
    var betAmount;
    var poorMessage = "You Can't afford this bet!";

    $("#bet25").click(function () //When 25 Bet button is pressed
    {
        betAmount = 25;
        if (totalAmount > 24)
        {
            totalAmount = totalAmount - 25;
            document.getElementById("betAmount").innerHTML = betAmount; //Pass into html (text value)
            document.getElementById("totalCash").innerHTML = totalAmount; //Pass into html (text value)
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#bet50").click(function () //When 50 Bet button is pressed
    {
        betAmount = 50;
        if(totalAmount > 49)
        {
            totalAmount = totalAmount - 50;
            document.getElementById("betAmount").innerHTML = betAmount;
            document.getElementById("totalCash").innerHTML = totalAmount;
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#bet100").click(function () //When 100 Bet button is pressed
    {
        betAmount = 100;
        if (totalAmount > 99)
        {
            totalAmount = totalAmount - 100;
            document.getElementById("betAmount").innerHTML = betAmount;
            document.getElementById("totalCash").innerHTML = totalAmount;
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });


});
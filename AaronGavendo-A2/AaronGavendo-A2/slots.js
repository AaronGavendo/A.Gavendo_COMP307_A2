$(document).ready(function () //Function to run when website is loaded
{
    var totalAmount = 200;
    var betAmount;
    var poorMessage = "You Can't afford this bet!";
    var pick1 = 0;
    var pick2 = 0;
    var pick2 = 0;
    var pick1pic = 'spin';
    var pick2pic = 'spin';
    var pick3pic = 'spin';

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

    $("#spin").click(function () //This method spins the wheel. It will determin a win and prize. 
    {
        pick1 = Math.floor((Math.random() * 100) + 1);
        pick2 = Math.floor((Math.random() * 100) + 1);
        pick3 = Math.floor((Math.random() * 100) + 1);

        pick1pic = getFruit(pick1);
        pick2pic = getFruit(pick2);
        pick3pic = getFruit(pick3);

        console.log(pick1pic);
        console.log(pick2pic);
        console.log(pick3pic);

        console.log(pick1 + '-' + pick2 + '-' + pick3);

    });

    function getFruit(theRandomValue)
    {
        var theValue = 'spin';
        if (theRandomValue > 0 && theRandomValue <= 10)
        {
            theValue = 'seven';
        }
        else if (theRandomValue >= 11 && theRandomValue <= 25)
        {
            theValue = 'bar';
        }
        else if (theRandomValue >= 26 && theRandomValue <= 60)
        {
            theValue = 'bell';
        }
        else if (theRandomValue >= 61 && theRandomValue <= 100)
        {
            theValue = 'cherry';
        }
        else
        {
            theValue = 'spin';
        }
        return theValue;
    }

});
$(document).ready(function () //Function to run when website is loaded
{
    var totalAmount = 2000;
    var betAmount = 0;
    var poorMessage = "You Can't afford this bet!";
    var pick1 = 0;
    var pick2 = 0;
    var pick2 = 0;
    var pick1pic = 'spin';
    var pick2pic = 'spin';
    var pick3pic = 'spin';
    var betPlaced = 0;          

    $("#bet25").click(function () //When 25 Bet button is pressed
    {
        betAmount = 25;
        if (totalAmount > 24)
        {
            totalAmount = totalAmount - 25;
            document.getElementById("betAmount").innerHTML = betAmount; //Pass into html (text value)
            document.getElementById("totalCash").innerHTML = totalAmount; //Pass into html (text value)
            betPlaced = 1;
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
            betPlaced = 1;
            console.log(betPlaced);
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
            betPlaced = 1;
            console.log(betPlaced);
        }
        else
        {
            document.getElementById("betAmount").innerHTML = poorMessage;
        }
    });

    $("#spin").click(function () //This method spins the wheel. It will determin a win and prize. 
    {
        totalAmount = totalAmount - betAmount;

        pick1 = Math.floor((Math.random() * 100) + 1);
        pick2 = Math.floor((Math.random() * 100) + 1);
        pick3 = Math.floor((Math.random() * 100) + 1);

        pick1pic = getFruit(pick1);
        pick2pic = getFruit(pick2);
        pick3pic = getFruit(pick3);

        $("#slot1").attr("src", pick1pic + ".jpg");
        $("#slot2").attr("src", pick2pic + ".jpg");
        $("#slot3").attr("src", pick3pic + ".jpg");

        if (pick1pic === pick2pic){
            if(pick1pic === pick3pic){
                if(pick1pic === 'cherry'){
                    totalAmount = totalAmount + (betAmount * 4);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 4);
                }
                if (pick1pic === 'bar') {
                    totalAmount = totalAmount + (betAmount * 8);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 8);
                }
                if (pick1pic === 'seven') {
                    totalAmount = totalAmount + (betAmount * 14);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 14);
                }
                if (pick1pic === 'bell') {
                    totalAmount = totalAmount + (betAmount * 20);
                    document.getElementById("messages").innerHTML = "WIN: $" + (betAmount * 20);
                }
            }
            else{
                document.getElementById("messages").innerHTML = "LOSE";
            }
        }
        else{
            document.getElementById("messages").innerHTML = "LOSE";
        }

        //betAmount = 0;
        //betPlaced = 0;
        document.getElementById("totalCash").innerHTML = totalAmount;

        document.getElementById("betAmount").innerHTML = betAmount; //Pass into html (text value)
        
    });

    function getFruit(theRandomValue)   //Pick a value (Not Random, Random with probability)
    {
        var theValue = "spin";
        if (theRandomValue > 0 && theRandomValue <= 10) //Hardest to Get
        {
            theValue = "bell";
        }
        else if (theRandomValue >= 11 && theRandomValue <= 25) //2nd
        {
            theValue = "seven";
        }
        else if (theRandomValue >= 26 && theRandomValue <= 60) //3rd
        {
            theValue = "bar";
        }
        else if (theRandomValue >= 61 && theRandomValue <= 100) //4th Easy
        {
            theValue = "cherry";
        }
        else
        {
            theValue = "spin";
        }
        return theValue;
    }

});
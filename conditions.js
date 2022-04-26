var visa_city = "Paris"; //declaration of visa_city variable with 'paris' as value
switch(visa_city) //switch condition to check the availability of visa and trip
{
    case "New York":
    document.write("<i>You have a New York tourist Visa</i>"+"<br><br>"+"Enjoy your trip to <b>New York</b>");
    break;
    case "Paris":
    document.write("<i>You have a Paris tourist Visa</i>"+"<br><br>"+"Enjoy your trip to <b>Paris</b>");
    break;
    case "New Delhi":
    document.write("<i>You have a New York tourist Visa</i>"+"<br><br>"+"Enjoy your trip to <b>New Delhi</b>");
    break;
    case "Tokyo":
    document.write("<i>You have a Tokyo tourist Visa</i>"+"<br><br>"+"Enjoy your trip to <b>Tokyo</b>");
    break;
    default:
    document.write("<strong>Sorry! this vacation scheme is not available for you</strong>"+"<br>"+"<em>You can try later in other scheme</em>");
    break;    
}

document.body.style.fontFamily="Verdana"; //font style of the body
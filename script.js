// for (var i = 0; i < 101; i++) {
//   var h3 = document.createElement('h3');
//     h3.innerText = 'accusation ' + i;
//     // h3.addEventListener('click', );
//     document.body.appendChild(h3);
// }

var body = document.body;
var friend_Name = ['Seth', 'Nyya', 'Hallie', 'Chad', 'Dustin'];
var location_Name = ['Eugenes Hot Chicken', 'Brookwood Mall', 'The Shoppe', 'The Edge Theater', 'Innovate Birmingham', 'Shipt Headquarters', 'Clairmont Piggly Wiggly', 'Planet Fitness', 'Sloss Furnace', 'Vulcan Park'];
var weapon_Name = ['Spork', 'Foam Roller', 'Flower Pot', 'Tea Kettle', 'Brita Pitcher', 
'Xbox 1 Controller', 'Novelty Harry Potter Wand', 'Water Gun', 'Scented Candle', '2x Spicy Hot Chicken Ramen',
'Chromebook', 'Kitty Litter Scoop', 'Bobby Pin', 'Head of Cabbage', 'Bath Bomb', 'Reign Energy Drink',
'Metal Straw', 'Fuzzy Sweater', 'Wolverine Claw', 'Foam Hulk Hands'];

$(document).ready(function () {
    for (var i = 1; i < 101; i++) {
        var h3 = $('<h3> Accusation ' + (i) + '</h3>');
        $(body).append(h3);
        var trigger = myAlert(i);
        h3.click(trigger);
    }

    function myAlert(num) {
        return function () {
            var name = num % friend_Name.length;
            console.log(name);
            var location = num % location_Name.length;
            console.log(location);
            var weapon = num % weapon_Name.length;
            console.log(weapon);
            alert('I accuse ' + friend_Name[name] + ' with the ' + weapon_Name[weapon] + ' in the ' + location_Name[location] + '!')
        }

    }
})
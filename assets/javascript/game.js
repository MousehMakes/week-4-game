var aang = {
    name: "Aang",
    pic: "<img src='assets/images/aang.png'>",
    healthPoints: Math.floor((Math.random() * 150) + 1),
    attackPower: Math.floor((Math.random() * 10) + 1),
    counterAttackPower: Math.floor((Math.random() * 10) + 1),
}

var katara = {
    name: "Katara",
    pic: "<img src='assets/images/katara.png'>",
    healthPoints: Math.floor((Math.random() * 150) + 1),
    attackPower: Math.floor((Math.random() * 10) + 1),
    counterAttackPower: Math.floor((Math.random() * 10) + 1),
}

var sokka = {
    name: "Sokka",
    pic: "<img src='assets/images/sokka.jpg'>",
    healthPoints: Math.floor((Math.random() * 150) + 1),
    attackPower: Math.floor((Math.random() * 10) + 1),
    counterAttackPower: Math.floor((Math.random() * 10) + 1),
}

var toph = {
    name: "Toph",
    pic: "<img src='assets/images/toph.png'>",
    healthPoints: Math.floor((Math.random() * 150) + 1),
    attackPower: Math.floor((Math.random() * 10) + 1),
    counterAttackPower: Math.floor((Math.random() * 10) + 1),
}

var player = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

var enemy1 = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

var enemy2 = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

var enemy3 = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

var defender = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}

var empty = {
    name: "",
    pic: "",
    healthPoints: "",
    attackPower: "",
    counterAttackPower: "",
}




var aangClick = false;
var kataraClick = false;
var sokkaClick = false;
var tophClick = false;

var chosenCharacter = false;

var chosenEnemy = false;

var numWins = 0;

var playerAttPow = 0;



function showPerson(el, obj) {
    $(el).html("")
    $(el).append(obj.name)
        .append('<br/>')
        .append(obj.pic)
        .append('<br/>')
        .append(obj.healthPoints);

}

function resetCSS(el) {
    $(el).css('margin', '0px');
    $(el).css('width', '0px');
    $(el).css('border', '0px');
}

function emptyAttr(obj1) {
    obj1.name = empty.name;
    obj1.pic = empty.pic;
    obj1.healthPoints = empty.healthPoints;
    obj1.attackPower = empty.attackPower;
    obj1.counterAttackPower = empty.counterAttackPower;
}

function enemyCSS(el) {
    $(el).css('margin', '10px');
    $(el).css("border", "#382974 solid 2px");
    $(el).css('background-color', 'red');
    $(el).css('width', '240px');
    $(el).css('text-align', 'center');
}

function playerCSS(el) {
    $(el).css('margin', '10px');
    $(el).css("border", "#382974 solid 2px");
    $(el).css('background-color', 'white');
    $(el).css('width', '240px');
    $(el).css('text-align', 'center');
}

function defenderCSS(el) {
    $(el).css('margin', '10px');
    $(el).css('color', 'white');
    $(el).css("border", "#382974 solid 2px");
    $(el).css('background-color', 'black');
    $(el).css('width', '240px');
    $(el).css('text-align', 'center');
}

function changeAttrPly(obj1, obj2) {
    obj1.name = obj2.name;
    obj1.pic = obj2.pic;
    obj1.healthPoints = obj2.healthPoints;
    obj1.attackPower = obj2.attackPower;
    obj1.counterAttackPower = obj2.counterAttackPower;
    playerAttPow = obj2.attackPower;
}

function changeAttrNorm(obj1, obj2) {
    obj1.name = obj2.name;
    obj1.pic = obj2.pic;
    obj1.healthPoints = obj2.healthPoints;
    obj1.attackPower = obj2.attackPower;
    obj1.counterAttackPower = obj2.counterAttackPower;
}

function setCharAttr(obj) {
    obj.healthPoints = Math.floor((Math.random() * 150) + 1);
    obj.attackPower = Math.floor((Math.random() * 10) + 1);
    obj.counterAttackPower = Math.floor((Math.random() * 10) + 1);
}

function render() {

    showPerson(".aangContent", aang);
    showPerson(".kataraContent", katara);
    showPerson(".sokkaContent", sokka);
    showPerson(".tophContent", toph);

    showPerson(".playerPlaceHolderContent", player);
    showPerson(".enemy1PlaceHolderContent", enemy1);
    showPerson(".enemy2PlaceHolderContent", enemy2);
    showPerson(".enemy3PlaceHolderContent", enemy3);
    showPerson(".defender", defender);
}


function reset() {
    $(".reset-button").css('display', 'none');

    //resets all variables to original

    chosenCharacter = false;

    chosenEnemy = false;

    numWins = 0;

    playerAttPow = 0;


    aang.name = "Aang";
    aang.pic = "<img src='assets/images/aang.png'>";
    setCharAttr(aang);

    katara.name = "Katara";
    katara.pic = "<img src='assets/images/katara.png'>";
    setCharAttr(katara);

    sokka.name = "Sokka";
    sokka.pic = "<img src='assets/images/sokka.jpg'>";
    setCharAttr(sokka);

    toph.name = "Toph";
    toph.pic = "<img src='assets/images/toph.png'>";
    setCharAttr(toph);

    emptyAttr(player);
    emptyAttr(enemy1);
    emptyAttr(enemy2);
    emptyAttr(enemy3);
    emptyAttr(defender);

    //resets css
    playerCSS(".aangContent");
    playerCSS(".kataraContent");
    playerCSS(".sokkaContent");
    playerCSS(".tophContent");

    resetCSS(".playerPlaceHolderContent");
    resetCSS(".enemy1PlaceHolderContent");
    resetCSS(".enemy2PlaceHolderContent");
    resetCSS(".enemy3PlaceHolderContent");
    resetCSS(".defender");
    $(".result-screen-win").css('display', 'none');
    $(".result-screen-lose").css('display', 'none');
    render();
}

$(document).ready(function () {
    $(".normal-button").on("click", function () {
        if (defender.healthPoints >= 0 && player.healthPoints >= 0) {
            //Attack button
            defender.healthPoints = parseInt(defender.healthPoints) - player.attackPower;
            player.attackPower = player.attackPower + playerAttPow;
            player.healthPoints = player.healthPoints - defender.counterAttackPower;
            if (defender.healthPoints <= 0) {
                chosenEnemy = false;
                numWins++;
                if (numWins === 3) {
                    //console.log("Player Wins The Game!");
                    $(".reset-button").css('display', 'block');
                    $(".result-screen-win").css('display', 'block');
                }
            } else if (player.healthPoints <= 0) {
                //console.log("Player Looses!");
                $(".reset-button").css('display', 'block');
                $(".result-screen-lose").css('display', 'block');

            }
        } else if (player.healthPoints <= 0) {
            //console.log("Player Looses!");
            $(".reset-button").css('display', 'block');

        }
        render();
    });

    $(".reset-button").on("click", function () {
        reset();
    });

    $(".aangContent").on("click", function () {
        if (!chosenCharacter) {
            chosenCharacter = true;
            changeAttrPly(player, aang);
            changeAttrNorm(enemy1, katara);
            changeAttrNorm(enemy2, sokka);
            changeAttrNorm(enemy3, toph);
            //Below code removes all players from selection area
            changeAttrNorm(aang, empty);
            changeAttrNorm(katara, empty);
            changeAttrNorm(sokka, empty);
            changeAttrNorm(toph, empty);
            resetCSS(".aangContent");
            resetCSS(".kataraContent");
            resetCSS(".sokkaContent");
            resetCSS(".tophContent");
            //code to reset css for new areas of game
            //Player
            playerCSS(".playerPlaceHolderContent");
            //Enemies:
            enemyCSS(".enemy1PlaceHolderContent");
            enemyCSS(".enemy2PlaceHolderContent");
            enemyCSS(".enemy3PlaceHolderContent");
            render();
        }
    });

    $(".kataraContent").on("click", function () {
        if (!chosenCharacter) {
            chosenCharacter = true;
            changeAttrPly(player, katara);
            changeAttrNorm(enemy1, aang);
            changeAttrNorm(enemy2, sokka);
            changeAttrNorm(enemy3, toph);
            //Below code removes all players from selection area
            changeAttrNorm(aang, empty);
            changeAttrNorm(katara, empty);
            changeAttrNorm(sokka, empty);
            changeAttrNorm(toph, empty);
            resetCSS(".aangContent");
            resetCSS(".kataraContent");
            resetCSS(".sokkaContent");
            resetCSS(".tophContent");
            //code to reset css for new areas of game
            //Player
            playerCSS(".playerPlaceHolderContent");
            //Enemies:
            enemyCSS(".enemy1PlaceHolderContent");
            enemyCSS(".enemy2PlaceHolderContent");
            enemyCSS(".enemy3PlaceHolderContent");
            render();
        }
    });

    $(".sokkaContent").on("click", function () {
        if (!chosenCharacter) {
            chosenCharacter = true;
            changeAttrPly(player, sokka);
            changeAttrNorm(enemy1, aang);
            changeAttrNorm(enemy2, katara);
            changeAttrNorm(enemy3, toph);
            //Below code removes all players from selection area
            changeAttrNorm(aang, empty);
            changeAttrNorm(katara, empty);
            changeAttrNorm(sokka, empty);
            changeAttrNorm(toph, empty);
            resetCSS(".aangContent");
            resetCSS(".kataraContent");
            resetCSS(".sokkaContent");
            resetCSS(".tophContent");
            //code to reset css for new areas of game
            //Player
            playerCSS(".playerPlaceHolderContent");
            //Enemies:
            enemyCSS(".enemy1PlaceHolderContent");
            enemyCSS(".enemy2PlaceHolderContent");
            enemyCSS(".enemy3PlaceHolderContent");
            render();
        }
    });

    $(".tophContent").on("click", function () {
        if (!chosenCharacter) {
            chosenCharacter = true;
            changeAttrPly(player, toph);
            changeAttrNorm(enemy1, aang);
            changeAttrNorm(enemy2, sokka);
            changeAttrNorm(enemy3, katara);
            //Below code removes all players from selection area
            changeAttrNorm(aang, empty);
            changeAttrNorm(katara, empty);
            changeAttrNorm(sokka, empty);
            changeAttrNorm(toph, empty);
            resetCSS(".aangContent");
            resetCSS(".kataraContent");
            resetCSS(".sokkaContent");
            resetCSS(".tophContent");
            //code to reset css for new areas of game
            //Player
            playerCSS(".playerPlaceHolderContent");
            //Enemies:
            enemyCSS(".enemy1PlaceHolderContent");
            enemyCSS(".enemy2PlaceHolderContent");
            enemyCSS(".enemy3PlaceHolderContent");
            render();
        }
    });


    $(".enemy1PlaceHolderContent").on("click", function () {
        if (!chosenEnemy) {
            chosenEnemy = true;
            changeAttrNorm(defender, enemy1);
            changeAttrNorm(enemy1, empty);
            resetCSS(".enemy1PlaceHolderContent");
            defenderCSS(".defender");
            render();
        }
    });

    $(".enemy2PlaceHolderContent").on("click", function () {
        if (!chosenEnemy) {
            chosenEnemy = true;
            changeAttrNorm(defender, enemy2);
            changeAttrNorm(enemy2, empty);
            resetCSS(".enemy2PlaceHolderContent");
            defenderCSS(".defender");
            render();
        }
    });

    $(".enemy3PlaceHolderContent").on("click", function () {
        if (!chosenEnemy) {
            chosenEnemy = true;
            changeAttrNorm(defender, enemy3);
            changeAttrNorm(enemy3, empty);
            resetCSS(".enemy3PlaceHolderContent");
            defenderCSS(".defender");
            render();
        }
    });


    render();
});
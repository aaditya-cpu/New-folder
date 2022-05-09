// -1 .Pramas from previous page
$(".lel").click(function(e) {
    // console.log('licked');

});

// 0. On load stuff

// 0.1 Variables/declaration
var trigger;
let dadStats;
var coords

let dadJoke = " ";
$(document).ready(function() {
    $('.headTrigCity').hide();
    $('.reset').hide();
    geneAPI();
    getLocation();
    getWeat();
});

// 0.2 Rand generator 
// 0 to get a rand for effects 
// 9 to get string of unique id

function randNum(po) {
    if (po === 0) {
        var min = Math.ceil(200);
        var max = Math.floor(1000);
        return Math.floor(Math.random() * (max - min + 1) + min);
    } else if (po == 9) {
        var chintu;
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const pichkari = '123456789zZxYywW';
        var o = " ";
        var q = " ";
        for (let j; j <= 6; j++) {
            o += pichkari.charAt(Math.floor(Math.random() * pichkari.length));
        }
        for (let i = 0; i <= 250; i++) {
            q += char.charAt(Math.floor(Math.random() * char.length));
        }
        chintu = o + q;
        return chintu;
    }

}

// 0.3 to get location


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

        $('.headTrigCity').show("slow");
        alert("Achievement Unlocked!! You can now manually enter the city!!");
    }
}


function showPosition(position) {

    let lati = position.coords.latitude;

    let longi = position.coords.longitude;

    coords = lati + ',' + longi;
    if (coords !== " " || coords !== " " || coords !== 0) {
        console.log("position alive");
    } else {

        $('.headTrigCity').show("slow");
        alert("Achievement Unlocked!! You can now manually enter the city!!");
    }
}


// 1. Look at Line 17 dictonary.htmml

// Math.floor(Math.random(400) + 1);
// console.log(sped);

var typed = new Typed(".engText", {
    strings: ["Coding"],
    typeSpeed: randNum(0),
    backSpeed: randNum(0),
    loop: true
});
var typd = new Typed(".engTraceText", {
    strings: ["Coding"],
    typeSpeed: randNum(0),
    backSpeed: randNum(0),
    loop: true
});
var typd = new Typed(".espText", {
    strings: ["Coding"],
    typeSpeed: randNum(0),
    backSpeed: randNum(0),
    loop: true
});
// External Libray


// 2. CSS editions via jQuery
$("#traceTrig").click(function() {;
    $(".dictionaryBox").hide(1500);
    $('.reset').show(1500);


});
$("#dictTrig").click(function() {
    const wordEng = $('#englishInput').val();
    $('.translateBox').hide(1500);
    $('.reset').show(1500);
    if (wordEng !== " " || wordEng !== "") {
        console.log(wordEng);
    }

});
$(".reset").click(function() {

    $(".dictionaryBox").show(1500);
    $('.translateBox').show(1500);

});








// 3. Api Triggers and funbstions 
// 3.1 Ajax call to joke API atleast
var ret = {
    Id: randNum(9).trim(),

};

function geneAPI() {
    var url = "https://icanhazdadjoke.com/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "text/plain");

    xhr.onload = function() {
        if (xhr.responseText !== " " || xhr.responseText !== "[]") {
            //  apiURLs.responsetext 
            $(".dadJoke").html("<em>" + xhr.responseText + "</em>");
            ret.dadStats = xhr.status;
            ret.dadJoke = xhr.responseText;
        }

    };

    xhr.send();
    return ret;
}

// -- -- -- -- -- -- -- -- -- -

// 3.2 AJAX to WeatherAPi

// -- -- -- -- -- --



function getWeat() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://api.weatherapi.com/v1/forecast.json?key=e29761bd6ad049a68f975205220602&q=%2023.1755427,75.7872723&days=2&aqi=yes&alerts=yes");

    xhr.send();
}

// -- -- -- -- -- -- -- -- -- -
function Analy(dadStats, dadJoke) {

}

function apiURLs(params) {

}
// 4. Display elements
// -1 .Pramas from previous page
$(".lel").click(function(e) {
    // console.log('licked');

});

// 0. On load stuff

// 0.1 Variables/declaration
var trigger;
let dadStats;
var coords;
let tempData;
let dadJoke = " ";
let cityInp;
let engWord;
const resDictIndiBox = document.querySelector('.resDictIndiBox');

$(document).ready(function() {
    $('.headTrigCity').hide();
    $(".showTemp").hide();
    $('.reset').hide();
    geneAPI();
    getLocation();
    getWeat();
    $(".resDictBoxTitleBox").hide();
});

//0.15createElement
function createDictEle(parent, eletype, addClass) {
    const ele = document.createElement(eletype);
    parent.append(ele);
    ele.classList.add(addClass);
    return ele;
}
// 0.20 Rand generator 
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
//mi data
var ret = {
    Id: randNum(9).trim(),
    location: ''
};
// 0.3 to get location


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

        $('.headTrigCity').show("slow");
        alert("Achievement Unlocked!! You can now manually enter the city!!");
    }
    return coords;
}


function showPosition(position) {

    let lati = position.coords.latitude;

    let longi = position.coords.longitude;

    coords = lati + ',' + longi;
    if (coords) {
        console.log("position alive");
        console.log(coords);
        getWeat(coords);
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
        engWord = wordEng;
        saurusCall(engWord);
        ret.dictEngSearch = engWord;
        $(".resDictBoxTitleBox").replaceWith("<<h2> Results for " + engWord + "</h2>");
        $(".resDictBoxTitleBox").show(800);
    } else {
        alert("Enter a valid string");
    }

});
$(".reset").click(function() {

    $(".dictionaryBox").show(1500);
    $('.translateBox').show(1500);

});


$(".cityMan").click(function() {
    $('.headTrigCity').show("slow");
});
$(".hideTemp").click(function() {
    $(".weatherBoxInner").hide(1500);
    $(".showTemp").show(1200);


});
$(".showTemp").click(function() {
    $(".weatherBoxInner").show(1500);
    $(".hideTemp").hide(1200);

});
$(".citySub").click(function() {
    cityInp = $(".cityInp").val();
    getWeat(cityInp);
});



// 3. Api Triggers and funbstions 
// 3.1 Ajax call to joke API atleast


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



function getWeat(coords) {
    var settings = {
        "url": "http://api.weatherapi.com/v1/current.json?key=e29761bd6ad049a68f975205220602&q=" + coords + "&aqi=yes",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
            "Access-Control-Allow-Origin": "*" //to change when live to ensure the safety of key.
        },
    };

    $.ajax(settings).done(function(response) {
        tempData = response;
        $('.tempC').empty();
        $('.tempC').append("<p> Temprature : " + tempData.current.temp_c + " Cel</p>");
        $('.feelsLike').empty();
        $('.feelsLike').append("<p> Feels Like : " + tempData.current.feelslike_c + " </p>");
        $('.tempText').empty();
        $('.tempText').append("<p> Conditions : " + tempData.current.condition.text + " </p>");
        $('.tempUV').empty();
        $('.tempUV').append("<p> UV index : " + tempData.current.uv + "</p>");
        $('.lastUp').empty();
        $('.lastUp').append("<p> Last Updated on : " + tempData.current.last_updated + "</p>");
        $('.locat').empty();
        $('.locat').append("<p> Location : " + tempData.location.name + ' ,' + tempData.location.region + "</p>");
        $('.locat').append("<p> Country : " + tempData.location.country + "</p>");

        ret.locationName = tempData.location.name;
        ret.locationRegion = tempData.location.region;
        ret.locationCountry = tempData.location.country;
        ret.locationTempC = tempData.current.temp_c;
    });

}


function saurusCall(word) {
    var settings = {
        "url": "https://dictionaryapi.com/api/v3/references/thesaurus/json/" + word + "?key=fc6fe6d7-18a0-4dfa-96ec-96d59a1ada56",
        "method": "GET",
        "timeout": 0,

    };

    $.ajax(settings).done(function(response) {
        const dictData = response;
        $(".resDictIndiBox").empty();
        console.log(dictData);
        dictData.forEach(element => {
            const dictResDiv = createEle(resDictIndiBox, 'div', 'dictResDiv');

            console.log(element);
            let fl = element.fl;
            // console.log(fl);
            let partOfSpeech = createEle(dictResDiv, 'p', 'typeOfRes')
            partOfSpeech.textContent = fl;
            // let sls = element.sls;
            // console.log(sls);

            let dictDataShortDef = (element.shortdef);
            dictDataShortDef.forEach(shortDef => {

                const dictResDef = createEle(dictResDiv, 'p', 'dictResDef');
                dictResDef.textContent = shortDef;

                // console.log(shortDef);

            })
        });
    });
}

// -- -- -- -- -- -- -- -- -- -
function Analy() {

}

function apiURLs(params) {

}
// 4. Display elements
const dictResDiv = createEle(resDictIndiBox, 'div', 'dictRes');


function createEle(parent, elType, classAdd) {
    const ele = document.createElement(elType);
    parent.append(ele);
    ele.classList.add(classAdd);
    return ele;

}
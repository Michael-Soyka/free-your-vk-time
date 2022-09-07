// ==UserScript==
// @name         Fuck the time.
// @namespace    http://tampermonkey.net/
// @version      1
// @description  You should kill yourself. NOW!
// @author       Michael Soyka.
// @match        https://vk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @grant        none
// ==/UserScript==

(function() {
    document.getElementById("l_nwsf").remove();
    document.getElementById("react_rootEcosystemServicesNavigationEntry").remove();

    if (window.location.href == "https://vk.com/feed") {
        var MakeDealWithDevil = confirm("ТЫ ТОЧНО УВЕРЕН, ЧТО ХОЧЕШЬ ПОЛИСТАТЬ ЭТУ ГРЕБАНУЮ ЛЕНТУ С НОВОСТЯМИ???");
        if (!MakeDealWithDevil) {
            window.location.replace("https://vk.com/im")
            // console.log("+10 Social Credit")
        } else {
            // console.log("-10 Social Credit")
        }
    }

    if (document.getElementById("fastchat-reforged") !== null) {
        document.getElementById("fastchat-reforged").remove();
    }
})();

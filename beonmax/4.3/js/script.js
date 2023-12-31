window.addEventListener("DOMContentLoaded", function() {

    'use strict';
    let info          = document.querySelector(".info"),
        infoHeaderTab = info.querySelectorAll(".info-header-tab"),
        infoHeader    = info.querySelector(".info-header"),
        tabContent    = info.querySelectorAll(".info-tabcontent");
        
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }
    
    infoHeader.addEventListener("click", function(e) {
        let target = e.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (target == infoHeaderTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer

    let deadline = "2021-10-21";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60),
            minutes = Math.floor( (t/1000/60) % 60),
            hours   = Math.floor( t/(1000*60*60));

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        };
    }

    function setClock(id, endtime) {
        let timer   = document.getElementById(id),
            hours   = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.textContent   = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if (t.total <= 0) {
                    hours.textContent   = "0";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                    clearInterval(timeInterval);
                }
            }
    }

    setClock("timer", deadline);


    // Modal

    let more    = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close   = document.querySelector(".popup-close");

    more.addEventListener("click", function() {
        overlay.style.display = "block";
        more.classList.add(".more-splash");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
        more.classList.remove(".more-splash");
        document.body.style.overflow = "";
    });


    // Modal Tab

    info.addEventListener("click", function(e) {
        let target = e.target;
        if (target && target.classList.contains("description-btn")) {
            overlay.style.display = "block";
            more.classList.add(".more-splash");
            document.body.style.overflow = "hidden";
        }
    });

    // Form

    /*
    Я не знаю почему, но у меня не работает ни мой код, ни код автора
    */

    let message = {
        loading: "Загрузка ...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так...",
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        let formData = new FormData(form);


        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener("readystatechange", function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else  if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }

    });



});
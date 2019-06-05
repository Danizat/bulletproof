window.addEventListener("load", () => {

    function checkStorage() {
        chrome.storage.local.get(['openCommand'], function(result) {

            
            
            if (result.openCommand === "openModal") {
            let modalContainer = document.createElement("modalContainer");
            modalContainer.style.width = "100%";
            modalContainer.style.height = "100%";
            modalContainer.style.position = "fixed";
            modalContainer.style.transform = "translateX(-50%) translateY(-50%)";
            modalContainer.style.top = "50%";
            modalContainer.style.left = "50%";
            modalContainer.style.zIndex = "1000";
            modalContainer.style.background = "rgba(0,0,0,.5)";
            modalContainer.className = "modalContainer";

            $("head").append(`<link href="https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap&subset=cyrillic" rel="stylesheet">`)


            let  exercises = [
                 {
                    imageUrl:'https://j.gifs.com/QnODKL.gif',
                    bgColor: 'greenBg',
                    instructions: [
                    "Садитесь удобно и потрите руки пока не разогреете их",
                    "Закройте глаза и надовите на них немного руками",
                    "Убедитесь что свет не проникает между руками ,иначе он помешает отдыху глаз",
                    "Расслабьтесь и представьте себе природу, море, горы или поля",
                    "Повторите упражнение несколько раз",
                    ]
                 },
                 {
                    imageUrl:'https://j.gifs.com/xnlJBr.gif',
                    bgColor: 'coralBg',
                    instructions: [
                    "Садитесь или встаньте напротив пустой стены",
                    "Положите большой палец ан расстояние 10-15 см и смотрите на него 10-15 секунд не отрывая взглгяд",
                    "Затем увеличьте расстояние и опять смотрите.",
                    "Увеличивайте пока не достигли максимума",
                    "Повторите упражнение 5 раз. Упражнение укрепляет ваши мышцы глаз",
                    ]
                 },
                 {
                    imageUrl:'https://j.gifs.com/oVOwPK.gif',
                    bgColor: 'yellowBg',
                    instructions: [
                    "встаньте прямо и представьте на полу большую цифру восьмерку в рассторянии 1-2 метров",
                    "Нарисуйте его глазами медленно",
                    "Смените направлнеие и продолжите упражнение несколько раз",
                    "Поморгайте немного",
                    "Упражнение помогает улучшению физического котроля над вашим глазом!",
                    ]
                 },
                 {
                    imageUrl:'https://j.gifs.com/BNnkGn.gif',
                    bgColor: 'greenBg',
                    instructions: [
                    "Упражнение помогает улучшению ритмичных движений глаз",
                    "Найдите вещи или картинки поделеннные на колонки ",
                    "Двигайтесь паралелльно им стараясь замечать вещи между ними",
                    "Не забывайте регулярно моргать делая упражнение!",
                    "Ваше периферальное зрение заметно улучшится если продолжите это 2-3 минуты",
                    ]
                 },
                  
                 {
                    imageUrl:'https://j.gifs.com/1W9Ko0.gif',
                    bgColor: 'coralBg',
                    instructions: [
                    "Двигать глаза в разном направлнеии отличная зарядка для глаз",
                    "встаньте или садитесь прямо, не двигая головой .",
                    "Поверните ваши глаза налево, прямо ,а потом направо",
                    "После повторите это же только двигая глаза вертикально вверх, вниз",
                    "Повторите несколько раз и насладитесь с тем, что сняли напряжение с глаз",
                    ]
                 },

                 

            ];




            let appender = `<div class = "modalBox">
                                <div class ="closeBtn">&#10005;</div>
                                <div class="flexslider">
                                
                                    <ul class="slides">
                                    ${
                                        exercises.map(a => {

                                            return  `<li>
                                                    <div class = "slides-items ${a.bgColor}">
                                                    <div class = "modalImage">
                                                    <img src = ${a.imageUrl}>
                                                    </div>
                                                    <div>
                                                    <div class = "instructionsBox">
                                                        <ul>
                                                            ${a.instructions.map(b => {
                                                                return   `<li>${b}</li>`
                                                                })}
                                                         </ul>
                                                    </div>
                                                       
                                                    </li>`    
                                        })
                                    }

            
                                    </ul>
                                </div>
                            </div>`


            $(modalContainer).append(appender);
            $("body").append(modalContainer);
            $(modalContainer).ready(
                
                    $('.flexslider').flexslider({animation: "slide",slideshowSpeed: 10000,animationSpeed: 800, }) 
                                   
            );
            }
            $(".closeBtn").click(function(e) {
                e.preventDefault();
                $(".modalContainer").remove();
                $(clearStorage());
            }) ;
        
           
        });

    }
    
// function clearStorage() {
//             chrome.storage.local
//             .set({  key: ""},
//                     function() { console.log("Value is empty now");})
// }

    
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  console.log(request.greeting);
  checkStorage();


  });

})
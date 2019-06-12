window.addEventListener("load", () => {

            function modalCreator() {
                chrome.storage.local.get(["openCommand"], function(result) {
                            if (result.openCommand === "openModal") {
                                let modalContainer = document.createElement("modalContainer");
                                modalContainer.style.width = "100%";
                                modalContainer.style.height = "100%";
                                modalContainer.style.position = "fixed";
                                modalContainer.style.transform =
                                    "translateX(-50%) translateY(-50%)";
                                modalContainer.style.top = "50%";
                                modalContainer.style.left = "50%";
                                modalContainer.style.zIndex = "1000";
                                modalContainer.style.background = "rgba(0,0,0,.5)";
                                modalContainer.className = "modalContainer";

                                $("head").append(
                                    `<link href="https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap&subset=cyrillic" rel="stylesheet">`
                                );

                                

                                let appender = `<div class = "modalBox">
                                <div class ="closeBtn">&#10005;</div>
                                <div class="flexslider">
                                
                                    <ul class="slides">
                                    ${exercises.map(a => {
                                        return `<li>
                                                    <div class = "slides-items ${
                                                        a.bgColor
                                                    }">
                                                    <div class = "modalImage">
                                                        <img src = ${a.imageUrl}>
                                                    </div>
                                                    <div>
                                                    <div class = "instructionsBox">
                                                        <ul>
                                                            ${a.instructions.map(
                                                                b => {
                                                                    return `<li>${b}</li>`;
                                                                }
                                                            )}
                                                         </ul>
                                                    </div>
                                                       
                                                </li>`;
                                    })}

                                    </ul>
                                </div>
                            </div>`;

                $(modalContainer).append(appender);
                $("body").append(modalContainer);
                $(modalContainer).ready(
                    $(".flexslider").flexslider({
                        animation: "slide",
                        slideshowSpeed: 10000,
                        animationSpeed: 800
                    })
                );
            }
            $(".closeBtn").click(function(e) {
                e.preventDefault();
                $(".modalContainer").remove();
                
            });
        });
    }


function checkStorage() {
     
     chrome.storage.local.get(["startTime","frequence"],function(result) {
        let check =  setInterval(function() {
        let endTime = new Date().getMinutes();
        if(endTime - result.startTime === +result.frequence) {
            clearInterval(check)
            return modalCreator();
        }   
    },6000)

     });
     
}





    chrome.runtime.onMessage.addListener(function(
        request,
        sender,
        sendResponse
    ) {
        console.log(
            sender.tab
                ? "from a content script:" + sender.tab.url
                : "from the extension"
        );
        if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
        checkStorage();



    });
});
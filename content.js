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

            let appender = `<div class = "modalBox">
                                <div class ="closeBtn"></div>
                                <div class="flexslider">
                                
                                    <ul class="slides">
                                        <li>
                                            <div class = "slides-items greenBg">
                                                <div class = "modalImage">
                                                <img src = "https://cdn.dribbble.com/users/1056629/screenshots/6459209/dribbble_fireart_4.gif">
                                                </div>
                                                <div>
                                                    <div class = "instructionsBox">
                                                        <p>Короткие советы как делать упражнения
                                                        Короткие советы как делать упражнения
                                                        Короткие советы как делать упражнения
                                                        </p>
                                                    </div>
                                                    <img src="./images/navremya.svg">
                                                </div>
                                            </div
                                            
                                        </li>
                                         <li>
                                            <div class = "slides-items yellowBg">
                                                <div class = "modalImage">
                                                <img src = "https://cdn.dribbble.com/users/1056629/screenshots/6464387/dribbble_fireart_5.gif">
                                                </div>
                                                <div>
                                                    <div class = "instructionsBox"></div>
                                                    <img src="./images/navremya.svg">
                                                </div>
                                            </div
                                            
                                        </li>
                                         <li>
                                            <div class = "slides-items coralBg">
                                                <div class = "modalImage">
                                                <img src = "https://cdn.dribbble.com/users/1056629/screenshots/6553608/dribbble_fireart_7.gif">
                                                </div>
                                                <div>
                                                    <div class = "instructionsBox"></div>
                                                    <img src="./images/navremya.svg">
                                                </div>
                                            </div
                                            
                                        </li>
                                         <li>
                                            <div class = "slides-items greenBg">
                                                <div class = "modalImage">
                                                <img src = "https://cdn.dribbble.com/users/1056629/screenshots/6459209/dribbble_fireart_4.gif">
                                                </div>
                                                <div>
                                                    <div class = "instructionsBox"></div>
                                                    <img src="./images/navremya.svg">
                                                </div>
                                            </div                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>`


            $(modalContainer).append(appender);
            $("body").append(modalContainer);
            $(modalContainer).ready(
                
                    $('.flexslider').flexslider({animation: "slide",slideshowSpeed: 7200,animationSpeed: 800, }) 
                                   
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
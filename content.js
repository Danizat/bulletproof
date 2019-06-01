window.addEventListener("load", () => {
    function checkStorage() {
        chrome.storage.local.get(['openCommand'], function(result) {

            if (result.openCommand === "openModal") {
            // let modalContainer = document.createElement("modalContainer");
            modalContainer.style.width = "100%";
            modalContainer.style.height = "100%";
            modalContainer.style.position = "fixed";
            modalContainer.style.transform = "translateX(-50%) translateY(-50%)";
            modalContainer.style.top = "50%";
            modalContainer.style.left = "50%";
            modalContainer.style.zIndex = "1000";
            modalContainer.style.background = "rgba(0,0,0,.5)";
            modalContainer.className = "modalContainer";

            console.log("createElement");

            let appender = `<div class = "modalBox">
                                <div class="flexslider">
                                
                                    <ul class="slides">
                                        <li><div><img src = "https://cdn.dribbble.com/users/1056629/screenshots/6459209/dribbble_fireart_4.gif"></div></li>
                                        <li><div><button class = "closeBtn">Close</button></div></li>
                                        <li><div><img src = "https://cdn.dribbble.com/users/1056629/screenshots/6464387/dribbble_fireart_5.gif"></div></li>
                                        <li><div><img src ="https://cdn.dribbble.com/users/1056629/screenshots/6553608/dribbble_fireart_7.gif"></div></li>
                                        <li><div><img src = "https://cdn.dribbble.com/users/1056629/screenshots/6475612/dribbble_fireart_3.gif"></div></li>
                                        <li><div><audio controls autoplay ="true" src="http://www.tunescoop.com/play/343933323930/khalid-normani-love-lies-mp3" type="audio/mpeg">
 
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="http://www.tunescoop.com/play/343933323930/khalid-normani-love-lies-mp3">link to the audio</a> instead.</p>
</audio></div></li>
                                        <li><div>7</div></li>
                                        <li><div>8</div></li>
                                    </ul>
                                </div>
                            </div>`


            $(modalContainer).append(appender);
            $("body").append(modalContainer);
            $(modalContainer).ready(
                
                    $('.flexslider').flexslider({animation: "slide",slideshowSpeed: 5000,animationSpeed: 800, }) 
                                   
            );
            }
            $(".closeBtn").click(function(e) {
                e.preventDefault();
                $(".modalContainer").addClass("dNone");
                $(clearStorage());
            }) ;
            // $(".closeBtn").click($(console.log("watswrong"))) ;
            // $(".closeBtn").click($(clearStorage())) ;
            // $(".closeBtn").click($(checkStorage())) ;
            // $(".closeBtn").click($(".modalContainer").remove()) ;
           
        });

    }

    checkStorage();
    

function clearStorage() {
            chrome.storage.local
            .set({  key: ""},
                    function() { console.log("Value is empty now");})
}

    
    
 

})
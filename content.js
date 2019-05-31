window.addEventListener("load", () => {
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

            let appender = `<div class = "fakeBox"><div class="
                flexslider"><ul class="
                slides"><li><div><button class = "stopBtn">Stop</button></div></li><li><div>2</div></li><li><div>3</div></li></ul></div></div>`


            $(modalContainer).append(appender);
            $("body").append(modalContainer);

            $(modalContainer).ready(
                $('.flexslider').flexslider({
                    animation: "slide"
                })     
            );
             $(".stopBtn").click($('#slider').flexslider("stop"))

            // div.addEventListener("click", () => {()

            // chrome.storage.local.set({
            //             key: ""
            //         }, function() {
            //             console.log("Value is empty now");

            // })
            // })



        }
    });
})
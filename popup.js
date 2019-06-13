window.addEventListener("load", () => {
    chrome.storage.local.set({
            openCommand: "openModal"
        },
        function() {}
    );

   



    document.getElementById("hour-1").addEventListener("click",  ()  => setFrequence(1));
    document.getElementById("hour-2").addEventListener("click",  ()  => setFrequence(2));
    document.getElementById("hour-3").addEventListener("click",  ()  => setFrequence(3));

    
function setFrequence(e) {
    let startTime = new Date().getMinutes();
    chrome.storage.local.set({
            frequence: e,
            startTime:startTime
        },
        function() {
           messageSender()
        }
        
    );    

}




    function messageSender(e) {
        if (e) {
            e.preventDefault();
        }

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                greeting: "hello"
            }, function(
                response
        ) {
            let options = {
                    type: "basic",
                    title: "Частота установлена!",
                    message: "Упражнения появятся с установленной частотой.",
                    iconUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fapk4free.net%2Fwp-content%2Fuploads%2F2017%2F03%2FNotifications.png&f=1"
                };

                chrome.notifications.create(options, callback);

                function callback() {
                    console.log("Notifications!");
                }
            });
        });
    }

});
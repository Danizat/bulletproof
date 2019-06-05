window.addEventListener("load", () => {
    chrome.storage.local.set({
            openCommand: "openModal"
        }, function() {
            console.log('Value is set');
        
    });


let options = {
	type:"basic",
	title: "Пора к перерыву!",
	message:"Пришло время отдохнуть и сделать  упражнения",
  iconUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fapk4free.net%2Fwp-content%2Fuploads%2F2017%2F03%2FNotifications.png&f=1"

}


setTimeout(() => {  chrome.notifications.create(options,callback)
      function callback() {
      	console.log("notifications done");

      }},5000);


document.getElementById("check").addEventListener("click",messageSender);

function messageSender(e) {
e.preventDefault();

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});


}



})	
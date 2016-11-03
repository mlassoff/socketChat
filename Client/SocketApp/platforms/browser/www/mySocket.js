//mySocket.js

window.onload = function()
{
    var message = document.getElementById('message');
    var returns = document.getElementById('returns');
    var status = document.getElementById('status');
    var btnSend = document.getElementById('btnSend');
    var btnEnd = document.getElementById('btnEnd');
    
    var socket = new WebSocket('ws://echo.websocket.org');
    
    
    socket.onopen = function(e){
        status.innerHTML = "Connected to Socket at " + e.currentTarget.URL;
    }
    
    socket.onclose = function(e){
        status.innerHTML = "Disconnected";    
    }
    
    socket.onerror = function(err){
        status.innerHTML = "Error: " + err;
    }
    
    socket.onmessage = function(e){
        var message = e.data;
        returns.innerHTML += "<li>Received: " + message + "</li>";
    }
    
    btnSend.onclick = function(e) {
        e.preventDefault();
        
        var messageToSend = message.value;
        socket.send(messageToSend);
        returns.innerHTML += "<li>Sent: " + messageToSend + "</li>";
        message.value = "";
        return false;
    }
    
    btnEnd.onclick = function(e) {
        e.preventDefault();
        socket.close();
        return false;
    }
    
}
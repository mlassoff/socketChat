//mySocket.js

window.onload = function()
{
    var message = document.getElementById('message');
    var returns = document.getElementById('returns');
    var status = document.getElementById('status');
    var btnSend = document.getElementById('btnSend');
    var btnEnd = document.getElementById('btnEnd');
    var txtName = document.getElementById('txtName');
    
    var socket = new WebSocket('ws://localhost:8000/');
    
    
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
        returns.innerHTML += "<li>" + message + "</li>";
    }
    
    btnSend.onclick = function(e) {
        e.preventDefault();
        
        var messageToSend = txtName.value + ": " + message.value;
        socket.send(messageToSend);
        //returns.innerHTML += "<li>Sent: " + messageToSend + "</li>";
        message.value = "";
        return false;
    }
    
    btnEnd.onclick = function(e) {
        e.preventDefault();
        socket.close();
        return false;
    }
    
}
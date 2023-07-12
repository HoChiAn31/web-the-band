var inforApi = 'http://localhost:3000/infor_client'

function createInfor(data) {
    var option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(inforApi, option)
        .then((reponse) => {
            reponse.json()
        })
}
handleCreateInfor();
function handleCreateInfor() {
    var buttonSend = document.getElementById("send-infor")
    buttonSend.onclick = () => {
        var nameInfor = document.querySelector('input[name="name-infor"]').value;
        var emailInfor = document.querySelector('input[name="email-infor"]').value;
        var messageInfor = document.querySelector('input[name="message-infor"]').value;
        var dataInfor = {
            name : nameInfor,
            email: emailInfor,
            message:messageInfor
        }
        createInfor(dataInfor)
        getInfor()
    }
}


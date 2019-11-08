$(document).ready(() => {

    $("#add-btn").on("click", (event) => {
        event.preventDefault();
        var newParty = {
            name: $("#reserve-name").val().trim(),
            eMail: $("#reserve-email").val().trim(),
            phoneNumber: $("#reserve-phone").val().trim(),
            resID: $("#reserve-unique-id").val().trim(),
        };



        $.post("/api/tables", newParty)
            .then((data) => {
                console.log("reservations made", data);
            });
    });


});
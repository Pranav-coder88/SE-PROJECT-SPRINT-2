
window.onload = async () => {


    $.post('/queryingForCustomerList', (result) => {



        if (result.status == 'ok') {
            // console.log(result.data);
            data = result.data
            if (data[0].className == 'First Class') {



                $(document).ready(function () {

                    for (var i = 0; i <= data.length; i++) {

                        const path = data[i].isBoarded == 'True' ? 'IMAGES/accept.png' : 'IMAGES/multiply.png'


                        $('#firstClass').append('<div class="card customer-card border-primary "><div class="card-body"><h5 class="card-title" > ' + data[i].customerName + ' </h5><p class="card-text">Seat ' + data[i].customerSeat
                            + ' </p><img class="card-img" src=' + path + ' alt="Card image"><p class="card-text urgent-msg">Urgent Message : ' + data[i].msg + ' </p></div ></div>');



                    }



                })
                // alert('Success')
            }

            else if (data[0].className == 'Eco Class') {
                $(document).ready(function () {

                    for (var i = 0; i <= data.length; i++) {

                        const isBoarded = data[i].isBoarded == 'True' ? 'Checked In' : 'Not Checked In'


                        $('#firstClass').append('<div class="card customer-card border-primary "><div class="card-body"><h5 class="card-title" > ' + data[i].customerName + ' </h5><p class="card-text">Seat ' + data[i].customerSeat
                            + ' </p><p class="card-text">Status : ' + isBoarded + '</p><p class="card-text">Urgent Message : ' + data[i].msg + ' </p></div ></div>');



                    }



                })
            }
            else if (result.status == 'error') {
                console.log('error');
            }



        }
    });




    $.post('/queryingForUpdates', (result) => {

        console.log(result.customer);

        if (result.status == 'ok') {
            document.getElementById('id1').src = 'IMAGES/accept.png';



            // alert('Success')
        } else if (result.status == 'error') {
            document.getElementById('id1').src = 'IMAGES/multiply.png';

        }



    });



}


function isCustomerBoarded(){
    

    var customerSeat  = document.getElementById("customerSeat");
    var customerName = document.getElementById("customerName");
    var customerStatus =document.getElementById("customerStatus");
    

    const result =  await fetch('api/iscustomerBoarded', {
        method: 'POST',
        headers : {
              'Content-Type': 'application/json'
                  },
          body :JSON.stringify({customerSeat , customerName, customerStatus})
        }).then((res) => res.json())
      
      
    if (result.status === 'ok') {
                          // everythign went fine
                          console.log('Got the token: ', result.data)
                          localStorage.setItem('token', result.data)
                          alert('Success')
          } 
    else {
                          alert(result.error)
                      }

}
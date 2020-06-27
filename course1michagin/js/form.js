/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    var shippingName = document.getElementById('shippingName');
    var billingName = document.getElementById('billingName');
    var shippingZip = document.getElementById('shippingZip');
    var billingZip = document.getElementById('billingZip');
    var same = document.getElementById('same');
    if (same.checked){
      billingName.value = shippingName.value ;
      billingZip.value = shippingZip.value ;
          }
          else {
              billingName.value = null;
              billingZip.value = null ;
          }
  }
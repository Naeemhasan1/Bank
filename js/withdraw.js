document.getElementById('btn-withdraw').addEventListener('click' ,function(){
 
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmaountString=withdrawField.value;
    const newWithdrawAmaount=parseFloat(newWithdrawAmaountString);
    console.log(newWithdrawAmaount);

}) 
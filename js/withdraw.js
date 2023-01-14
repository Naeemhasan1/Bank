document.getElementById('btn-withdraw').addEventListener('click' ,function(){
 
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmaountString=withdrawField.value;
    const newWithdrawAmaount=parseFloat(newWithdrawAmaountString);
    console.log(newWithdrawAmaount);

    //clear field after click
    withdrawField.value='';
    // withdraw total link
    const withdrawTotal =document.getElementById('withdraw-total');
    //get  previous withdraw total
    const previousWithdrawTotalString=withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    


    // set new withdraw total
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmaount;
    withdrawTotal.innerText=newWithdrawTotal;

    // balance total link
    const balanceTotal=document.getElementById('balance-total');

    // get previous balance total
    const previousBalanceTotalString=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    // set new balance total

    

    if (newWithdrawAmaount>previousBalanceTotal)
    {
        alert("Baper eto taka nai")
    }
    else
    {
         const newBalanceTotal=previousBalanceTotal-newWithdrawAmaount;
       balanceTotal.innerText=newBalanceTotal;
    
    }




}) 
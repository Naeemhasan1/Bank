document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // clear field after click
    depositField.value='';
    // deposit total link
    const depositTotal =document.getElementById('deposit-total');
    // get previous deposit total
    const previousDepositTotalString=depositTotal.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    
    // set new deposit total
    const newDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotal.innerText=newDepositTotal

    // Balance total link
    const balanceTotal =document.getElementById('balance-total');
    // get previous balance total
    const previousBalanceTotalString= balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    
    // set new balance total
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;
    

})
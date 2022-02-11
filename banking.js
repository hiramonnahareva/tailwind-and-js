//  handle deposit button event 
  document.getElementById('Deposit-button').addEventListener('click' , function(){
    //  get the amount deposited 
    const depositInput = document.getElementById('Deposit-input');
    //  get the inner value from input 
    const depositAmountText  = depositInput.value ;
    //   convart input value from string to number
    const depositAmount = parseFloat (depositAmountText)
    //  get the amount previous deposited
    const depositTotal = document.getElementById('depositTotal') ;
    //  get the inner text form h4 
     const preDepositTotalText = depositTotal.innerText ;
     //  convert amount previous deposited
     const preDepositTotal = parseFloat (preDepositTotalText)
    //  clear the deposit input field 
     depositInput.value = '' ;
    const newDepositTotalAmount = depositAmount + preDepositTotal ;
    depositTotal.innerText = newDepositTotalAmount ;
     //  update balance of deposit
    const totalBalance = document.getElementById('balanceTotal');
    const preBalanceTotalText = totalBalance.innerText ;
    //   convart number from string 
    const perBalanceTotal = parseFloat(preBalanceTotalText) ;
    const newBalanceTotalAmount = perBalanceTotal + depositAmount ;
    totalBalance.innerText = newBalanceTotalAmount ;
})
// handale withdraw button event 
  document.getElementById('withdraw-button').addEventListener ('click' , function(){
      //  get the amount  withdraw 
    const withdrawInput = document.getElementById('withdraw-input') ;
      const withdrawAmounttext = withdrawInput.value ;
      const withdrawAmount = parseFloat (withdrawAmounttext) ;
      const WithdrawTotalText = document.getElementById ('withDrawTotal');
      const preWithdrawTotalText = WithdrawTotalText.innerText ;
    //   convart number from string 
      const preWithdrawTotal = parseFloat(preWithdrawTotalText)
      const newWithdrawTotal = withdrawAmount + preWithdrawTotal ;
      WithdrawTotalText.innerText = newWithdrawTotal ;
    //    clear the withdraw input field 
    withdrawInput.value = '' ;
   // update balance of withdraw
   const totalBalance = document.getElementById('balanceTotal');
   const preBalanceTotalText = totalBalance.innerText ;
   //   convart number from string 
   const perBalanceTotal = parseFloat(preBalanceTotalText) ;
   const newTotalBalance = perBalanceTotal - withdrawAmount ;
   totalBalance.innerText = newTotalBalance ;
  })
 

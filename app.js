//get Expense Input Value
function getExpenseInputValue(inputField){
  const inputFieldValue = document.getElementById(inputField)
  const inputValueString = inputFieldValue.value
  const inputValue = parseInt(inputValueString)
  inputFieldValue.value = ''
  return inputValue;
}

   //get expense amount
function getExpenseAmount(){
    const foodExpense = getExpenseInputValue('food')
    const rentExpense = getExpenseInputValue('rent')
    const clothExpense = getExpenseInputValue('cloth')
    const totalExpense = foodExpense + rentExpense + clothExpense
   return totalExpense
}

       //set value in element
function setValue(elementId, value){
  const elementIdField = document.getElementById(elementId)
  elementIdField.innerText = value

}






     // calculate
document.getElementById('calculate-btn').addEventListener('click', function(){
   const totalExpense = getExpenseAmount()
   setValue('total-expense', totalExpense)

   // get total balance
  const incomeValue =  getExpenseInputValue('income-input')
  const totalBalance = incomeValue - totalExpense
  setValue('balance', totalBalance)
  
})

 // save
 document.getElementById('save-btn').addEventListener('click', function(){
    const savePercentage = getExpenseInputValue('save-input')
    const totalBalanceField = document.getElementById('balance')
    const totalBalance = parseInt(totalBalanceField.innerText)
    const savingAmount = totalBalance / savePercentage
    setValue('saving-amount', savingAmount )

    const remainingBalance = totalBalance - savingAmount
    setValue('remaining', remainingBalance)
 })
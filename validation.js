
/**
 * form validation
 * input , checkbox , button
 */
 function sendForm(formId, btnType) {
  let formValidation = validationCheck(formId, btnType);

}

function validationCheck(formId, btnType) {
  let inputValidation =  inputNullCheck(formId, btnType)
}

function inputNullCheck(formId, btnType) {
  const a = document.getElementsByName("user_name");
  
  console.log(formId[0].values);
}

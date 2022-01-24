var accountInfoList = [];

var funcs = [];
for (var k= 0; k < 5; k++) {
  funcs[k] = function () {
      return k; 
  };
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

var Module = (function () {
  function Account(name, value) {
    this.accountType = name;
    this.depositVal = value;
  }

  const submit = document.querySelector("#submit");
  const textArea = document.querySelector("#text");

  submit.addEventListener("click", addAccount);

  function addAccount() {
    let accountName = document.querySelector("#account");
    let depositVal = document.querySelector("#deposit");
    const createdAccount = new Account(accountName.value, depositVal.value);
    accountInfoList.push(createdAccount);
    cleanArea();
    listAccount();
  }

  function cleanArea() {
    textArea.value = "";
  }

  function listAccount() {
    for (const account of accountInfoList) {
      textArea.value +=
        "Account Name: " +
        account.accountType +
        " " +
        "Balance: " +
        account.depositVal +
        "\r\n";
    }
  }

  return {
    addBankAccount: addAccount,
  };
})();

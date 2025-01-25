function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// The above function is incorrect, because it does not handle errors properly.
// In case of an error, it will not return an error message or an error code, it simply returns the undefined value.
// This can lead to unexpected behavior in the application.

// Here is a corrected version of the function that handles errors properly:
function getBalance() {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    console.error(error);
    return null; // Or throw the error
  }
}
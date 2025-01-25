function getBalance() {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    return null; // Or throw the error for more advanced error handling
  }
}

// Example usage (replace with your actual web3 instance and address):
async function main() {
  const address = '0xYOUR_ADDRESS';
  const balance = await getBalance(address);
  if (balance !== null) {
    console.log(`Balance: ${balance}`);
  } else {
    console.log('Failed to retrieve balance.');
  }
}
main();
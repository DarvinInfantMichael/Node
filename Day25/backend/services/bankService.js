export const transferMoneyService = async (
    sender,
    receiver,
    amount
) => {

    // 1. Validate amount
    if (amount <= 0) {
        throw new Error("Invalid transfer amount");
    }

    // 2. Check sender balance
    if (sender.balance < amount) {
        throw new Error("Insufficient balance");
    }

    // 3. Deduct amount from sender
    sender.balance -= amount;

    // 4. Add amount to receiver
    receiver.balance += amount;

    // 5. Return transaction details
    return {
        message: "Money transferred successfully",
        transferredAmount: amount,
        senderBalance: sender.balance,
        receiverBalance: receiver.balance
    };
};
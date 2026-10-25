export const transferMoneyService = (sender, receiver, amount) => {

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid transfer amount");
    }

    if (amount > 10000) {
        throw new Error("Daily transfer limit exceeded");
    }

    if (sender.id === receiver.id) {
        throw new Error("Cannot transfer to the same account");
    }

    let charge = 0;
    if(amount >5000){
        charge =amount*0.02;
    }
    const totalDeduction= amount+charge;

    if (sender.balance < totalDeduction) {
        throw new Error("Insufficient balance");
    }

    sender.balance = sender.balance - amount;

    receiver.balance = receiver.balance + amount;

    return {
        message: "Transfer Successful",
        amount: amount,
        totalDeduction: totalDeduction,
        senderBalance: sender.balance,
        receiverBalance: receiver.balance
    };
};

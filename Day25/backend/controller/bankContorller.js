import { transferMoneyService } from "../services/bankService.js";

export const transferMoney = async (req, res) => {
    try {
        const sender = {
            balance: 5000
        };

        const receiver = {
            balance: 2000
        };

        const amount = Number(req.body.amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            return res.status(400).json({
                message: "Enter a valid transfer amount"
            });
        }

        const result = await transferMoneyService(
            sender,
            receiver,
            amount
        );

        return res.status(200).json(result);

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
export interface PaypalPaymentRequestData {
    amount: number;
    paid: boolean;
    userWallet: string;
    orderedAkx: number;
    gasValue: number;
}
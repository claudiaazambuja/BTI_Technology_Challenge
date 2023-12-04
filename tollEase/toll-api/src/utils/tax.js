export default function tax(value) {
    const basePassageFee = 7.90;
    const discountRate = 0.05;

    const periods = Math.floor(value / 10);

    const totalDiscount = basePassageFee * discountRate * periods;

    const discountedValue = Math.max(basePassageFee - totalDiscount, 1.58);

    return discountedValue;
}
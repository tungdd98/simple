export const formatMoney = value => {
    return new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND"
    }).format(value);
};

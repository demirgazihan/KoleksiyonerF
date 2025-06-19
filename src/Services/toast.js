const icon = "🚀 ";
const toast = {
    primary: (text = "") => {
        Toastify({
            text: icon + text,
            duration: 3000,
            position: "right",
            style: {
                background: "rgb(var(--primary),1)",
            }
        }).showToast();
    },
    danger: (text = "") => {
        Toastify({
            text: icon + text,
            duration: 3000,
            position: "right",
            style: {
                background: "rgb(var(--danger),1)",
            }
        }).showToast();
    },
    success: (text = "") => {
        Toastify({
            text: icon + text,
            duration: 3000,
            position: "right",
            style: {
                background: "rgb(var(--success),1)",
            }
        }).showToast();
    },
}

export default toast;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
let timerInterval;
class SwalMessage {
    // success, error, info , warning
    toastMessage = (title, icon) => {
        Toast.fire({
            icon,
            title
        })
    };

    swalSuccess = (title, timer) => {
        Swal.fire({
            icon: "success",
            title,
            timer,
            timerProgressBar: false,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        })
    };
    swalErrorMessage = (title, message) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'Tamam'
        })
    };
    swalSuccessMessage = (title, message) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'Tamam'
        })
    };
    swalErrorMessageWithHtml = (title, html) => {
        Swal.fire({
            icon: 'error',
            title,
            html,
            confirmButtonText: 'Tamam'
        })
    }
}
export default new SwalMessage();



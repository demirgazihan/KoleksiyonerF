import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
let timerInterval: any;
class SwalMessage {
    // success, error, info , warning
    toastMessage = (title: any, icon: any) => {
        Toast.fire({
            icon,
            title
        })
    };

    swalSuccess = (title: any, timer: any) => {
        Swal.fire({
            icon: "success",
            title,
            timer,
            timerProgressBar: false,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        })
    };
    swalErrorMessage = (title: any, message: any) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'Tamam'
        })
    };
    swalSuccessMessage = (title: any, message: any) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'Tamam'
        })
    };
    swalErrorMessageWithHtml = (title: any, html: any) => {
        Swal.fire({
            icon: 'error',
            title,
            html,
            confirmButtonText: 'Tamam'
        })
    }
}
export default new SwalMessage();



import swal from 'sweetalert'
export function  useFlash() {
    function flash(msg, type,level = 'success') {
        swal(type,msg,level)
    }
    return {flash}
}
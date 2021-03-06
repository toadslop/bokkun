import "bootstrap";
import { toggleReceipt } from '../receiptEmployer/receipt-ticket';
import { employeeNavbarToggle } from '../employeeNavbar/toggle';
import '../plugins/flatpickr'
import { submitButton } from '../loadingOcr/loading_ocr'
import { autoSubmitPhoto } from '../plugins/submit_photo';

// Select2 requirements
import {initSelect2} from '../plugins/init_select2'
import 'select2/dist/css/select2.css';
// Collapse toggle
import {collapseToggle} from '../plugins/collapse_toggle'
// GCal Autofil
import {calAutofill} from '../plugins/cal-autofill'
import { activateButton } from '../plugins/activate_button'

initSelect2();
if(document.querySelector("#employeeNavbarToggle")){
  employeeNavbarToggle();
}

if(document.querySelectorAll('.receipt')){
  toggleReceipt();
}

if(document.getElementById("submit-receipt")){
  submitButton();
}

if(document.getElementById("collapse-link")){
  collapseToggle();
}

if(document.querySelectorAll('.items-body-content')){
calAutofill();
}

if(document.getElementById("check-button")) {
  activateButton();
}

autoSubmitPhoto();

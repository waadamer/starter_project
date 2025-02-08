// js files
import { handleSubmit } from './views/js/formHandler'

alert("I EXIST")
// console.log("CHANGE!!");

// sass files

import './views/styles/resets.scss';
import './views/styles/base.scss';
import './views/styles/footer.scss';
import './views/styles/form.scss';
import './views/styles/header.scss';


document.getElementById('urlForm').addEventListener('submit', handleSubmit); 

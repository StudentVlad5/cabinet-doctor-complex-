import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';

function export2Docx(element, filename = '') {
  const content = document.getElementById(element).innerHTML;
  const blob = htmlDocx.asBlob(content, { orientation: 'landscape' });
  saveAs(blob, filename || 'document.docx');
}

export { export2Docx };

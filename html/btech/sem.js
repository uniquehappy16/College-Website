// Function to get the value of a query parameter
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const pageHeading = document.getElementById('page-heading');
    const elementParam = getQueryParam('element');

    if (elementParam === 'syllabus') {
        pageHeading.textContent = 'Syllabus';
    } else if (elementParam === 'question-papers') {
        pageHeading.textContent = 'Question Papers';
    }
});

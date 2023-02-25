/* Offcanvas Sidebar's Functionalities */
const btnOffcanvasToggler = document.querySelector('.navbar-toggler');
const offcanvasSidebar = document.querySelector('#offcanvas');
const btnSidebarClose = document.querySelector(`.btn-close[data-bs-dismiss="offcanvas"]`);

// allows the Burger Menu <button> display/collapse the sidebar
btnOffcanvasToggler.addEventListener('click', () => {
    offcanvasSidebar.classList.toggle('show');
})
// allows the Sidebar's Close Icon Button to collapse the sidebar
btnSidebarClose.addEventListener('click', () => {
    offcanvasSidebar.classList.toggle('show');
})
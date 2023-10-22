window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const body = document.body;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#f2563f';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        body.style.backgroundColor = '#f9f9f9';
    } else {
        header.style.backgroundColor = '#333';
        header.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
        body.style.backgroundColor = '#f2f2f2';
    }
});

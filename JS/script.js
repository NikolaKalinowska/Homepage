let scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
};

document.getElementById('scroll-to-footer').addEventListener('click', scrollToFooter); 
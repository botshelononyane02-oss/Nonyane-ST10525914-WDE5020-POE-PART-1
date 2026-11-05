// Hamburger Menu
const hamburger = 
document.querySelector('hamburger');
const navLinks=
document.querySelector('.nav links');
if (hamburger) {
    hamburger.addEventListener('click', function() {

        navLinks.classList.toggle('active');
    });
}


    // Lightbox Part 3
    const productImages =
    document.querySelectorAll('.product-img');
    const lightbox =
    document.getElementById('lightbox');
    const lightboxImg =
    document.getElementById('lightbox-img');
    const closeBtn =
    document.getElementById('close-lightbox');

    if (productImages && lightbox) {
        productImages.forEach(function(img) {
            img.addEventListener('click',function() {
                lightbox.classList.add('show');
                lightboxImg.src = img.src;
            });
        });
        closeBtn.addEventListener('click', function(){
            lightbox.classList.remove('show');
        });
    }
    // Search Filter Part 3
    const searchInput =
    document.getElementById('search');
    const productCards =
    document.querySelectorAll('.products-grid > div');

    if(searchInput){
        searchInput.addEventListener('keyup', function() {
            const filter =
            searchInput.value.toLowerCase();
            productCards.forEach(function(card)
            {
                const text =
                card.textContent.toLowerCase();
                if (text.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    // FAQ According Part 3
    const faqs =
    document.querySelectorAll('.faq-question');
    faqs.forEach(function(q) {
        q.addEventListener('click', function() {
            const answer = 
            this.nextElementSibling;
            if (answer.style.displey === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display ='block';
            }
        });
    });

    // Form Validation Part 3 - Enquiry
    const enquiryForm = 
    document.getElementById('enquiry-form');
    if (enquiryForm) {

        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = 
            document.getElementById('name').value.trim();
            const email=
            document.getElementById('email').value.trim();
            const message =
            document.getElementById('message').value.trim
            if(name === '') {
                alert('Please enter your name');
                return;
            }
            if (email === '' || ! email.includes('@')) {
                alert('Please enter a valid email');
                return;
            }
            if(message === '') {
                alert('Please enter your message');
                return;
            }
            alert('Thank you' + name + '! Your enquiry has been sent.');
            enquiryForm.reset ();
        });
    } 
        

    
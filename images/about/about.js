document.addEventListener('DOMContentLoaded', function () {
    // Toggle Menu Functionality
    const menuBtn = document.querySelector('.menu-btn');
    const navbarLinksWrapper = document.querySelector('.navbar-links');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        navbarLinksWrapper.classList.toggle('active');
    });

    // Close Menu When Link is Clicked
    const navbarLinks = document.querySelectorAll('.navbar-links li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuBtn.classList.remove('active');
            navbarLinksWrapper.classList.remove('active');
        });
    });

    // Show/Hide Menu When Scrolling
    const homeSection = document.querySelector('#home');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 140) {
            homeSection.classList.add('active');
        } else {
            homeSection.classList.remove('active');
        }
    });

     // dropdown Section
     $(document).ready(function(){
        // Toggle dropdown menu on click
        $(".dropdown-toggle, .dropdown-btn").click(function(){
            $('.dropdown-menu').toggle();
        });
    
        // Show dropdown menu when moving pointer in
        $(".dropdown").mouseenter(function(){
            $(this).find('.dropdown-menu').show();
        });
    
        // Hide dropdown menu when moving pointer out
        $(".dropdown").mouseleave(function(){
            $(this).find('.dropdown-menu').hide();
        });
    
        // Bind click event to the arrow icon
        $(".arrow.down").click(function(event){
            event.stopPropagation(); // Prevent the event from bubbling up to the parent
            $(this).closest('.dropdown').find('.dropdown-menu').toggle();
        });
    
        // Hide dropdown menu when clicking outside the dropdown
        $(document).click(function(event) {
            if (!$(event.target).closest('.dropdown').length) {
                $('.dropdown-menu').hide();
            }
        });
    });
    
// Home Banner Section
$(document).ready(function () {
    var wordsLine3 = ['Digital Marketer', 'Web Developer',  'Freelancer', 'SEO Expert'];
    var part3;
    var k = 0;
    var offset3 = 0;
    var len3 = wordsLine3[0].length;
    var forwards3 = true;
    var skip_count3 = 0;
    var skip_delay = 15;
    var speed = 70;
    var interval;

    interval = setInterval(function () {
        // Line 3
        if (forwards3) {
            if (offset3 >= len3) {
                ++skip_count3;
                if (skip_count3 == skip_delay) {
                    forwards3 = false;
                    skip_count3 = 0;
                }
            }
        } else {
            if (offset3 == 0) {
                forwards3 = true;
                offset3 = 0;
                k++;
                if (k >= wordsLine3.length) {
                    k = 0;
                }
                len3 = wordsLine3[k].length;
            }
        }
        part3 = wordsLine3[k].substr(0, offset3);
        if (skip_count3 == 0) {
            if (forwards3) {
                offset3++;
            } else {
                offset3--;
            }
        }
        $('.line3 .flicker').text(part3);
    }, speed);
});


    // About Section
    const hireMeBtn = document.querySelector('.btn-box .btn');
const downloadCVBtn = document.querySelector('.btn-box .d-CV');

hireMeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "mailto:skapurbosarker6@gmail.com";
});

downloadCVBtn.addEventListener('click', function (e) {
    console.log('CV download initiated...');
});


    // Function to handle animation of facts
    function animateFacts() {
        const factBoxes = document.querySelectorAll('.fact-box');
        factBoxes.forEach(function (box) {
            const factValueElement = box.querySelector('h2');
            if (!factValueElement) return;
            const factValue = factValueElement.textContent.replace(/\D/g, '');
            const progressBar = box.querySelector('.progress-bar');
            const progressValue = box.querySelector('.progress-value');
            if (!progressBar || !progressValue) return;
    
            let currentValue = 0;
            const increment = factValue / 2000; // Adjust for 60fps
    
            function update() {
                currentValue += increment;
                if (currentValue > factValue) {
                    currentValue = factValue;
                }
    
                progressValue.textContent = Math.ceil(currentValue);
                progressBar.style.width = `${(currentValue / factValue) * 100}%`;
    
                if (currentValue < factValue) {
                    setTimeout(update, 16); // Update every ~16ms (60fps)
                }
            }
    
            update(); // Start the animation loop
        });
    }
    
    animateFacts();

    // Skills Section
    document.querySelectorAll('.skill').forEach(function (skill, index) {
        animateSkill(skill, [95, 87, 76, 63, 47][index]);
    });

    function animateSkill(skillElement, targetValue) {
        const circle = skillElement.querySelector('.outer-circle circle');
        const counterElement = skillElement.querySelector('.counter span');

        $({ Counter: 0, Progress: 0 }).animate(
            {
                Counter: targetValue,
                Progress: targetValue * 4.65,
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    counterElement.textContent = Math.ceil(this.Counter) + '%';
                    circle.style.strokeDashoffset = 464 - this.Progress + 'px';
                }
            }
        );
    }

    // Founder Section
    const founderPhoto = document.querySelector('.founder-photo');
    const founderDescription = document.getElementById('founderDescription');

    founderPhoto.addEventListener('click', function () {
        founderDescription.classList.toggle('active');
    });

    // Services Section
    const serviceBoxes = document.querySelectorAll('.services-contents .service-box');
    serviceBoxes.forEach(box => {
        const learnMoreLink = box.querySelector('a');
        learnMoreLink.addEventListener('click', function (e) {
            e.preventDefault();
            const serviceDetails = box.querySelector('.service-details');
            serviceDetails.classList.toggle('active');
        });
    });

    // Order Project Section
    const bKashPaymentButton = document.getElementById('bKashPaymentButton');
    bKashPaymentButton.addEventListener('click', async function (e) {
        e.preventDefault();
        try {
            const merchantId = '01324220899';
            const amount = 100;
            const paymentRequestID = generatePaymentRequestID();
            const paymentURL = `https://www.bkash.com/bKash-payment?merchantid=${merchantId}&paymentRequestId=${paymentRequestID}&amount=${amount}`;
            await openPaymentURL(paymentURL);
        } catch (error) {
            console.error('An error occurred while processing payment:', error);
        }
    });

    function generatePaymentRequestID() {
        return 'REQ' + Math.floor(Math.random() * 1000000);
    }

    async function openPaymentURL(url) {
        return new Promise((resolve, reject) => {
            const newWindow = window.open(url, '_blank');
            if (newWindow) {
                resolve();
            } else {
                reject(new Error('Popup blocked by the browser. Please allow popups and try again.'));
            }
        });
    }

    // Blogs Section
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        const viewPostLink = post.querySelector('a');
        viewPostLink.addEventListener('click', function (e) {
            e.preventDefault();
            const postUrl = viewPostLink.getAttribute('href');
            window.open(postUrl, '_blank');
        });
    });

    // Contact Section
    

    // Footer Section
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const newsletterForm = document.querySelector('.footer-newsletter form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[name="email"]');
        const email = emailInput.value.trim();
        if (email !== '') {
            console.log('Email subscribed:', email);
            emailInput.value = '';
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});







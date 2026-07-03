// ==========================================
// 1. კურსების ბარათების აკორდეონი (არსებული კოდი)
// ==========================================
// პოულობს საიტზე ყველა კურსის ბარათს
const courseCards = document.querySelectorAll('.course-card');

// თითოეულ ბარათზე ამაგრებს ქლიქის (დაჭერის) მსმენელს
courseCards.forEach(card => {
    card.addEventListener('click', () => {
        // თუ ბარათს აქვს კლასი 'active' - წაართმევს, თუ არა - დაუმატებს
        card.classList.toggle('active');
    });
});

// ==========================================
// 2. ვიდეოების ფილტრაციის ფუნქციონალი (არსებული კოდი)
// ==========================================
// პოულობს ფილტრის ყველა ღილაკს და ყველა ვიდეო ბარათს
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // აქტიური (მონიშნული) კლასის წაშლა ძველი ღილაკიდან
        document.querySelector('.filter-btn.active').classList.remove('active');
        // აქტიური კლასის დამატება იმ ღილაკზე, რომელსაც დავაჭირეთ
        button.classList.add('active');

        // ვიღებთ ინფორმაციას, თუ რა კატეგორიის ფილტრია ჩართული (all, motivation, coding)
        const filterValue = button.getAttribute('data-filter');

        videoCards.forEach(card => {
            // თუ ფილტრი არის 'all' ან ბარათის კატეგორია ემთხვევა დაჭერილ ღილაკს
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block'; // აჩვენე ბარათი
            } else {
                card.style.display = 'none'; // დამალე ბარათი
            }
        });
    });
});

// ==========================================
// 3. ვიდეოს პოპ-აპ (Modal) ფანჯარა (არსებული კოდი)
// ==========================================
// ელემენტების წამოღება DOM-იდან
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const closeModal = document.querySelector('.close-modal');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // იღებს ვიდეოს ლინკს კონკრეტული ბარათიდან
        const videoSrc = card.getAttribute('data-video-src');
        // სვამს ლინკს iframe-ში და ამატებს ავტოგაშვების პარამეტრს
        modalIframe.src = videoSrc + "?autoplay=1"; 
        // აჩვენებს მოდალურ ფანჯარას ეკრანზე
        modal.style.display = 'flex';
    });
});

// ვიდეოს მოდალის დახურვა 'X'-ზე დაჭერისას
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // მალავს ფანჯარას
    modalIframe.src = ""; // აქრობს ლინკს, რომ ფონზე ვიდეოს ხმა შეწყდეს
});

// ==========================================
// 4. ახალი დამატებული: Sign Up (რეგისტრაციის) ფანჯრის მართვა
// ==========================================
// ელემენტების წამოღება HTML-იდან
const signupModal = document.getElementById('signupModal');
const openSignupBtn = document.getElementById('open-signup');
const closeSignupBtn = document.querySelector('.close-signup');
const registrationForm = document.getElementById('registration-form');

// რეგისტრაციის ფორმის გახსნა ღილაკზე დაჭერისას
openSignupBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // აჩერებს ივენთის გავრცელებას, რომ უცებ ფონზე დაჭერად არ ჩაითვალოს
    signupModal.style.display = 'flex'; // აჩენს ფორმას
});

// რეგისტრაციის ფორმის დახურვა 'X'-ზე დაჭერისას
closeSignupBtn.addEventListener('click', () => {
    signupModal.style.display = 'none'; // მალავს ფორმას
});

// როცა მომხმარებელი ავსებს ველებს და აჭერს "დარეგისტრირდი"-ს
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // აჩერებს საიტის ავტომატურ გადატვირთვას ფორმის გაგზავნისას
    alert('რეგისტრაცია წარმატებით დასრულდა! კეთილი იყოს თქვენი მობრძანება GOA-ში!'); // წარმატების შეტყობინება
    registrationForm.reset(); // ასუფთავებს ფორმის ტექსტებს (ინპუტებს) მომდევნო ჯერისთვის
    signupModal.style.display = 'none'; // მალავს ფანჯარას
});

// გლობალური ივენთი: ფონზე (სიცარიელეში) დაჭერისას ფანჯრების ავტომატური დახურვა
window.addEventListener('click', (e) => {
    // თუ დავაჭირეთ ვიდეოს მოდალის გარე ფონს
    if (e.target === modal) {
        modal.style.display = 'none';
        modalIframe.src = ""; // ხმის გათიშვა
    }
    // თუ დავაჭირეთ რეგისტრაციის მოდალის გარე ფონს
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// ==========================================
// 5. Dark / Light თემის გადამრთველი და ლოგოების როტაცია
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const logoImg = document.getElementById('logo-img');

// !!! ლოგოების ფაილების/ლინკების ჩასასმელი ადგილი !!!
// შეცვალე ბრჭყალებში არსებული ტექსტები შენი ფაილების ზუსტი სახელებით (მაგ: "img/logo-dark.png")
const darkLogo = "GOA-2.png"; 
const lightLogo = "GOA-1.png"; 

themeToggle.addEventListener('click', () => {
    // უცვლის body-ს 'light-mode' კლასს (თუ აქვს წაართმევს, თუ არ აქვს მისცემს)
    document.body.classList.toggle('light-mode');
    
    // ვამოწმებთ, გადავიდა თუ არა საიტი თეთრ თემაზე
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️'; // იცვლება ღილაკის იკონკა მზეზე
        logoImg.src = lightLogo; // საიტის ზედა მარცხენა კუთხეში იტვირთება ლაით მოდის ლოგო
    } else {
        themeToggle.textContent = '🌙'; // ბრუნდება მთვარის იკონკა
        logoImg.src = darkLogo; // ბრუნდება მუქი თემის (Dark Mode) ლოგო
    }
});
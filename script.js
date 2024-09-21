document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    const mainSection = document.querySelector('main');
    const skillsSection = document.getElementById('skills');
    const closeBtn = skillsSection.querySelector('.close-btn');
    const aboutSection = document.getElementById('about');
    const aboutCloseBtn = aboutSection.querySelector('.close-btn');
    const worksSection = document.getElementById('works');
    const worksCloseBtn = worksSection.querySelector('.close-btn');
    const contactSection = document.getElementById('contact');
    const contactCloseBtn = contactSection.querySelector('.close-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            if (e.target.textContent.toLowerCase() === 'skills') {
                e.preventDefault();
                openSection(skillsSection);
            } else if (e.target.textContent.toLowerCase() === 'about') {
                e.preventDefault();
                openSection(aboutSection);
            } else if (e.target.textContent.toLowerCase() === 'works') {
                e.preventDefault();
                openSection(worksSection);
            } else if (e.target.textContent.toLowerCase() === 'contact') {
                e.preventDefault();
                openSection(contactSection);
            }
        });
    });

    // Typing effect for the job title and skills
    const jobTitle = document.querySelector('h2');
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'MongoDB'];
    let currentSkillIndex = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 150; // Increased from 100 to 150

    function typeSkill() {
        const currentSkill = skills[currentSkillIndex];
        
        if (isDeleting) {
            text = currentSkill.substring(0, text.length - 1);
        } else {
            text = currentSkill.substring(0, text.length + 1);
        }

        jobTitle.textContent = `Frontend Developer | ${text}`;

        if (!isDeleting && text === currentSkill) {
            isDeleting = true;
            typingSpeed = 300; // Increased from 200 to 300
        } else if (isDeleting && text === '') {
            isDeleting = false;
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            typingSpeed = 150; // Increased from 100 to 150
        }

        setTimeout(typeSkill, typingSpeed);
    }

    typeSkill();

    // Smooth scroll for hire me button
    const hireButton = document.querySelector('.hire-me');
    hireButton.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Parallax effect for profile image
    const profileImage = document.querySelector('.profile-image');
    window.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 30;
        let y = (window.innerHeight / 2 - e.pageY) / 30;
        profileImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    // Skills section functionality
    function openSection(section) {
        mainSection.style.display = 'none';
        section.classList.remove('hidden');
        section.classList.add('active');
    }

    function closeSection(section) {
        section.classList.remove('active');
        section.classList.add('hidden');
        mainSection.style.display = 'flex';
    }

    // Close button functionality
    closeBtn.addEventListener('click', () => closeSection(skillsSection));
    aboutCloseBtn.addEventListener('click', () => closeSection(aboutSection));
    worksCloseBtn.addEventListener('click', () => closeSection(worksSection));
    contactCloseBtn.addEventListener('click', () => closeSection(contactSection));

    // Escape key functionality
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSection(skillsSection);
            closeSection(aboutSection);
            closeSection(worksSection);
            closeSection(contactSection);
        }
    });

    // Skill item click event
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const skillName = item.getAttribute('data-skill');
            alert(`You clicked on ${skillName}`);
            // You can replace this with a more sophisticated action if needed
        });
    });
});
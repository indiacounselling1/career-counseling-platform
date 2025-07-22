// CareerPath India - Interactive JavaScript (Fixed Version)

// Data from the application
const educationData = {
  "9th": {
    description: "Foundation year - explore interests and prepare for stream selection",
    next_steps: ["Choose 10th board", "Career awareness", "Skill development"]
  },
  "10th": {
    description: "Board exams and stream selection preparation",
    streams: ["Science preparation", "Commerce preparation", "Arts preparation", "Vocational courses"]
  },
  "11th-12th": {
    streams: [
      {
        name: "Science",
        subcategories: [
          {
            name: "PCM (Physics, Chemistry, Math)",
            courses: ["Engineering", "Architecture", "Computer Science", "Mathematics"],
            careers: ["Software Engineer", "Civil Engineer", "Data Scientist", "Architect"]
          },
          {
            name: "PCB (Physics, Chemistry, Biology)",
            courses: ["Medicine", "Biotechnology", "Pharmacy", "Nursing"],
            careers: ["Doctor", "Pharmacist", "Medical Researcher", "Nurse"]
          }
        ]
      },
      {
        name: "Commerce",
        courses: ["B.Com", "BBA", "CA", "CS", "Economics"],
        careers: ["Chartered Accountant", "Business Analyst", "Banker", "Entrepreneur"]
      },
      {
        name: "Arts",
        courses: ["BA", "LLB", "Journalism", "Psychology", "Social Work"],
        careers: ["Lawyer", "Journalist", "Psychologist", "Civil Servant", "Teacher"]
      }
    ]
  }
};

const counselorsData = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Engineering & Technology Careers",
    experience: "15 years",
    rating: "4.9",
    sessions: "1200+"
  },
  {
    name: "Prof. Rajesh Kumar",
    specialization: "Medical & Healthcare Careers",
    experience: "20 years",
    rating: "4.8",
    sessions: "800+"
  },
  {
    name: "Ms. Anita Desai",
    specialization: "Commerce & Business Careers",
    experience: "12 years",
    rating: "4.9",
    sessions: "950+"
  }
];

const featuresData = [
  {
    title: "Comprehensive Database",
    description: "Access information on 5000+ courses, 2000+ colleges, and 500+ career options",
    icon: "📊"
  },
  {
    title: "Expert Counselors",
    description: "Connect with 500+ verified career counselors across India",
    icon: "👩‍🏫"
  },
  {
    title: "Aptitude Testing",
    description: "Scientific assessments to identify your strengths and interests",
    icon: "🧠"
  },
  {
    title: "College Recommendations",
    description: "Get personalized college suggestions based on your profile",
    icon: "🏫"
  }
];

const testimonialsData = [
  {
    name: "Arjun Patel",
    achievement: "IIT Delhi - Computer Science",
    quote: "CareerPath helped me choose the right stream and college. Best decision ever!"
  },
  {
    name: "Priya Singh",
    achievement: "AIIMS Delhi - Medicine",
    quote: "The counselors guided me perfectly for medical entrance preparation."
  },
  {
    name: "Rahul Gupta",
    achievement: "IIM Bangalore - MBA",
    quote: "From commerce in 11th to MBA at IIM - the journey was well planned here."
  }
];

// Global functions that need to be available immediately
window.scrollToSection = function(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

window.showCareerDetails = function(career) {
  alert(`Career Details for ${career}

This would open a detailed page with:
• Job description & responsibilities
• Required skills & qualifications
• Average salary ranges in India
• Career growth prospects
• Top recruiting companies
• Educational pathways
• Professional certifications
• Work environment details

Click "Book Counseling Session" for personalized guidance!`);
};

window.bookSession = function(counselorName) {
  alert(`Booking Session with ${counselorName}

📅 Available Features:
• Choose from available time slots
• Select session type (Online/In-person)
• Duration: 30 min / 1 hour / 2 hours
• Pricing: ₹500 - ₹2000 per session
• Payment options: UPI, Card, Net Banking
• Get instant confirmation via SMS/Email

Would you like to proceed with booking?`);
};

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mobileNav.classList.toggle('show');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('show');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }
}

// Career exploration functionality
function initializeCareerExplorer() {
  // Wait a bit to ensure DOM is fully loaded
  setTimeout(() => {
    const classCards = document.querySelectorAll('.class-card');
    console.log('Found class cards:', classCards.length);

    classCards.forEach((card, index) => {
      console.log(`Setting up card ${index}:`, card.dataset.class);

      // Remove any existing listeners
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);

      // Add click listener to the button inside the card
      const button = newCard.querySelector('.btn');
      if (button) {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const selectedClass = newCard.dataset.class;
          console.log('Class selected:', selectedClass);
          showStreamOptions(selectedClass);

          // Add active state
          document.querySelectorAll('.class-card').forEach(c => c.classList.remove('active'));
          newCard.classList.add('active');
        });
      }

      // Also add click to the entire card
      newCard.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
          const selectedClass = newCard.dataset.class;
          console.log('Class card clicked:', selectedClass);
          showStreamOptions(selectedClass);

          // Add active state
          document.querySelectorAll('.class-card').forEach(c => c.classList.remove('active'));
          newCard.classList.add('active');
        }
      });
    });
  }, 100);
}

function showStreamOptions(selectedClass) {
  console.log('Showing stream options for:', selectedClass);

  const streamSelector = document.getElementById('streamSelector');
  const streamGrid = document.getElementById('streamGrid');
  const courseSelector = document.getElementById('courseSelector');
  const careerSelector = document.getElementById('careerSelector');

  if (!streamSelector || !streamGrid) {
    console.error('Stream selector elements not found');
    return;
  }

  // Hide other selectors
  if (courseSelector) courseSelector.classList.add('hidden');
  if (careerSelector) careerSelector.classList.add('hidden');

  // Clear previous content
  streamGrid.innerHTML = '';

  if (selectedClass === '9th') {
    streamGrid.innerHTML = `
      <div class="stream-item" onclick="showNext9thOptions()">
        <h4>🎯 Career Awareness</h4>
        <p>Explore different career fields and understand your interests</p>
      </div>
      <div class="stream-item" onclick="showNext9thOptions()">
        <h4>🛠️ Skill Development</h4>
        <p>Focus on building foundational skills and talents</p>
      </div>
      <div class="stream-item" onclick="showNext9thOptions()">
        <h4>📚 Subject Selection</h4>
        <p>Choose subjects that align with your interests and career goals</p>
      </div>
    `;
  } else if (selectedClass === '10th') {
    educationData['10th'].streams.forEach(stream => {
      const streamElement = document.createElement('div');
      streamElement.className = 'stream-item';
      streamElement.innerHTML = `
        <h4>${stream}</h4>
        <p>Prepare for ${stream.toLowerCase()} in higher secondary</p>
      `;
      streamElement.addEventListener('click', () => show10thNextSteps(stream));
      streamGrid.appendChild(streamElement);
    });
  } else if (selectedClass === '11th-12th') {
    educationData['11th-12th'].streams.forEach(stream => {
      const streamElement = document.createElement('div');
      streamElement.className = 'stream-item';
      streamElement.innerHTML = `
        <h4>🎓 ${stream.name}</h4>
        <p>Explore ${stream.name.toLowerCase()} career opportunities</p>
      `;
      streamElement.addEventListener('click', () => showCourseOptions(stream));
      streamGrid.appendChild(streamElement);
    });
  }

  streamSelector.classList.remove('hidden');
  streamSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.showNext9thOptions = function() {
  alert(`9th Grade Next Steps

🎯 Recommended Actions:
• Take career interest surveys
• Explore different subjects in depth
• Participate in extracurricular activities
• Meet professionals from various fields
• Start building basic computer skills
• Develop communication & leadership skills

📚 Subject Focus Areas:
• Mathematics & Science fundamentals
• Language & communication skills
• Social sciences understanding
• Creative arts exploration

Would you like to book a counseling session for detailed guidance?`);
};

function show10thNextSteps(stream) {
  alert(`10th Grade - ${stream}

📋 Preparation Checklist:
• Focus on board exam preparation
• Research colleges for 11th-12th
• Understand entrance exam requirements
• Build subject-specific skills
• Connect with seniors in chosen stream

🎯 Stream-Specific Guidance:
${stream === 'Science preparation' ? '• Master PCM/PCB fundamentals\n• Prepare for JEE/NEET early' :
  stream === 'Commerce preparation' ? '• Understand business fundamentals\n• Develop analytical thinking' :
  '• Explore creative writing\n• Develop critical thinking skills'}

Book a counseling session for personalized roadmap!`);
}

function showCourseOptions(stream) {
  console.log('Showing courses for stream:', stream);

  const courseSelector = document.getElementById('courseSelector');
  const courseGrid = document.getElementById('courseGrid');
  const careerSelector = document.getElementById('careerSelector');

  if (!courseSelector || !courseGrid) {
    console.error('Course selector elements not found');
    return;
  }

  if (careerSelector) careerSelector.classList.add('hidden');
  courseGrid.innerHTML = '';

  if (stream.subcategories) {
    // Science stream with subcategories
    stream.subcategories.forEach(subcat => {
      subcat.courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-item';
        courseElement.innerHTML = `
          <h4>📘 ${course}</h4>
          <p>From ${subcat.name}</p>
        `;
        courseElement.addEventListener('click', () => showCareerOptions(subcat.careers));
        courseGrid.appendChild(courseElement);
      });
    });
  } else {
    // Direct courses for Commerce/Arts
    stream.courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.className = 'course-item';
      courseElement.innerHTML = `
        <h4>📘 ${course}</h4>
        <p>Popular choice in ${stream.name}</p>
      `;
      courseElement.addEventListener('click', () => showCareerOptions(stream.careers));
      courseGrid.appendChild(courseElement);
    });
  }

  courseSelector.classList.remove('hidden');
  courseSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showCareerOptions(careers) {
  console.log('Showing careers:', careers);

  const careerSelector = document.getElementById('careerSelector');
  const careerGrid = document.getElementById('careerGrid');

  if (!careerSelector || !careerGrid) {
    console.error('Career selector elements not found');
    return;
  }

  careerGrid.innerHTML = '';

  careers.forEach(career => {
    const careerElement = document.createElement('div');
    careerElement.className = 'career-item';
    careerElement.innerHTML = `
      <h4>💼 ${career}</h4>
      <p>Learn more about this career path</p>
      <button class="btn btn--sm btn--primary" onclick="showCareerDetails('${career}')">View Details</button>
    `;
    careerGrid.appendChild(careerElement);
  });

  careerSelector.classList.remove('hidden');
  careerSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Load dynamic content
function loadFeatures() {
  const featuresGrid = document.getElementById('featuresGrid');
  if (!featuresGrid) return;

  featuresData.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `
      <div class="feature-icon">${feature.icon}</div>
      <h4>${feature.title}</h4>
      <p>${feature.description}</p>
    `;
    featuresGrid.appendChild(featureCard);
  });
}

function loadCounselors() {
  const counselorsGrid = document.getElementById('counselorsGrid');
  if (!counselorsGrid) return;

  counselorsData.forEach(counselor => {
    const counselorCard = document.createElement('div');
    counselorCard.className = 'counselor-card';

    // Get initials for avatar
    const initials = counselor.name.split(' ').map(name => name[0]).join('');

    counselorCard.innerHTML = `
      <div class="counselor-avatar">${initials}</div>
      <h4>${counselor.name}</h4>
      <div class="counselor-rating">⭐ ${counselor.rating} (${counselor.sessions} sessions)</div>
      <p class="counselor-specialization">${counselor.specialization}</p>
      <p class="counselor-experience">${counselor.experience} experience</p>
      <button class="btn btn--primary" onclick="bookSession('${counselor.name}')">Book Session</button>
    `;
    counselorsGrid.appendChild(counselorCard);
  });
}

function loadTestimonials() {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (!testimonialsGrid) return;

  testimonialsData.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';

    // Get initials for avatar
    const initials = testimonial.name.split(' ').map(name => name[0]).join('');

    testimonialCard.innerHTML = `
      <div class="testimonial-avatar">${initials}</div>
      <h4>${testimonial.name}</h4>
      <p class="testimonial-achievement">${testimonial.achievement}</p>
      <p class="testimonial-quote">"${testimonial.quote}"</p>
    `;
    testimonialsGrid.appendChild(testimonialCard);
  });
}

// Smooth scroll for navigation links
function initializeSmoothScroll() {
  // Handle all navigation links
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
      e.preventDefault();
      const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
      const targetId = link.getAttribute('href').substring(1);
      if (targetId) {
        scrollToSection(targetId);
      }
    }
  });
}

// Form handling for aptitude test
function initializeAptitudeTest() {
  // Handle all aptitude test buttons
  document.addEventListener('click', function(e) {
    if (e.target.textContent && e.target.textContent.includes('Aptitude Test')) {
      e.preventDefault();
      alert(`🧠 Comprehensive Aptitude Test

📋 Test Components:
• Personality Assessment (15 mins)
• Interest Inventory (10 mins)
• Cognitive Abilities (20 mins)
• Values & Motivations (10 mins)

📊 What You'll Get:
• Detailed personality profile
• Top 5 career matches (with %)
• Strengths & development areas
• Recommended education paths
• Personalized action plan

💰 Pricing: FREE for first attempt
⏰ Duration: ~55 minutes
📱 Available on mobile & desktop

Ready to discover your ideal career path?`);
    }
  });
}

// CTA button handlers
function initializeCTAButtons() {
  document.addEventListener('click', function(e) {
    if (e.target.textContent) {
      if (e.target.textContent.includes('Consultation')) {
        e.preventDefault();
        scrollToSection('counselors');
      } else if (e.target.textContent.includes('Membership')) {
        e.preventDefault();
        alert(`💎 CareerPath India Membership Plans

🌟 BASIC PLAN - ₹999/month
• 2 counseling sessions per month
• Complete aptitude test access
• Career database (5000+ courses)
• Email support

⭐ PREMIUM PLAN - ₹1999/month
• Unlimited counseling sessions
• Priority booking (24hr response)
• Personalized career roadmap
• College application support
• Phone & chat support

🚀 ELITE PLAN - ₹4999/month
• All premium features included
• Dedicated career mentor
• Interview preparation sessions
• Job placement assistance
• Resume building & LinkedIn optimization
• Industry networking events access

💸 Special Offers:
• 20% off on annual plans
• Free 7-day trial for Premium/Elite
• Student discounts available

Which plan interests you most?`);
      }
    }
  });
}

// Add scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  setTimeout(() => {
    const elements = document.querySelectorAll('.card, .feature-card, .counselor-card, .testimonial-card, .class-card');
    elements.forEach(el => observer.observe(el));
  }, 100);
}

// Add active states for navigation
function initializeNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...');

  // Initialize all functionality
  initializeMobileMenu();
  initializeSmoothScroll();
  initializeScrollAnimations();
  initializeAptitudeTest();
  initializeCTAButtons();
  initializeNavigation();

  // Load dynamic content
  loadFeatures();
  loadCounselors();
  loadTestimonials();

  // Initialize career explorer after a short delay
  setTimeout(initializeCareerExplorer, 200);

  console.log('All initialization complete');
});

// Handle window load for additional setup
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  console.log('Window fully loaded');
});

// Handle booking setup
document.addEventListener("DOMContentLoaded", function() {
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("bookingName").value.trim();
      const email = document.getElementById("bookingEmail").value.trim();
      const date = document.getElementById("bookingDate").value;
      const statusDiv = document.getElementById("bookingStatus");

      // Simulate booking success for static site (you'll link this to backend later)
      if (name && email && date) {
        statusDiv.textContent = "Booking successful! We'll follow up via email.";
        statusDiv.className = "success-msg";
        bookingForm.reset();
      } else {
        statusDiv.textContent = "Please fill all fields.";
        statusDiv.className = "error-msg";
      }
    });
  }
});

/***** 1. DATA: Employment, counselors, etc. *****/
// (trimmed for brevity – full objects were provided earlier)
const employmentStats={india:{overallUnemployment:"3.2%",youthUnemployment:"10.2%",organizedSectorSalary:"₹22-35k",unorganizedSectorSalary:"₹8-12k",organizedWorkforce:"8-10%",unorganizedWorkforce:"90-92%"},haryana:{overallUnemployment:"4.1%",youthUnemployment:"11.2%",organizedSectorSalary:"₹25-40k",unorganizedSectorSalary:"₹9-12k",perCapitaIncome:"₹29,432/month"}};
const enhancedCounselorsData=[{name:"Dr. Priya Sharma",specialization:"Engineering & Technology",consultationFee:"₹1500/hour"},{name:"Prof. Rajesh Kumar",specialization:"Medical & Healthcare",consultationFee:"₹2000/hour"},{name:"Ms. Anita Desai",specialization:"Commerce & Business",consultationFee:"₹1200/hour"}];

/***** 2. BOOKING MODAL LOGIC *****/
// show modal
document.querySelectorAll(".book-session-btn").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();const m=document.getElementById("bookingModal");if(m){m.style.display="flex";injectCounselorSelect();}}));
// close modal
const closeBtn=document.getElementById("closeBooking");if(closeBtn){closeBtn.onclick=()=>{const m=document.getElementById("bookingModal");if(m)m.style.display="none";};}
window.onclick=e=>{const m=document.getElementById("bookingModal");if(m&&e.target===m)m.style.display="none";};

function injectCounselorSelect(){if(document.getElementById("selectedCounselor"))return;const select=document.createElement("select");select.id="selectedCounselor";select.required=true;select.innerHTML=`<option value="">Select a Counselor</option>${enhancedCounselorsData.map(c=>`<option value="${c.name}">${c.name} – ${c.consultationFee}</option>`).join("")}`;const phoneField=document.getElementById("bookingPhone").parentNode;phoneField.parentNode.insertBefore(select,phoneField.nextSibling);} // insert after phone field

// handle submit
const bookingForm=document.getElementById("bookingForm");if(bookingForm){bookingForm.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("bookingName").value.trim();const em=document.getElementById("bookingEmail").value.trim();const d=document.getElementById("bookingDate").value;const c=document.getElementById("selectedCounselor").value;const stat=document.getElementById("bookingStatus");if(n&&em&&d&&c){stat.textContent=`Booking confirmed with ${c}. You will receive an email shortly.`;stat.className="success-msg";bookingForm.reset();}else{stat.textContent="Please fill all fields.";stat.className="error-msg";}});} 

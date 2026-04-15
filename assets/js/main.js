document.addEventListener("DOMContentLoaded", () => {
	// UI behaviors: translations, theme, sliders, filters, and forms.
	const translations = {
		en: {
			"nav.skip": "Skip to content",
			"nav.brand": "University Events",
			"nav.home": "Home",
			"nav.events": "Events",
			"nav.eventDetails": "Event Details",
			"nav.about": "About",
			"nav.contact": "Contact",
			"home.eyebrow": "Campus events guide",
			"home.title": "Discover what is happening this week",
			"home.subtitle": "A curated schedule of lectures, sports, culture, and student-led workshops across the university.",
			"home.featured.eyebrow": "Featured",
			"home.featured.title": "Spotlight events this week",
			"home.featured.card1.badge": "Culture",
			"home.featured.card1.date": "Apr 13, 7:00 PM",
			"home.featured.card1.title": "Spring Arts Festival Opening Night",
			"home.featured.card1.text": "Live performances, student showcases, and a rooftop reception highlighting the arts program.",
			"home.featured.card1.meta1": "Auditorium A",
			"home.featured.card1.meta2": "Hosted by Fine Arts Council",
			"home.featured.card2.badge": "Research",
			"home.featured.card2.date": "Apr 15, 4:30 PM",
			"home.featured.card2.title": "Innovation Forum: Future of Climate Tech",
			"home.featured.card2.text": "A faculty-led panel with student demos and rapid-fire lightning talks.",
			"home.featured.card2.meta1": "Science Atrium",
			"home.featured.card2.meta2": "Engineering & Sustainability",
			"home.featured.card3.badge": "Sports",
			"home.featured.card3.date": "Apr 17, 6:00 PM",
			"home.featured.card3.title": "Night Run & Wellness Walk",
			"home.featured.card3.text": "A campus-wide 5K with recovery stations, live DJ set, and student wellness booths.",
			"home.featured.card3.meta1": "Main Quad",
			"home.featured.card3.meta2": "Athletics Department",
			"home.categories.eyebrow": "Categories",
			"home.categories.title": "Find events by theme",
			"home.latest.eyebrow": "Latest",
			"home.latest.title": "Newest additions to the calendar",
			"home.latest.card1.badge": "Culture",
			"home.latest.card1.date": "Apr 14, 3:00 PM",
			"home.latest.card1.title": "Global Heritage Showcase",
			"home.latest.card1.text": "Student-led booths featuring food, art, and performances from 20+ cultures.",
			"home.latest.card1.location": "Student Center Plaza",
			"home.latest.card2.badge": "Research",
			"home.latest.card2.date": "Apr 15, 11:00 AM",
			"home.latest.card2.title": "Undergrad Research Expo",
			"home.latest.card2.text": "Poster sessions, live demos, and faculty feedback for senior capstone projects.",
			"home.latest.card2.location": "Innovation Hall",
			"home.latest.card3.badge": "Sports",
			"home.latest.card3.date": "Apr 16, 7:30 AM",
			"home.latest.card3.title": "Sunrise Fitness Circuit",
			"home.latest.card3.text": "A guided circuit workout with trainers, hydration bar, and mobility drills.",
			"home.latest.card3.location": "East Field",
			"home.latest.card4.badge": "Workshops",
			"home.latest.card4.date": "Apr 16, 2:00 PM",
			"home.latest.card4.title": "Design Sprint Studio",
			"home.latest.card4.text": "Rapid prototyping with mentors to solve real campus challenges.",
			"home.latest.card4.location": "Design Lab",
			"home.latest.card5.badge": "Music",
			"home.latest.card5.date": "Apr 17, 8:00 PM",
			"home.latest.card5.title": "Evening Jazz on the Lawn",
			"home.latest.card5.text": "Student ensembles perform live with pop-up refreshments and lounge seating.",
			"home.latest.card5.location": "West Lawn",
			"home.latest.card6.badge": "Volunteer",
			"home.latest.card6.date": "Apr 18, 9:30 AM",
			"home.latest.card6.title": "Community Service Connect",
			"home.latest.card6.text": "Meet local partners, sign up for service hours, and join weekend initiatives.",
			"home.latest.card6.location": "Civic Hub",
			"category.all": "All",
			"category.culture": "Culture",
			"category.sports": "Sports",
			"category.workshops": "Workshops",
			"category.career": "Career",
			"category.research": "Research",
			"category.music": "Music",
			"category.volunteer": "Volunteer",
			"events.hero.eyebrow": "All events",
			"events.hero.title": "Browse upcoming events",
			"events.hero.subtitle": "Filter by category, date, and location to find the right experience.",
			"events.filters.eyebrow": "Filters",
			"events.filters.title": "Refine your event search",
			"events.filters.category": "Category",
			"events.filters.location": "Location",
			"events.filters.date": "Date",
			"location.studentCenter": "Student Center Plaza",
			"location.innovationHall": "Innovation Hall",
			"location.mainQuad": "Main Quad",
			"location.designLab": "Design Lab",
			"location.westLawn": "West Lawn",
			"location.civicHub": "Civic Hub",
			"location.careerCenter": "Career Center",
			"location.libraryForum": "Library Forum",
			"events.card1.badge": "Culture",
			"events.card1.date": "Apr 14, 3:00 PM",
			"events.card1.title": "Global Heritage Showcase",
			"events.card1.text": "Student-led booths featuring food, art, and performances from 20+ cultures.",
			"events.card1.location": "Student Center Plaza",
			"events.card2.badge": "Research",
			"events.card2.date": "Apr 15, 11:00 AM",
			"events.card2.title": "Undergrad Research Expo",
			"events.card2.text": "Poster sessions, live demos, and faculty feedback for senior capstone projects.",
			"events.card2.location": "Innovation Hall",
			"events.card3.badge": "Sports",
			"events.card3.date": "Apr 17, 6:00 PM",
			"events.card3.title": "Night Run & Wellness Walk",
			"events.card3.text": "A campus-wide 5K with recovery stations, live DJ set, and student wellness booths.",
			"events.card3.location": "Main Quad",
			"events.card4.badge": "Workshops",
			"events.card4.date": "Apr 16, 2:00 PM",
			"events.card4.title": "Design Sprint Studio",
			"events.card4.text": "Rapid prototyping with mentors to solve real campus challenges.",
			"events.card4.location": "Design Lab",
			"events.card5.badge": "Music",
			"events.card5.date": "Apr 17, 8:00 PM",
			"events.card5.title": "Evening Jazz on the Lawn",
			"events.card5.text": "Student ensembles perform live with pop-up refreshments and lounge seating.",
			"events.card5.location": "West Lawn",
			"events.card6.badge": "Volunteer",
			"events.card6.date": "Apr 18, 9:30 AM",
			"events.card6.title": "Community Service Connect",
			"events.card6.text": "Meet local partners, sign up for service hours, and join weekend initiatives.",
			"events.card6.location": "Civic Hub",
			"events.card7.badge": "Career",
			"events.card7.date": "Apr 19, 1:00 PM",
			"events.card7.title": "Career Portfolio Clinic",
			"events.card7.text": "Get resume reviews, portfolio feedback, and mock interview sessions with mentors.",
			"events.card7.location": "Career Center",
			"events.card8.badge": "Culture",
			"events.card8.date": "Apr 20, 7:00 PM",
			"events.card8.title": "Library After Dark: Poetry",
			"events.card8.text": "An evening of spoken word, acoustic sessions, and student-written zines.",
			"events.card8.location": "Library Forum",
			"event.hero.eyebrow": "Event details",
			"event.hero.title": "Event spotlight",
			"event.hero.subtitle": "Full schedule, location details, and gallery at a glance.",
			"event.badge": "Culture",
			"event.title": "Spring Arts Festival Opening Night",
			"event.subtitle": "A celebration of student-led performances, gallery installations, and the official festival welcome.",
			"event.meta.dateLabel": "Date",
			"event.meta.timeLabel": "Time",
			"event.meta.locationLabel": "Location",
			"event.meta.hostLabel": "Host",
			"event.meta.dateValue": "Saturday, Apr 13, 2026",
			"event.meta.timeValue": "7:00 PM - 10:00 PM",
			"event.meta.locationValue": "Auditorium A",
			"event.meta.hostValue": "Fine Arts Council",
			"event.overview.title": "Event overview",
			"event.overview.p1": "Kick off the annual Spring Arts Festival with an evening of live performances, immersive installations, and student showcases across multiple disciplines. The opening night highlights the most anticipated acts and unveils a curated gallery of senior work.",
			"event.overview.p2": "Arrive early for the courtyard welcome reception and meet the artists, faculty mentors, and community partners who shaped this season.",
			"event.expect.title": "What to expect",
			"event.expect.item1": "Live music, dance, and spoken word performances",
			"event.expect.item2": "Interactive art installations and open studio tours",
			"event.expect.item3": "Festival lounge with refreshments and networking",
			"event.map.title": "Campus map",
			"event.map.text": "Auditorium A is adjacent to the Student Center entrance. Accessible parking is available at Gate 3.",
			"event.map.tag1": "Accessible",
			"event.map.tag2": "Indoor",
			"event.side.title": "Need help?",
			"event.side.text": "Contact the events desk for accessibility seating, media passes, or group reservations.",
			"event.gallery.eyebrow": "Gallery",
			"event.gallery.title": "Moments from past festivals",
			"event.gallery.caption1": "Student gallery walk",
			"event.gallery.caption2": "Outdoor performance stage",
			"event.gallery.caption3": "Interactive installations",
			"event.gallery.caption4": "Evening celebration",
			"event.related.eyebrow": "Related",
			"event.related.title": "Continue your cultural week",
			"event.related.card1.badge": "Culture",
			"event.related.card1.date": "Apr 14, 3:00 PM",
			"event.related.card1.title": "Global Heritage Showcase",
			"event.related.card1.text": "Student-led booths featuring food, art, and performances from 20+ cultures.",
			"event.related.card1.location": "Student Center Plaza",
			"event.related.card2.badge": "Workshops",
			"event.related.card2.date": "Apr 16, 2:00 PM",
			"event.related.card2.title": "Design Sprint Studio",
			"event.related.card2.text": "Rapid prototyping with mentors to solve real campus challenges.",
			"event.related.card2.location": "Design Lab",
			"event.related.card3.badge": "Sports",
			"event.related.card3.date": "Apr 17, 6:00 PM",
			"event.related.card3.title": "Night Run & Wellness Walk",
			"event.related.card3.text": "A campus-wide 5K with recovery stations, live DJ set, and student wellness booths.",
			"event.related.card3.location": "Main Quad",
			"eventPage.innovationForum.badge": "Research",
			"eventPage.innovationForum.title": "Innovation Forum: Future of Climate Tech",
			"eventPage.innovationForum.subtitle": "A faculty-led panel with student demos and startups focused on sustainable technology.",
			"eventPage.innovationForum.dateValue": "Wednesday, Apr 15, 2026",
			"eventPage.innovationForum.timeValue": "4:30 PM - 6:30 PM",
			"eventPage.innovationForum.locationValue": "Science Atrium",
			"eventPage.innovationForum.hostValue": "Engineering & Sustainability Office",
			"eventPage.innovationForum.overview1": "Join faculty researchers and student innovators for a deep dive into climate solutions, from clean energy prototypes to resilient city planning.",
			"eventPage.innovationForum.overview2": "The forum ends with a rapid showcase and a networking reception for students, faculty, and community partners.",
			"eventPage.innovationForum.expect1": "Panel discussion with Q&A",
			"eventPage.innovationForum.expect2": "Demo stations and poster walk",
			"eventPage.innovationForum.expect3": "Networking reception with mentors",
			"eventPage.innovationForum.mapText": "Science Atrium sits beside Innovation Hall; enter from the North Walk and check in at the foyer desk.",
			"eventPage.innovationForum.mapTag1": "Accessible",
			"eventPage.innovationForum.mapTag2": "Indoor",
			"eventPage.nightRun.badge": "Sports",
			"eventPage.nightRun.title": "Night Run & Wellness Walk",
			"eventPage.nightRun.subtitle": "A sunset 5K with music, wellness booths, and recovery stations across campus.",
			"eventPage.nightRun.dateValue": "Thursday, Apr 17, 2026",
			"eventPage.nightRun.timeValue": "6:00 PM - 8:30 PM",
			"eventPage.nightRun.locationValue": "Main Quad",
			"eventPage.nightRun.hostValue": "Athletics Department",
			"eventPage.nightRun.overview1": "Kick off the evening with a guided warm-up and choose between the 5K route or a relaxed wellness walk.",
			"eventPage.nightRun.overview2": "After the finish line, enjoy hydration stations, stretching zones, and a live DJ set.",
			"eventPage.nightRun.expect1": "Guided warm-up and route briefing",
			"eventPage.nightRun.expect2": "Marked 5K loop with volunteers",
			"eventPage.nightRun.expect3": "Recovery lounge and wellness booths",
			"eventPage.nightRun.mapText": "Meet at the Main Quad archway; the course starts near East Field and loops past the library.",
			"eventPage.nightRun.mapTag1": "Outdoor",
			"eventPage.nightRun.mapTag2": "Check-in",
			"eventPage.globalHeritage.badge": "Culture",
			"eventPage.globalHeritage.title": "Global Heritage Showcase",
			"eventPage.globalHeritage.subtitle": "A vibrant student-led festival with food stalls, performances, and cultural storytelling.",
			"eventPage.globalHeritage.dateValue": "Tuesday, Apr 14, 2026",
			"eventPage.globalHeritage.timeValue": "3:00 PM - 7:00 PM",
			"eventPage.globalHeritage.locationValue": "Student Center Plaza",
			"eventPage.globalHeritage.hostValue": "International Student Office",
			"eventPage.globalHeritage.overview1": "Travel the world in one afternoon with 20+ cultural booths and student performances.",
			"eventPage.globalHeritage.overview2": "Meet cultural ambassadors, learn traditional crafts, and collect a festival passport stamp.",
			"eventPage.globalHeritage.expect1": "International food tastings and tea ceremony",
			"eventPage.globalHeritage.expect2": "Cultural performances every 30 minutes",
			"eventPage.globalHeritage.expect3": "Passport stamp raffle and giveaways",
			"eventPage.globalHeritage.mapText": "Find check-in at the plaza fountain, with booths wrapping around the Student Center.",
			"eventPage.globalHeritage.mapTag1": "Outdoor",
			"eventPage.globalHeritage.mapTag2": "Passport Desk",
			"eventPage.researchExpo.badge": "Academics",
			"eventPage.researchExpo.title": "Undergrad Research Expo",
			"eventPage.researchExpo.subtitle": "Poster sessions, lightning talks, and lab demos highlighting student research.",
			"eventPage.researchExpo.dateValue": "Wednesday, Apr 15, 2026",
			"eventPage.researchExpo.timeValue": "1:00 PM - 5:00 PM",
			"eventPage.researchExpo.locationValue": "Innovation Hall Atrium",
			"eventPage.researchExpo.hostValue": "Office of Research",
			"eventPage.researchExpo.overview1": "Explore research across health, AI, sustainability, and social impact in one afternoon.",
			"eventPage.researchExpo.overview2": "Meet faculty mentors, vote for the People's Choice poster, and attend the closing keynote.",
			"eventPage.researchExpo.expect1": "Poster sessions with Q&A",
			"eventPage.researchExpo.expect2": "Lab demos and interactive booths",
			"eventPage.researchExpo.expect3": "Keynote and awards ceremony",
			"eventPage.researchExpo.mapText": "Check-in is inside Innovation Hall with poster rows across the atrium and skybridge.",
			"eventPage.researchExpo.mapTag1": "Indoor",
			"eventPage.researchExpo.mapTag2": "Registration Desk",
			"eventPage.sunriseFitness.badge": "Wellness",
			"eventPage.sunriseFitness.title": "Sunrise Fitness Flow",
			"eventPage.sunriseFitness.subtitle": "Start the morning with a guided stretch, yoga flow, and mindful breathing.",
			"eventPage.sunriseFitness.dateValue": "Saturday, Apr 19, 2026",
			"eventPage.sunriseFitness.timeValue": "7:00 AM - 8:30 AM",
			"eventPage.sunriseFitness.locationValue": "Riverfront Lawn",
			"eventPage.sunriseFitness.hostValue": "Campus Recreation",
			"eventPage.sunriseFitness.overview1": "Meet at the riverfront lawn for a gentle flow designed for all ability levels.",
			"eventPage.sunriseFitness.overview2": "Bring a mat and water bottle; instructors will provide a relaxing cool down.",
			"eventPage.sunriseFitness.expect1": "Guided yoga flow and stretching",
			"eventPage.sunriseFitness.expect2": "Breathing and mindfulness exercises",
			"eventPage.sunriseFitness.expect3": "Healthy snack station after class",
			"eventPage.sunriseFitness.mapText": "Enter from the East Gate and follow the wellness signage to the lawn.",
			"eventPage.sunriseFitness.mapTag1": "Outdoor",
			"eventPage.sunriseFitness.mapTag2": "Bring a Mat",
			"eventPage.designSprint.badge": "Workshops",
			"eventPage.designSprint.title": "Design Sprint Studio",
			"eventPage.designSprint.subtitle": "Collaborative prototyping with mentors to solve real campus challenges.",
			"eventPage.designSprint.dateValue": "Thursday, Apr 16, 2026",
			"eventPage.designSprint.timeValue": "2:00 PM - 5:30 PM",
			"eventPage.designSprint.locationValue": "Design Lab",
			"eventPage.designSprint.hostValue": "Innovation Hub",
			"eventPage.designSprint.overview1": "Join cross-disciplinary teams to map ideas, sketch solutions, and build a clickable prototype.",
			"eventPage.designSprint.overview2": "Mentors from product, design, and engineering will guide each sprint phase.",
			"eventPage.designSprint.expect1": "Challenge briefing and team formation",
			"eventPage.designSprint.expect2": "Rapid ideation and wireframing",
			"eventPage.designSprint.expect3": "Prototype showcase with feedback",
			"eventPage.designSprint.mapText": "Find the Design Lab on the second floor of Innovation Hall, room 2.14.",
			"eventPage.designSprint.mapTag1": "Indoor",
			"eventPage.designSprint.mapTag2": "Team Kits",
			"eventPage.eveningJazz.badge": "Music",
			"eventPage.eveningJazz.title": "Evening Jazz on the Lawn",
			"eventPage.eveningJazz.subtitle": "A smooth jazz concert with student ensembles and visiting artists under the stars.",
			"eventPage.eveningJazz.dateValue": "Thursday, Apr 18, 2026",
			"eventPage.eveningJazz.timeValue": "7:30 PM - 9:00 PM",
			"eventPage.eveningJazz.locationValue": "Founders Lawn",
			"eventPage.eveningJazz.hostValue": "School of Music",
			"eventPage.eveningJazz.overview1": "Bring a blanket and settle in for an open-air concert curated by the jazz ensemble.",
			"eventPage.eveningJazz.overview2": "Local food trucks and a mocktail bar will be available near the lawn entrance.",
			"eventPage.eveningJazz.expect1": "Live sets from student combos",
			"eventPage.eveningJazz.expect2": "Guest artist feature performance",
			"eventPage.eveningJazz.expect3": "Food trucks and lounge seating",
			"eventPage.eveningJazz.mapText": "The lawn is behind the Performing Arts Center, with seating zones marked by lanterns.",
			"eventPage.eveningJazz.mapTag1": "Outdoor",
			"eventPage.eveningJazz.mapTag2": "Food Trucks",
			"eventPage.communityService.badge": "Community",
			"eventPage.communityService.title": "Community Service Day",
			"eventPage.communityService.subtitle": "Join local partners for cleanup projects, garden builds, and food drives.",
			"eventPage.communityService.dateValue": "Saturday, Apr 20, 2026",
			"eventPage.communityService.timeValue": "9:00 AM - 2:00 PM",
			"eventPage.communityService.locationValue": "Volunteer Hub, Civic Square",
			"eventPage.communityService.hostValue": "Center for Service",
			"eventPage.communityService.overview1": "Select from six project sites focused on environmental cleanup and neighborhood support.",
			"eventPage.communityService.overview2": "Transportation, supplies, and lunch are provided for all volunteers.",
			"eventPage.communityService.expect1": "Volunteer check-in and team assignments",
			"eventPage.communityService.expect2": "On-site project coordinators",
			"eventPage.communityService.expect3": "Celebration picnic at Civic Square",
			"eventPage.communityService.mapText": "Meet at the Volunteer Hub tent in Civic Square for project bus assignments.",
			"eventPage.communityService.mapTag1": "Check-in",
			"eventPage.communityService.mapTag2": "Transportation",
			"eventPage.careerClinic.badge": "Careers",
			"eventPage.careerClinic.title": "Career Clinic Pop-Up",
			"eventPage.careerClinic.subtitle": "Resume reviews, portfolio feedback, and mock interviews with alumni coaches.",
			"eventPage.careerClinic.dateValue": "Friday, Apr 25, 2026",
			"eventPage.careerClinic.timeValue": "10:00 AM - 2:00 PM",
			"eventPage.careerClinic.locationValue": "Career Center Studio",
			"eventPage.careerClinic.hostValue": "Career Services",
			"eventPage.careerClinic.overview1": "Drop in for a 20-minute coaching session focused on resumes, portfolios, or interview prep.",
			"eventPage.careerClinic.overview2": "Bring a printed resume or digital copy for personalized edits and action steps.",
			"eventPage.careerClinic.expect1": "One-on-one coaching with alumni",
			"eventPage.careerClinic.expect2": "LinkedIn and portfolio feedback",
			"eventPage.careerClinic.expect3": "Mock interview practice booths",
			"eventPage.careerClinic.mapText": "Enter the Career Center from the north doors; the studio is on the first floor.",
			"eventPage.careerClinic.mapTag1": "Indoor",
			"eventPage.careerClinic.mapTag2": "Coaching Booths",
			"eventPage.libraryPoetry.badge": "Arts",
			"eventPage.libraryPoetry.title": "Library Poetry Night",
			"eventPage.libraryPoetry.subtitle": "An open-mic poetry evening with featured readers and cozy lounge seating.",
			"eventPage.libraryPoetry.dateValue": "Monday, Apr 28, 2026",
			"eventPage.libraryPoetry.timeValue": "6:30 PM - 8:00 PM",
			"eventPage.libraryPoetry.locationValue": "Library Reading Lounge",
			"eventPage.libraryPoetry.hostValue": "University Library",
			"eventPage.libraryPoetry.overview1": "Enjoy spoken word and short readings from student writers and local poets.",
			"eventPage.libraryPoetry.overview2": "Sign up for the open mic in advance or arrive early for walk-up slots.",
			"eventPage.libraryPoetry.expect1": "Featured poet performance",
			"eventPage.libraryPoetry.expect2": "Open mic sign-ups and readings",
			"eventPage.libraryPoetry.expect3": "Hot drinks and dessert table",
			"eventPage.libraryPoetry.mapText": "Enter the library through the east doors; the lounge is on the first floor.",
			"eventPage.libraryPoetry.mapTag1": "Indoor",
			"eventPage.libraryPoetry.mapTag2": "Open Mic",
			"about.hero.eyebrow": "About the platform",
			"about.hero.title": "A campus-first events guide",
			"about.hero.subtitle": "Learn the mission, values, and student team behind the guide.",
			"about.story.eyebrow": "Platform story",
			"about.story.title": "Built to connect every student to campus life",
			"about.story.p1": "The University Events Guide is a front-door experience for discovering campus happenings. We curate official university events alongside student-led programs, creating a single timeline for everything from workshops and career panels to performances and wellness experiences.",
			"about.story.p2": "Our goal is to make sure no one misses the moments that matter. The platform is managed by students and staff who understand the pulse of campus life.",
			"about.vision.eyebrow": "Vision",
			"about.vision.title": "An inclusive campus where everyone belongs",
			"about.vision.text": "We envision a university community where every student feels seen, invited, and empowered to participate in campus life.",
			"about.mission.eyebrow": "Mission",
			"about.mission.title": "Make events discovery effortless",
			"about.mission.text": "We align schedules, remove information gaps, and elevate student-led experiences to help the campus community thrive.",
			"about.team.eyebrow": "Team",
			"about.team.title": "The students and staff behind the guide",
			"about.team.member1.name": "Noor Al-Khatib",
			"about.team.member1.role": "Program Director",
			"about.team.member2.name": "Omar Al-Sayegh",
			"about.team.member2.role": "Student Engagement",
			"about.team.member3.name": "Layla Hassan",
			"about.team.member3.role": "Creative Producer",
			"about.team.member4.name": "Adam El-Nour",
			"about.team.member4.role": "Communications Lead",
			"about.policy.eyebrow": "Publishing policies",
			"about.policy.title": "How we curate the calendar",
			"about.policy.verify.title": "Verification",
			"about.policy.verify.text": "Events are verified with sponsoring departments or student organizations before publication.",
			"about.policy.access.title": "Accessibility",
			"about.policy.access.text": "We highlight accessibility notes and encourage hosts to provide inclusive experiences.",
			"about.policy.updates.title": "Updates",
			"about.policy.updates.text": "Last-minute updates are posted within one hour and distributed via campus notifications.",
			"about.policy.submissions.title": "Submissions",
			"about.policy.submissions.text": "Student event submissions are reviewed weekly by the editorial team.",
			"contact.hero.eyebrow": "Contact",
			"contact.hero.title": "Get in touch with the events team",
			"contact.hero.subtitle": "Send questions, partnership ideas, or volunteer requests.",
			"contact.message.eyebrow": "Message us",
			"contact.message.title": "We reply within two business days",
			"contact.alert.success": "Thanks! Your message has been sent. We will follow up soon.",
			"contact.alert.error": "Please complete all required fields and enter a valid email.",
			"contact.form.nameLabel": "Full name",
			"contact.form.emailLabel": "Email address",
			"contact.form.messageLabel": "Message",
			"contact.form.namePlaceholder": "Your name",
			"contact.form.emailPlaceholder": "you@university.edu",
			"contact.form.messagePlaceholder": "Tell us how we can help",
			"contact.info.officeTitle": "Events office",
			"contact.info.officeText": "Student Center, Building A<br>Open Sunday - Thursday, 9:00 AM - 5:00 PM",
			"contact.info.emailLabel": "Email",
			"contact.info.phoneLabel": "Phone",
			"contact.info.updatesLabel": "Updates",
			"contact.info.updatesText": "Instagram @uni.events",
			"contact.info.partnershipsTitle": "Partnerships",
			"contact.info.partnershipsText": "Have a student initiative or external collaboration? Let us know and we will connect you with the right team.",
			"contact.info.partnershipsButton": "View upcoming events",
			"contact.social.eyebrow": "Social",
			"contact.social.x": "X / Twitter",
			"contact.social.instagram": "Instagram",
			"contact.social.linkedin": "LinkedIn",
			"footer.note": "A curated guide to campus events, student initiatives, and cultural moments.",
			"footer.contactTitle": "Contact",
			"footer.exploreTitle": "Explore",
			"footer.followTitle": "Follow",
			"footer.allEvents": "All Events",
			"footer.about": "About",
			"footer.contact": "Contact",
			"footer.title": "2026 University Events Guide",
			"footer.rights": "All rights reserved",
			"footer.address": "Student Center, Building A",
			"common.viewDetails": "View details",
			"common.viewAllEvents": "View all events",
			"common.addToCalendar": "Add to Calendar",
			"common.share": "Share",
			"common.resetFilters": "Reset filters",
			"common.sendMessage": "Send message",
			"common.clearForm": "Clear form",
			"common.featuredEvent": "Featured event",
			"common.upcomingEvent": "Upcoming event",
			"common.noEventsTitle": "No events match these filters",
			"common.noEventsText": "Try clearing the date or selecting a different category.",
			"common.backToTop": "Back to top",
			"theme.toggleDark": "Dark mode",
			"theme.toggleLight": "Light mode",
			"booking.open": "Book seat",
			"booking.title": "Reserve your seat",
			"booking.subtitle": "Choose a seat count and leave your details.",
			"booking.nameLabel": "Full name",
			"booking.emailLabel": "Email address",
			"booking.seatsLabel": "Seats",
			"booking.seatsOption1": "1 seat",
			"booking.seatsOption2": "2 seats",
			"booking.seatsOption3": "3 seats",
			"booking.namePlaceholder": "Your name",
			"booking.emailPlaceholder": "you@university.edu",
			"booking.close": "Close",
			"booking.closeAria": "Close",
			"booking.submit": "Confirm booking",
			"results.showing": "Showing {count} {label}",
			"results.event": "event",
			"results.events": "events"
		},
		ar: {
			"nav.skip": "تخطي إلى المحتوى",
			"nav.brand": "فعاليات الجامعة",
			"nav.home": "الرئيسية",
			"nav.events": "الفعاليات",
			"nav.eventDetails": "تفاصيل الفعالية",
			"nav.about": "من نحن",
			"nav.contact": "اتصل بنا",
			"home.eyebrow": "دليل فعاليات الحرم",
			"home.title": "اكتشف ما يحدث هذا الأسبوع",
			"home.subtitle": "جدول منسق للمحاضرات والرياضة والثقافة وورش العمل الطلابية عبر الجامعة.",
			"home.featured.eyebrow": "مميّزة",
			"home.featured.title": "فعاليات الأسبوع البارزة",
			"home.featured.card1.badge": "الثقافة",
			"home.featured.card1.date": "13 أبريل، 7:00 م",
			"home.featured.card1.title": "افتتاح مهرجان الفنون الربيعي",
			"home.featured.card1.text": "عروض حية ومعارض طلابية واستقبال على السطح يبرز برنامج الفنون.",
			"home.featured.card1.meta1": "قاعة المحاضرات أ",
			"home.featured.card1.meta2": "برعاية مجلس الفنون الجميلة",
			"home.featured.card2.badge": "البحث",
			"home.featured.card2.date": "15 أبريل، 4:30 م",
			"home.featured.card2.title": "منتدى الابتكار: مستقبل تقنيات المناخ",
			"home.featured.card2.text": "حلقة نقاش بقيادة أعضاء هيئة التدريس مع عروض طلابية ومتحدثين قصيرين.",
			"home.featured.card2.meta1": "ردهة العلوم",
			"home.featured.card2.meta2": "الهندسة والاستدامة",
			"home.featured.card3.badge": "الرياضة",
			"home.featured.card3.date": "17 أبريل، 6:00 م",
			"home.featured.card3.title": "سباق ليلي ومشي للصحة",
			"home.featured.card3.text": "سباق 5 كيلومترات عبر الحرم مع محطات استشفاء ودي جي وأركان صحة.",
			"home.featured.card3.meta1": "الساحة الرئيسية",
			"home.featured.card3.meta2": "قسم الأنشطة الرياضية",
			"home.categories.eyebrow": "الفئات",
			"home.categories.title": "ابحث عن الفعاليات حسب الموضوع",
			"home.latest.eyebrow": "الأحدث",
			"home.latest.title": "أحدث الإضافات إلى الجدول",
			"home.latest.card1.badge": "الثقافة",
			"home.latest.card1.date": "14 أبريل، 3:00 م",
			"home.latest.card1.title": "عرض التراث العالمي",
			"home.latest.card1.text": "أجنحة طلابية للأطعمة والفنون والعروض من أكثر من 20 ثقافة.",
			"home.latest.card1.location": "ساحة مركز الطلاب",
			"home.latest.card2.badge": "البحث",
			"home.latest.card2.date": "15 أبريل، 11:00 ص",
			"home.latest.card2.title": "معرض أبحاث البكالوريوس",
			"home.latest.card2.text": "جلسات بوسترات وعروض حية وتعليقات هيئة التدريس على مشاريع التخرج.",
			"home.latest.card2.location": "قاعة الابتكار",
			"home.latest.card3.badge": "الرياضة",
			"home.latest.card3.date": "16 أبريل، 7:30 ص",
			"home.latest.card3.title": "دوائر اللياقة عند الشروق",
			"home.latest.card3.text": "تمارين موجهة مع مدربين ومحطة ترطيب وتمارين مرونة.",
			"home.latest.card3.location": "الملعب الشرقي",
			"home.latest.card4.badge": "ورش عمل",
			"home.latest.card4.date": "16 أبريل، 2:00 م",
			"home.latest.card4.title": "مختبر العصف التصميمي",
			"home.latest.card4.text": "نمذجة سريعة مع مرشدين لحل تحديات واقعية في الحرم.",
			"home.latest.card4.location": "مختبر التصميم",
			"home.latest.card5.badge": "الموسيقى",
			"home.latest.card5.date": "17 أبريل، 8:00 م",
			"home.latest.card5.title": "جاز مسائي على العشب",
			"home.latest.card5.text": "فرق طلابية تقدم عروضاً حية مع ضيافة ومناطق جلوس.",
			"home.latest.card5.location": "العشب الغربي",
			"home.latest.card6.badge": "التطوع",
			"home.latest.card6.date": "18 أبريل، 9:30 ص",
			"home.latest.card6.title": "تواصل لخدمة المجتمع",
			"home.latest.card6.text": "التقِ بالشركاء المحليين وسجّل ساعات خدمة وانضم لمبادرات نهاية الأسبوع.",
			"home.latest.card6.location": "مركز المجتمع",
			"category.all": "الكل",
			"category.culture": "الثقافة",
			"category.sports": "الرياضة",
			"category.workshops": "ورش عمل",
			"category.career": "المسار المهني",
			"category.research": "البحث",
			"category.music": "الموسيقى",
			"category.volunteer": "التطوع",
			"events.hero.eyebrow": "كل الفعاليات",
			"events.hero.title": "استعرض الفعاليات القادمة",
			"events.hero.subtitle": "قم بالتصفية حسب الفئة والتاريخ والموقع للعثور على التجربة المناسبة.",
			"events.filters.eyebrow": "الفلاتر",
			"events.filters.title": "حسّن بحثك عن الفعاليات",
			"events.filters.category": "الفئة",
			"events.filters.location": "الموقع",
			"events.filters.date": "التاريخ",
			"location.studentCenter": "ساحة مركز الطلاب",
			"location.innovationHall": "قاعة الابتكار",
			"location.mainQuad": "الساحة الرئيسية",
			"location.designLab": "مختبر التصميم",
			"location.westLawn": "العشب الغربي",
			"location.civicHub": "مركز المجتمع",
			"location.careerCenter": "مركز المسار المهني",
			"location.libraryForum": "منتدى المكتبة",
			"events.card1.badge": "الثقافة",
			"events.card1.date": "14 أبريل، 3:00 م",
			"events.card1.title": "عرض التراث العالمي",
			"events.card1.text": "أجنحة طلابية للأطعمة والفنون والعروض من أكثر من 20 ثقافة.",
			"events.card1.location": "ساحة مركز الطلاب",
			"events.card2.badge": "البحث",
			"events.card2.date": "15 أبريل، 11:00 ص",
			"events.card2.title": "معرض أبحاث البكالوريوس",
			"events.card2.text": "جلسات بوسترات وعروض حية وتعليقات هيئة التدريس على مشاريع التخرج.",
			"events.card2.location": "قاعة الابتكار",
			"events.card3.badge": "الرياضة",
			"events.card3.date": "17 أبريل، 6:00 م",
			"events.card3.title": "سباق ليلي ومشي للصحة",
			"events.card3.text": "سباق 5 كيلومترات عبر الحرم مع محطات استشفاء ودي جي وأركان صحة.",
			"events.card3.location": "الساحة الرئيسية",
			"events.card4.badge": "ورش عمل",
			"events.card4.date": "16 أبريل، 2:00 م",
			"events.card4.title": "مختبر العصف التصميمي",
			"events.card4.text": "نمذجة سريعة مع مرشدين لحل تحديات واقعية في الحرم.",
			"events.card4.location": "مختبر التصميم",
			"events.card5.badge": "الموسيقى",
			"events.card5.date": "17 أبريل، 8:00 م",
			"events.card5.title": "جاز مسائي على العشب",
			"events.card5.text": "فرق طلابية تقدم عروضاً حية مع ضيافة ومناطق جلوس.",
			"events.card5.location": "العشب الغربي",
			"events.card6.badge": "التطوع",
			"events.card6.date": "18 أبريل، 9:30 ص",
			"events.card6.title": "تواصل لخدمة المجتمع",
			"events.card6.text": "التقِ بالشركاء المحليين وسجّل ساعات خدمة وانضم لمبادرات نهاية الأسبوع.",
			"events.card6.location": "مركز المجتمع",
			"events.card7.badge": "المسار المهني",
			"events.card7.date": "19 أبريل، 1:00 م",
			"events.card7.title": "عيادة ملف الإنجاز المهني",
			"events.card7.text": "مراجعة سير ذاتية، ملاحظات على ملفات الأعمال، ومحاكاة مقابلات مع مرشدين.",
			"events.card7.location": "مركز المسار المهني",
			"events.card8.badge": "الثقافة",
			"events.card8.date": "20 أبريل، 7:00 م",
			"events.card8.title": "المكتبة بعد الظلام: شعر",
			"events.card8.text": "أمسية للقصائد والأداء الصوتي وجلسات موسيقية خفيفة وزينات طلابية.",
			"events.card8.location": "منتدى المكتبة",
			"event.hero.eyebrow": "تفاصيل الفعالية",
			"event.hero.title": "تسليط الضوء على الفعالية",
			"event.hero.subtitle": "الجدول الكامل وتفاصيل الموقع والمعرض في لمحة.",
			"event.badge": "الثقافة",
			"event.title": "افتتاح مهرجان الفنون الربيعي",
			"event.subtitle": "احتفال بالعروض الطلابية ومعارض الفنون والترحيب الرسمي بالمهرجان.",
			"event.meta.dateLabel": "التاريخ",
			"event.meta.timeLabel": "الوقت",
			"event.meta.locationLabel": "الموقع",
			"event.meta.hostLabel": "الجهة المنظمة",
			"event.meta.dateValue": "السبت، 13 أبريل 2026",
			"event.meta.timeValue": "7:00 م - 10:00 م",
			"event.meta.locationValue": "قاعة المحاضرات أ",
			"event.meta.hostValue": "مجلس الفنون الجميلة",
			"event.overview.title": "نظرة عامة على الفعالية",
			"event.overview.p1": "ابدأ مهرجان الفنون الربيعي السنوي بأمسية مليئة بالعروض الحية والتركيبات الفنية وتجارب الطلاب عبر تخصصات متعددة.",
			"event.overview.p2": "تعال مبكراً لاستقبال الفناء والتعرف على الفنانين وأعضاء هيئة التدريس والشركاء المجتمعيين.",
			"event.expect.title": "ماذا تتوقع",
			"event.expect.item1": "موسيقى حية ورقص وعروض شعرية",
			"event.expect.item2": "تركيبات فنية تفاعلية وجولات استوديو مفتوح",
			"event.expect.item3": "استراحة المهرجان مع ضيافة وفرص للتواصل",
			"event.map.title": "خريطة الحرم",
			"event.map.text": "تقع قاعة المحاضرات أ بجوار مدخل مركز الطلاب. يتوفر موقف مخصص عند البوابة 3.",
			"event.map.tag1": "إمكانية وصول",
			"event.map.tag2": "داخلي",
			"event.side.title": "هل تحتاج مساعدة؟",
			"event.side.text": "تواصل مع مكتب الفعاليات لترتيب المقاعد المخصصة أو التصاريح الإعلامية أو الحجوزات الجماعية.",
			"event.gallery.eyebrow": "المعرض",
			"event.gallery.title": "لحظات من مهرجانات سابقة",
			"event.gallery.caption1": "جولة معرض الطلاب",
			"event.gallery.caption2": "منصة العروض الخارجية",
			"event.gallery.caption3": "تركيبات تفاعلية",
			"event.gallery.caption4": "احتفال مسائي",
			"event.related.eyebrow": "ذات صلة",
			"event.related.title": "واصل أسبوعك الثقافي",
			"event.related.card1.badge": "الثقافة",
			"event.related.card1.date": "14 أبريل، 3:00 م",
			"event.related.card1.title": "عرض التراث العالمي",
			"event.related.card1.text": "أجنحة طلابية للأطعمة والفنون والعروض من أكثر من 20 ثقافة.",
			"event.related.card1.location": "ساحة مركز الطلاب",
			"event.related.card2.badge": "ورش عمل",
			"event.related.card2.date": "16 أبريل، 2:00 م",
			"event.related.card2.title": "مختبر العصف التصميمي",
			"event.related.card2.text": "نمذجة سريعة مع مرشدين لحل تحديات واقعية في الحرم.",
			"event.related.card2.location": "مختبر التصميم",
			"event.related.card3.badge": "الرياضة",
			"event.related.card3.date": "17 أبريل، 6:00 م",
			"event.related.card3.title": "سباق ليلي ومشي للصحة",
			"event.related.card3.text": "سباق 5 كيلومترات عبر الحرم مع محطات استشفاء ودي جي وأركان صحة.",
			"event.related.card3.location": "الساحة الرئيسية",
			"eventPage.innovationForum.badge": "البحث",
			"eventPage.innovationForum.title": "منتدى الابتكار: مستقبل تقنيات المناخ",
			"eventPage.innovationForum.subtitle": "حلقة نقاش يقودها أعضاء هيئة التدريس مع عروض طلابية وشركات ناشئة تركز على التكنولوجيا المستدامة.",
			"eventPage.innovationForum.dateValue": "الأربعاء، 15 أبريل 2026",
			"eventPage.innovationForum.timeValue": "4:30 م - 6:30 م",
			"eventPage.innovationForum.locationValue": "ردهة العلوم",
			"eventPage.innovationForum.hostValue": "مكتب الهندسة والاستدامة",
			"eventPage.innovationForum.overview1": "انضم إلى الباحثين من أعضاء هيئة التدريس والمبتكرين من الطلاب للتعمق في حلول المناخ من نماذج الطاقة النظيفة إلى تخطيط المدن المرن.",
			"eventPage.innovationForum.overview2": "يختتم المنتدى بعرض سريع واستقبال للتواصل بين الطلاب وأعضاء هيئة التدريس والشركاء المجتمعيين.",
			"eventPage.innovationForum.expect1": "حلقة نقاش مع أسئلة وأجوبة",
			"eventPage.innovationForum.expect2": "محطات عروض وتجول بين البوسترات",
			"eventPage.innovationForum.expect3": "استقبال للتواصل مع المرشدين",
			"eventPage.innovationForum.mapText": "تقع ردهة العلوم بجوار قاعة الابتكار؛ ادخل من الممر الشمالي وسجل عند مكتب الاستقبال.",
			"eventPage.innovationForum.mapTag1": "إمكانية وصول",
			"eventPage.innovationForum.mapTag2": "داخلي",
			"eventPage.nightRun.badge": "الرياضة",
			"eventPage.nightRun.title": "سباق ليلي ومشي للصحة",
			"eventPage.nightRun.subtitle": "سباق 5 كيلومترات عند الغروب مع موسيقى وأركان عافية ومحطات استشفاء عبر الحرم.",
			"eventPage.nightRun.dateValue": "الخميس، 17 أبريل 2026",
			"eventPage.nightRun.timeValue": "6:00 م - 8:30 م",
			"eventPage.nightRun.locationValue": "الساحة الرئيسية",
			"eventPage.nightRun.hostValue": "قسم الأنشطة الرياضية",
			"eventPage.nightRun.overview1": "ابدأ المساء بإحماء موجه واختر بين مسار 5 كم أو مشي مريح للعافية.",
			"eventPage.nightRun.overview2": "بعد خط النهاية، استمتع بمحطات الترطيب ومناطق الإطالة ودي جي حي.",
			"eventPage.nightRun.expect1": "إحماء موجه وتعريف بالمسار",
			"eventPage.nightRun.expect2": "مسار 5 كم محدد بمتطوعين",
			"eventPage.nightRun.expect3": "استراحة استشفاء وأركان عافية",
			"eventPage.nightRun.mapText": "اللقاء عند قوس الساحة الرئيسية؛ يبدأ المسار قرب الملعب الشرقي ويلتف حول المكتبة.",
			"eventPage.nightRun.mapTag1": "خارجي",
			"eventPage.nightRun.mapTag2": "تسجيل الحضور",
			"eventPage.globalHeritage.badge": "الثقافة",
			"eventPage.globalHeritage.title": "عرض التراث العالمي",
			"eventPage.globalHeritage.subtitle": "مهرجان طلابي نابض بالحياة مع أكشاك طعام وعروض وحكايات ثقافية.",
			"eventPage.globalHeritage.dateValue": "الثلاثاء، 14 أبريل 2026",
			"eventPage.globalHeritage.timeValue": "3:00 م - 7:00 م",
			"eventPage.globalHeritage.locationValue": "ساحة مركز الطلاب",
			"eventPage.globalHeritage.hostValue": "مكتب الطلاب الدوليين",
			"eventPage.globalHeritage.overview1": "سافر حول العالم في ظهيرة واحدة مع أكثر من 20 جناحاً ثقافياً وعروض طلابية.",
			"eventPage.globalHeritage.overview2": "قابل السفراء الثقافيين وتعلم الحرف التقليدية واجمع ختم جواز المهرجان.",
			"eventPage.globalHeritage.expect1": "تذوق أطعمة عالمية ومراسم شاي",
			"eventPage.globalHeritage.expect2": "عروض ثقافية كل 30 دقيقة",
			"eventPage.globalHeritage.expect3": "سحب على ختم الجواز وهدايا",
			"eventPage.globalHeritage.mapText": "نقطة التسجيل عند نافورة الساحة مع الأكشاك التي تلتف حول مركز الطلاب.",
			"eventPage.globalHeritage.mapTag1": "خارجي",
			"eventPage.globalHeritage.mapTag2": "مكتب الجوازات",
			"eventPage.researchExpo.badge": "أكاديمي",
			"eventPage.researchExpo.title": "معرض أبحاث البكالوريوس",
			"eventPage.researchExpo.subtitle": "جلسات بوسترات ومتحدثين خاطفين وعروض مختبر تبرز أبحاث الطلاب.",
			"eventPage.researchExpo.dateValue": "الأربعاء، 15 أبريل 2026",
			"eventPage.researchExpo.timeValue": "1:00 م - 5:00 م",
			"eventPage.researchExpo.locationValue": "ردهة قاعة الابتكار",
			"eventPage.researchExpo.hostValue": "مكتب البحث العلمي",
			"eventPage.researchExpo.overview1": "استكشف الأبحاث في الصحة والذكاء الاصطناعي والاستدامة والأثر الاجتماعي خلال فترة بعد الظهر.",
			"eventPage.researchExpo.overview2": "قابل المرشدين من أعضاء هيئة التدريس وصوت لبوستر اختيار الجمهور واحضر الكلمة الختامية.",
			"eventPage.researchExpo.expect1": "جلسات بوسترات مع أسئلة وأجوبة",
			"eventPage.researchExpo.expect2": "عروض مختبرية وأكشاك تفاعلية",
			"eventPage.researchExpo.expect3": "كلمة رئيسية وحفل جوائز",
			"eventPage.researchExpo.mapText": "التسجيل داخل قاعة الابتكار مع صفوف بوسترات عبر الردهة والجسر العلوي.",
			"eventPage.researchExpo.mapTag1": "داخلي",
			"eventPage.researchExpo.mapTag2": "مكتب التسجيل",
			"eventPage.sunriseFitness.badge": "العافية",
			"eventPage.sunriseFitness.title": "تدفق اللياقة عند الشروق",
			"eventPage.sunriseFitness.subtitle": "ابدأ الصباح بتمدد موجه وتدفق يوغا وتنفس واعٍ.",
			"eventPage.sunriseFitness.dateValue": "السبت، 19 أبريل 2026",
			"eventPage.sunriseFitness.timeValue": "7:00 ص - 8:30 ص",
			"eventPage.sunriseFitness.locationValue": "عشب الواجهة النهرية",
			"eventPage.sunriseFitness.hostValue": "الأنشطة الترفيهية بالحرم",
			"eventPage.sunriseFitness.overview1": "التقِ عند عشب الواجهة النهرية لجلسة لطيفة تناسب جميع المستويات.",
			"eventPage.sunriseFitness.overview2": "أحضر حصيرة وزجاجة ماء؛ سيقدم المدربون تهدئة مريحة.",
			"eventPage.sunriseFitness.expect1": "تدفق يوغا وتمارين إطالة موجهة",
			"eventPage.sunriseFitness.expect2": "تمارين تنفس ويقظة ذهنية",
			"eventPage.sunriseFitness.expect3": "ركن وجبات خفيفة صحية بعد الحصة",
			"eventPage.sunriseFitness.mapText": "ادخل من البوابة الشرقية واتبع لوحات العافية إلى العشب.",
			"eventPage.sunriseFitness.mapTag1": "خارجي",
			"eventPage.sunriseFitness.mapTag2": "أحضر حصيرة",
			"eventPage.designSprint.badge": "ورش عمل",
			"eventPage.designSprint.title": "مختبر العصف التصميمي",
			"eventPage.designSprint.subtitle": "نمذجة تعاونية مع مرشدين لحل تحديات واقعية في الحرم.",
			"eventPage.designSprint.dateValue": "الخميس، 16 أبريل 2026",
			"eventPage.designSprint.timeValue": "2:00 م - 5:30 م",
			"eventPage.designSprint.locationValue": "مختبر التصميم",
			"eventPage.designSprint.hostValue": "مركز الابتكار",
			"eventPage.designSprint.overview1": "انضم إلى فرق متعددة التخصصات لرسم الأفكار وتصميم الحلول وبناء نموذج قابل للنقر.",
			"eventPage.designSprint.overview2": "سيرشد مرشدون من المنتج والتصميم والهندسة كل مرحلة من مراحل السبرنت.",
			"eventPage.designSprint.expect1": "إحاطة بالتحدي وتكوين الفرق",
			"eventPage.designSprint.expect2": "عصف سريع ورسم مخططات أولية",
			"eventPage.designSprint.expect3": "عرض النموذج مع ملاحظات",
			"eventPage.designSprint.mapText": "اعثر على مختبر التصميم في الطابق الثاني من قاعة الابتكار، غرفة 2.14.",
			"eventPage.designSprint.mapTag1": "داخلي",
			"eventPage.designSprint.mapTag2": "حقائب الفريق",
			"eventPage.eveningJazz.badge": "الموسيقى",
			"eventPage.eveningJazz.title": "جاز مسائي على العشب",
			"eventPage.eveningJazz.subtitle": "حفل جاز ناعم مع فرق طلابية وفنانين ضيوف تحت النجوم.",
			"eventPage.eveningJazz.dateValue": "الخميس، 18 أبريل 2026",
			"eventPage.eveningJazz.timeValue": "7:30 م - 9:00 م",
			"eventPage.eveningJazz.locationValue": "عشب المؤسسين",
			"eventPage.eveningJazz.hostValue": "كلية الموسيقى",
			"eventPage.eveningJazz.overview1": "أحضر بطانية واستمتع بحفل في الهواء الطلق منسق من فرقة الجاز.",
			"eventPage.eveningJazz.overview2": "ستتوفر شاحنات طعام وبار موكتيل قرب مدخل العشب.",
			"eventPage.eveningJazz.expect1": "فقرات حية لفرق طلابية",
			"eventPage.eveningJazz.expect2": "عرض مميز لفنان ضيف",
			"eventPage.eveningJazz.expect3": "شاحنات طعام ومناطق جلوس",
			"eventPage.eveningJazz.mapText": "يقع العشب خلف مركز الفنون الأدائية مع مناطق جلوس محددة بالفوانيس.",
			"eventPage.eveningJazz.mapTag1": "خارجي",
			"eventPage.eveningJazz.mapTag2": "شاحنات طعام",
			"eventPage.communityService.badge": "المجتمع",
			"eventPage.communityService.title": "يوم خدمة المجتمع",
			"eventPage.communityService.subtitle": "انضم إلى شركاء محليين لمشاريع تنظيف وبناء حدائق وبنوك طعام.",
			"eventPage.communityService.dateValue": "السبت، 20 أبريل 2026",
			"eventPage.communityService.timeValue": "9:00 ص - 2:00 م",
			"eventPage.communityService.locationValue": "مركز المتطوعين، ساحة المدينة",
			"eventPage.communityService.hostValue": "مركز الخدمة المجتمعية",
			"eventPage.communityService.overview1": "اختر من ستة مواقع للمشاريع تركز على تنظيف البيئة ودعم الأحياء.",
			"eventPage.communityService.overview2": "يتم توفير النقل والمواد والغداء لجميع المتطوعين.",
			"eventPage.communityService.expect1": "تسجيل المتطوعين وتوزيع الفرق",
			"eventPage.communityService.expect2": "منسقو مشاريع في الموقع",
			"eventPage.communityService.expect3": "نزهة احتفالية في ساحة المدينة",
			"eventPage.communityService.mapText": "اللقاء عند خيمة مركز المتطوعين في ساحة المدينة لتوزيع حافلات المشاريع.",
			"eventPage.communityService.mapTag1": "تسجيل الحضور",
			"eventPage.communityService.mapTag2": "النقل",
			"eventPage.careerClinic.badge": "المسار المهني",
			"eventPage.careerClinic.title": "عيادة المسار المهني",
			"eventPage.careerClinic.subtitle": "مراجعة سير ذاتية وملاحظات على ملفات الأعمال ومحاكاة مقابلات مع خريجين.",
			"eventPage.careerClinic.dateValue": "الجمعة، 25 أبريل 2026",
			"eventPage.careerClinic.timeValue": "10:00 ص - 2:00 م",
			"eventPage.careerClinic.locationValue": "استوديو مركز المسار المهني",
			"eventPage.careerClinic.hostValue": "خدمات المسار المهني",
			"eventPage.careerClinic.overview1": "تعال لجلسة تدريبية لمدة 20 دقيقة تركز على السيرة الذاتية أو ملف الأعمال أو الاستعداد للمقابلة.",
			"eventPage.careerClinic.overview2": "أحضر سيرة ذاتية مطبوعة أو نسخة رقمية للحصول على تعديلات وخطوات عملية.",
			"eventPage.careerClinic.expect1": "تدريب فردي مع خريجين",
			"eventPage.careerClinic.expect2": "ملاحظات على لينكدإن وملف الأعمال",
			"eventPage.careerClinic.expect3": "أكشاك تدريب على المقابلات",
			"eventPage.careerClinic.mapText": "ادخل مركز المسار المهني من الأبواب الشمالية؛ الاستوديو في الطابق الأول.",
			"eventPage.careerClinic.mapTag1": "داخلي",
			"eventPage.careerClinic.mapTag2": "أكشاك التدريب",
			"eventPage.libraryPoetry.badge": "الفنون",
			"eventPage.libraryPoetry.title": "أمسية شعر في المكتبة",
			"eventPage.libraryPoetry.subtitle": "أمسية شعر مفتوحة مع قراءات مميزة ومناطق جلوس دافئة.",
			"eventPage.libraryPoetry.dateValue": "الاثنين، 28 أبريل 2026",
			"eventPage.libraryPoetry.timeValue": "6:30 م - 8:00 م",
			"eventPage.libraryPoetry.locationValue": "ردهة قراءة المكتبة",
			"eventPage.libraryPoetry.hostValue": "مكتبة الجامعة",
			"eventPage.libraryPoetry.overview1": "استمتع بالكلمة المنطوقة وقراءات قصيرة من كتاب طلاب وشعراء محليين.",
			"eventPage.libraryPoetry.overview2": "سجل للميكروفون المفتوح مسبقاً أو احضر مبكراً للحصول على مكان.",
			"eventPage.libraryPoetry.expect1": "قراءة مميزة لشاعر ضيف",
			"eventPage.libraryPoetry.expect2": "تسجيلات وقراءات للميكروفون المفتوح",
			"eventPage.libraryPoetry.expect3": "مشروبات ساخنة وطاولة حلويات",
			"eventPage.libraryPoetry.mapText": "ادخل المكتبة عبر الأبواب الشرقية؛ الردهة في الطابق الأول.",
			"eventPage.libraryPoetry.mapTag1": "داخلي",
			"eventPage.libraryPoetry.mapTag2": "ميكروفون مفتوح",
			"about.hero.eyebrow": "حول المنصة",
			"about.hero.title": "دليل فعاليات يضع الحرم أولاً",
			"about.hero.subtitle": "تعرف على الرسالة والقيم والفريق الطلابي خلف الدليل.",
			"about.story.eyebrow": "قصة المنصة",
			"about.story.title": "صُممت لربط كل طالب بحياة الحرم",
			"about.story.p1": "دليل فعاليات الجامعة هو بوابتك لاكتشاف ما يجري في الحرم. نجمع الفعاليات الرسمية مع مبادرات الطلاب في جدول واحد.",
			"about.story.p2": "هدفنا ألا يفوتك أي حدث مهم. يدير المنصة فريق من الطلاب والموظفين الذين يفهمون نبض الحرم.",
			"about.vision.eyebrow": "الرؤية",
			"about.vision.title": "حرم شامل يشعر فيه الجميع بالانتماء",
			"about.vision.text": "نتطلع إلى مجتمع جامعي يشعر فيه كل طالب بأنه مرئي ومدعو للمشاركة.",
			"about.mission.eyebrow": "الرسالة",
			"about.mission.title": "تسهيل اكتشاف الفعاليات",
			"about.mission.text": "نوحد الجداول ونغلق فجوات المعلومات ونبرز تجارب الطلاب لدعم مجتمع الحرم.",
			"about.team.eyebrow": "الفريق",
			"about.team.title": "الطلاب والموظفون خلف الدليل",
			"about.team.member1.name": "نور الخطيب",
			"about.team.member1.role": "مدير البرنامج",
			"about.team.member2.name": "عمر الصائغ",
			"about.team.member2.role": "إشراك الطلاب",
			"about.team.member3.name": "ليلى حسن",
			"about.team.member3.role": "منتج إبداعي",
			"about.team.member4.name": "آدم النور",
			"about.team.member4.role": "مسؤول الاتصالات",
			"about.policy.eyebrow": "سياسات النشر",
			"about.policy.title": "كيف ننظم التقويم",
			"about.policy.verify.title": "التحقق",
			"about.policy.verify.text": "يتم التحقق من الفعاليات مع الجهات الراعية قبل النشر.",
			"about.policy.access.title": "إمكانية الوصول",
			"about.policy.access.text": "نبرز ملاحظات الوصول ونشجع الجهات على توفير تجارب شاملة.",
			"about.policy.updates.title": "التحديثات",
			"about.policy.updates.text": "تنشر التحديثات العاجلة خلال ساعة ويتم إرسال إشعارات بالحرم.",
			"about.policy.submissions.title": "المشاركات",
			"about.policy.submissions.text": "تراجع مشاركات الطلاب أسبوعياً بواسطة فريق التحرير.",
			"contact.hero.eyebrow": "تواصل",
			"contact.hero.title": "تواصل مع فريق الفعاليات",
			"contact.hero.subtitle": "أرسل أسئلتك أو أفكار الشراكة أو طلبات التطوع.",
			"contact.message.eyebrow": "راسلنا",
			"contact.message.title": "نرد خلال يومي عمل",
			"contact.alert.success": "شكراً لك! تم إرسال رسالتك وسنتواصل قريباً.",
			"contact.alert.error": "يرجى إكمال الحقول المطلوبة وإدخال بريد إلكتروني صحيح.",
			"contact.form.nameLabel": "الاسم الكامل",
			"contact.form.emailLabel": "البريد الإلكتروني",
			"contact.form.messageLabel": "الرسالة",
			"contact.form.namePlaceholder": "اسمك",
			"contact.form.emailPlaceholder": "you@university.edu",
			"contact.form.messagePlaceholder": "اخبرنا كيف يمكننا المساعدة",
			"contact.info.officeTitle": "مكتب الفعاليات",
			"contact.info.officeText": "مركز الطلاب، المبنى أ<br>الأحد - الخميس، 9:00 ص - 5:00 م",
			"contact.info.emailLabel": "البريد الإلكتروني",
			"contact.info.phoneLabel": "الهاتف",
			"contact.info.updatesLabel": "التحديثات",
			"contact.info.updatesText": "إنستغرام @uni.events",
			"contact.info.partnershipsTitle": "الشراكات",
			"contact.info.partnershipsText": "لديك مبادرة طلابية أو تعاون خارجي؟ أخبرنا وسنصلك بالفريق المناسب.",
			"contact.info.partnershipsButton": "عرض الفعاليات القادمة",
			"contact.social.eyebrow": "الشبكات الاجتماعية",
			"contact.social.x": "اكس / تويتر",
			"contact.social.instagram": "إنستغرام",
			"contact.social.linkedin": "لينكدإن",
			"footer.note": "دليل منسق لفعاليات الجامعة والمبادرات الطلابية واللحظات الثقافية.",
			"footer.contactTitle": "تواصل",
			"footer.exploreTitle": "استكشف",
			"footer.followTitle": "تابعنا",
			"footer.allEvents": "كل الفعاليات",
			"footer.about": "من نحن",
			"footer.contact": "اتصل بنا",
			"footer.title": "دليل فعاليات الجامعة 2026",
			"footer.rights": "جميع الحقوق محفوظة",
			"footer.address": "مركز الطلاب، المبنى أ",
			"common.viewDetails": "عرض التفاصيل",
			"common.viewAllEvents": "عرض كل الفعاليات",
			"common.addToCalendar": "أضف إلى التقويم",
			"common.share": "مشاركة",
			"common.resetFilters": "إعادة ضبط الفلاتر",
			"common.sendMessage": "إرسال الرسالة",
			"common.clearForm": "مسح النموذج",
			"common.featuredEvent": "فعالية مميزة",
			"common.upcomingEvent": "فعالية قادمة",
			"common.noEventsTitle": "لا توجد فعاليات تطابق هذه الفلاتر",
			"common.noEventsText": "جرّب مسح التاريخ أو اختيار فئة مختلفة.",
			"common.backToTop": "العودة إلى الأعلى",
			"theme.toggleDark": "الوضع الداكن",
			"theme.toggleLight": "الوضع الفاتح",
			"booking.open": "احجز مقعداً",
			"booking.title": "احجز مقعدك",
			"booking.subtitle": "اختر عدد المقاعد واترك بياناتك.",
			"booking.nameLabel": "الاسم الكامل",
			"booking.emailLabel": "البريد الإلكتروني",
			"booking.seatsLabel": "المقاعد",
			"booking.seatsOption1": "مقعد واحد",
			"booking.seatsOption2": "مقعدان",
			"booking.seatsOption3": "3 مقاعد",
			"booking.namePlaceholder": "اسمك",
			"booking.emailPlaceholder": "you@university.edu",
			"booking.close": "إغلاق",
			"booking.closeAria": "إغلاق",
			"booking.submit": "تأكيد الحجز",
			"results.showing": "عرض {count} {label}",
			"results.event": "فعالية",
			"results.events": "فعاليات"
		}
	};

	const getTranslation = (lang, key) => {
		return translations[lang]?.[key] ?? translations.en?.[key];
	};

	let currentLanguage = "en";
	let currentTheme = "light";
	let refreshEventsFilters = null;

	const applyTranslations = (lang) => {
		const dict = translations[lang] || translations.en;
		if (!dict) {
			return;
		}

		document.querySelectorAll("[data-i18n]").forEach((element) => {
			const key = element.dataset.i18n;
			const value = dict[key];
			if (value) {
				element.textContent = value;
			}
		});

		document.querySelectorAll("[data-i18n-html]").forEach((element) => {
			const key = element.dataset.i18nHtml;
			const value = dict[key];
			if (value) {
				element.innerHTML = value;
			}
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
			const key = element.dataset.i18nPlaceholder;
			const value = dict[key];
			if (value) {
				element.setAttribute("placeholder", value);
			}
		});

		document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
			const key = element.dataset.i18nAria;
			const value = dict[key];
			if (value) {
				element.setAttribute("aria-label", value);
			}
		});
	};

	const updateThemeToggleLabel = () => {
		const toggle = document.querySelector("[data-theme-toggle]");
		const label = document.querySelector("[data-theme-label]");
		if (!toggle || !label) {
			return;
		}
		const labelKey = currentTheme === "dark" ? "theme.toggleLight" : "theme.toggleDark";
		const fallback = currentTheme === "dark" ? "Light mode" : "Dark mode";
		const labelText = getTranslation(currentLanguage, labelKey) || fallback;
		label.textContent = labelText;
		label.dataset.i18n = labelKey;
		toggle.setAttribute("aria-label", labelText);
		toggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
	};

	const setLanguage = (lang) => {
		currentLanguage = translations[lang] ? lang : "en";
		document.documentElement.lang = currentLanguage;
		document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
		localStorage.setItem("lang", currentLanguage);
		applyTranslations(currentLanguage);
		updateThemeToggleLabel();
		refreshEventsFilters?.();

		document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
			const isActive = button.dataset.langToggle === currentLanguage;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-pressed", String(isActive));
		});
	};

	const initLanguageToggle = () => {
		const toggles = Array.from(document.querySelectorAll("[data-lang-toggle]"));
		if (!toggles.length) {
			return;
		}

		toggles.forEach((button) => {
			button.addEventListener("click", () => {
				setLanguage(button.dataset.langToggle || "en");
			});
		});

		const storedLang = localStorage.getItem("lang");
		const initialLang = translations[storedLang] ? storedLang : "en";
		setLanguage(initialLang);
	};

	const setTheme = (theme, persist = true) => {
		currentTheme = theme === "dark" ? "dark" : "light";
		document.documentElement.dataset.theme = currentTheme;
		if (persist) {
			localStorage.setItem("theme", currentTheme);
		}
		updateThemeToggleLabel();
	};

	const initThemeToggle = () => {
		const toggle = document.querySelector("[data-theme-toggle]");
		if (!toggle) {
			return;
		}

		const storedTheme = localStorage.getItem("theme");
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		setTheme(storedTheme || systemTheme, Boolean(storedTheme));

		toggle.addEventListener("click", () => {
			setTheme(currentTheme === "dark" ? "light" : "dark");
		});

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		if (!storedTheme && typeof mediaQuery.addEventListener === "function") {
			mediaQuery.addEventListener("change", (event) => {
				setTheme(event.matches ? "dark" : "light", false);
			});
		}
	};
	const initFeaturedSlider = (slider) => {
		const slides = Array.from(slider.querySelectorAll("[data-slide]"));
		const indicators = Array.from(slider.querySelectorAll("[data-slide-indicator]"));
		const prevBtn = slider.querySelector("[data-slide-prev]");
		const nextBtn = slider.querySelector("[data-slide-next]");
		const stage = slider.querySelector(".featured-stage");
		const intervalValue = Number.parseInt(slider.dataset.interval, 10);
		const interval = Number.isFinite(intervalValue) ? Math.max(intervalValue, 3000) : 6500;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const hasMultipleSlides = slides.length > 1;
		let currentIndex = 0;
		let timerId = null;
		let isPaused = false;
		let pointerStartX = 0;
		let isPointerDown = false;

		if (!slides.length) {
			return;
		}

		slider.setAttribute("tabindex", "0");
		slider.setAttribute("aria-roledescription", "carousel");

		const setActive = (index) => {
			slides.forEach((slide, idx) => {
				const isActive = idx === index;
				slide.classList.toggle("is-active", isActive);
				slide.setAttribute("aria-hidden", String(!isActive));
			});

			indicators.forEach((indicator, idx) => {
				const isActive = idx === index;
				indicator.classList.toggle("is-active", isActive);
				indicator.setAttribute("aria-current", isActive ? "true" : "false");
				indicator.setAttribute("aria-selected", String(isActive));
			});
		};

		const goTo = (index, restartAuto = true) => {
			currentIndex = (index + slides.length) % slides.length;
			setActive(currentIndex);
			if (restartAuto) {
				startAuto();
			}
		};

		const startAuto = () => {
			if (!hasMultipleSlides || prefersReducedMotion.matches || isPaused) {
				return;
			}
			stopAuto();
			timerId = window.setInterval(() => {
				goTo(currentIndex + 1, false);
			}, interval);
		};

		const stopAuto = () => {
			if (timerId) {
				window.clearInterval(timerId);
				timerId = null;
			}
		};

		const pauseAuto = () => {
			isPaused = true;
			stopAuto();
		};

		const resumeAuto = () => {
			isPaused = false;
			startAuto();
		};

		const handleKeydown = (event) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				goTo(currentIndex - 1);
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				goTo(currentIndex + 1);
			}
		};

		const handlePointerDown = (event) => {
			if (!hasMultipleSlides) {
				return;
			}
			isPointerDown = true;
			pointerStartX = event.clientX;
			stage?.setPointerCapture?.(event.pointerId);
		};

		const handlePointerUp = (event) => {
			if (!isPointerDown) {
				return;
			}
			const delta = event.clientX - pointerStartX;
			if (Math.abs(delta) > 45) {
				if (delta < 0) {
					goTo(currentIndex + 1);
				} else {
					goTo(currentIndex - 1);
				}
			}
			isPointerDown = false;
		};

		prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
		nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

		indicators.forEach((indicator, idx) => {
			indicator.setAttribute("role", "tab");
			indicator.addEventListener("click", () => goTo(idx));
		});

		stage?.addEventListener("pointerdown", handlePointerDown);
		stage?.addEventListener("pointerup", handlePointerUp);
		stage?.addEventListener("pointercancel", () => {
			isPointerDown = false;
		});

		slider.addEventListener("mouseenter", pauseAuto);
		slider.addEventListener("mouseleave", resumeAuto);
		slider.addEventListener("focusin", pauseAuto);
		slider.addEventListener("focusout", (event) => {
			if (!slider.contains(event.relatedTarget)) {
				resumeAuto();
			}
		});
		slider.addEventListener("keydown", handleKeydown);

		if (!hasMultipleSlides) {
			prevBtn?.setAttribute("disabled", "true");
			nextBtn?.setAttribute("disabled", "true");
			indicators.forEach((indicator) => {
				indicator.setAttribute("disabled", "true");
			});
		}

		if (typeof prefersReducedMotion.addEventListener === "function") {
			prefersReducedMotion.addEventListener("change", (event) => {
				if (event.matches) {
					stopAuto();
				} else {
					startAuto();
				}
			});
		}

		document.addEventListener("visibilitychange", () => {
			if (document.hidden) {
				stopAuto();
			} else {
				startAuto();
			}
		});

		setActive(currentIndex);
		startAuto();
	};

	const initEventsFilters = () => {
		const eventsPage = document.querySelector("[data-events-page]");
		if (!eventsPage) {
			return;
		}

		const categorySelect = eventsPage.querySelector("[data-filter-category]");
		const locationSelect = eventsPage.querySelector("[data-filter-location]");
		const dateInput = eventsPage.querySelector("[data-filter-date]");
		const resetBtn = eventsPage.querySelector("[data-filter-reset]");
		const events = Array.from(eventsPage.querySelectorAll("[data-event]"));
		const resultsCount = eventsPage.querySelector("[data-results-count]");
		const emptyState = eventsPage.querySelector("[data-empty-state]");
		const storageKey = "eventsFilters";
		let filterTimerId = null;

		if (!events.length) {
			return;
		}

		const isValidOption = (select, value) => {
			if (!select || !value) {
				return false;
			}
			return Array.from(select.options).some((option) => option.value === value);
		};

		try {
			const storedFilters = JSON.parse(localStorage.getItem(storageKey) || "{}");
			if (storedFilters && typeof storedFilters === "object") {
				if (isValidOption(categorySelect, storedFilters.category)) {
					categorySelect.value = storedFilters.category;
				}
				if (isValidOption(locationSelect, storedFilters.location)) {
					locationSelect.value = storedFilters.location;
				}
				if (dateInput && typeof storedFilters.date === "string") {
					dateInput.value = storedFilters.date;
				}
			}
		} catch (error) {
			// Ignore invalid or inaccessible stored filters.
		}

		const applyFilters = () => {
			const categoryValue = categorySelect?.value || "all";
			const locationValue = locationSelect?.value || "all";
			const dateValue = dateInput?.value || "";
			const hasActiveFilters = categoryValue !== "all" || locationValue !== "all" || dateValue !== "";
			let visibleCount = 0;

			events.forEach((event) => {
				const matchesCategory = categoryValue === "all" || event.dataset.category === categoryValue;
				const matchesLocation = locationValue === "all" || event.dataset.location === locationValue;
				const matchesDate = !dateValue || event.dataset.date === dateValue;
				const isVisible = matchesCategory && matchesLocation && matchesDate;
				event.classList.toggle("is-hidden", !isVisible);
				if (isVisible) {
					visibleCount += 1;
				}
			});

			if (resultsCount) {
				const labelKey = visibleCount === 1 ? "results.event" : "results.events";
				const label = getTranslation(currentLanguage, labelKey) || (visibleCount === 1 ? "event" : "events");
				const template = getTranslation(currentLanguage, "results.showing") || "Showing {count} {label}";
				resultsCount.textContent = template.replace("{count}", visibleCount).replace("{label}", label);
			}

			if (emptyState) {
				emptyState.hidden = visibleCount !== 0;
			}

			if (resetBtn) {
				resetBtn.disabled = !hasActiveFilters;
				resetBtn.setAttribute("aria-disabled", String(!hasActiveFilters));
			}

			try {
				if (hasActiveFilters) {
					localStorage.setItem(
						storageKey,
						JSON.stringify({
							category: categoryValue,
							location: locationValue,
							date: dateValue
						})
					);
				} else {
					localStorage.removeItem(storageKey);
				}
			} catch (error) {
				// Ignore storage failures (private mode, blocked storage, etc.).
			}
		};

		const scheduleFilterUpdate = () => {
			if (filterTimerId) {
				window.clearTimeout(filterTimerId);
			}
			filterTimerId = window.setTimeout(() => {
				applyFilters();
			}, 120);
		};

		categorySelect?.addEventListener("change", scheduleFilterUpdate);
		locationSelect?.addEventListener("change", scheduleFilterUpdate);
		dateInput?.addEventListener("change", scheduleFilterUpdate);
		dateInput?.addEventListener("input", scheduleFilterUpdate);

		resetBtn?.addEventListener("click", () => {
			if (categorySelect) {
				categorySelect.value = "all";
			}
			if (locationSelect) {
				locationSelect.value = "all";
			}
			if (dateInput) {
				dateInput.value = "";
			}
			applyFilters();
		});

		applyFilters();
		refreshEventsFilters = applyFilters;
	};

	const initContactForm = () => {
		const contactPage = document.querySelector("[data-contact-page]");
		if (!contactPage) {
			return;
		}

		const form = contactPage.querySelector("[data-contact-form]");
		const nameInput = contactPage.querySelector("[data-contact-name]");
		const emailInput = contactPage.querySelector("[data-contact-email]");
		const messageInput = contactPage.querySelector("[data-contact-message]");
		const successAlert = contactPage.querySelector("[data-contact-success]");
		const errorAlert = contactPage.querySelector("[data-contact-error]");
		const resetBtn = contactPage.querySelector("[data-contact-reset]");

		if (!form) {
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let alertTimerId = null;
		let hasSubmitted = false;
		let ignoreNextReset = false;

		successAlert?.setAttribute("aria-live", "polite");
		errorAlert?.setAttribute("aria-live", "assertive");

		const hideAlerts = () => {
			if (alertTimerId) {
				window.clearTimeout(alertTimerId);
				alertTimerId = null;
			}
			if (successAlert) {
				successAlert.hidden = true;
			}
			if (errorAlert) {
				errorAlert.hidden = true;
			}
		};

		const showAlert = (type) => {
			hideAlerts();
			if (type === "success" && successAlert) {
				successAlert.hidden = false;
				alertTimerId = window.setTimeout(() => {
					hideAlerts();
				}, 4500);
			}
			if (type === "error" && errorAlert) {
				errorAlert.hidden = false;
			}
		};

		const setFieldState = (field, isFieldValid) => {
			if (!field) {
				return;
			}
			const hasValue = field.value.trim().length > 0;
			if (!hasSubmitted && !hasValue) {
				field.removeAttribute("aria-invalid");
				return;
			}
			field.setAttribute("aria-invalid", String(!isFieldValid));
		};

		const validateFields = () => {
			const nameValue = nameInput?.value.trim() ?? "";
			const emailValue = emailInput?.value.trim() ?? "";
			const messageValue = messageInput?.value.trim() ?? "";
			const nameValid = nameValue.length > 0;
			const emailValid = emailPattern.test(emailValue);
			const messageValid = messageValue.length > 0;
			setFieldState(nameInput, nameValid);
			setFieldState(emailInput, emailValid);
			setFieldState(messageInput, messageValid);
			const isValid = nameValid && emailValid && messageValid;
			const firstInvalid = !nameValid ? nameInput : !emailValid ? emailInput : !messageValid ? messageInput : null;
			return { isValid, firstInvalid };
		};

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			hasSubmitted = true;
			const { isValid, firstInvalid } = validateFields();
			if (isValid) {
				showAlert("success");
				ignoreNextReset = true;
				form.reset();
				hasSubmitted = false;
				validateFields();
			} else {
				showAlert("error");
				firstInvalid?.focus();
			}
		});

		form.addEventListener("reset", () => {
			window.setTimeout(() => {
				if (ignoreNextReset) {
					ignoreNextReset = false;
					validateFields();
					return;
				}
				hasSubmitted = false;
				hideAlerts();
				validateFields();
			}, 0);
		});

		resetBtn?.addEventListener("click", () => {
			hideAlerts();
		});

		[nameInput, emailInput, messageInput].forEach((input) => {
			input?.addEventListener("input", () => {
				const { isValid } = validateFields();
				if (errorAlert && !errorAlert.hidden && isValid) {
					hideAlerts();
				}
				if (successAlert && !successAlert.hidden) {
					hideAlerts();
				}
			});
		});
	};

	const initScrollTop = () => {
		const scrollBtn = document.querySelector("[data-scroll-top]");
		if (!scrollBtn) {
			return;
		}

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let ticking = false;

		const toggleVisibility = () => {
			const shouldShow = window.scrollY > 320;
			scrollBtn.classList.toggle("is-visible", shouldShow);
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(toggleVisibility);
			}
		};

		scrollBtn.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: prefersReducedMotion.matches ? "auto" : "smooth"
			});
		});

		window.addEventListener("scroll", onScroll, { passive: true });
		toggleVisibility();
	};

	const sliders = document.querySelectorAll("[data-featured-slider]");
	sliders.forEach(initFeaturedSlider);
	initEventsFilters();
	initContactForm();
	initThemeToggle();
	initLanguageToggle();
	initScrollTop();
});

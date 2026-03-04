const fs = require('fs');

const companies = ['Infosys', 'TCS', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'IBM', 'Oracle', 'SAP', 'Dell', 'Amazon', 'Flipkart', 'Swiggy', 'Razorpay', 'PhonePe', 'Paytm', 'Zoho', 'Freshworks', 'Juspay', 'CRED', 'Udaan', 'Groww', 'Zerodha', 'Ola', 'InMobi', 'Postman', 'BrowserStack', 'Chargebee', 'Mindtickle', 'Darwinbox'];
const roles = ['SDE Intern', 'Graduate Engineer Trainee', 'Junior Backend Developer', 'Frontend Intern', 'QA Intern', 'Data Analyst Intern', 'Java Developer (0-1)', 'Python Developer (Fresher)', 'React Developer (1-3)', 'Full Stack Developer', 'DevOps Engineer', 'Mobile App Developer'];
const locations = ['Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai', 'Delhi NCR', 'Gurgaon', 'Noida'];
const modes = ['Remote', 'Hybrid', 'Onsite'];
const experiences = ['Fresher', '0-1', '1-3', '3-5'];
const sources = ['LinkedIn', 'Naukri', 'Indeed'];
const salaries = ['3–5 LPA', '6–10 LPA', '10–18 LPA', '₹15k–₹40k/month Internship', '12-24 LPA', '5-8 LPA', '8-15 LPA'];
const skillPool = ['React', 'Node.js', 'Python', 'Java', 'C++', 'AWS', 'SQL', 'MongoDB', 'Docker', 'Kubernetes', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git', 'Spring Boot', 'Django', 'Express'];

const jobs = [];

for(let i = 1; i <= 60; i++) {
    const company = companies[Math.floor(Math.random() * companies.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const mode = modes[Math.floor(Math.random() * modes.length)];
    const experience = experiences[Math.floor(Math.random() * experiences.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const salaryRange = salaries[Math.floor(Math.random() * salaries.length)];
    const postedDaysAgo = Math.floor(Math.random() * 11);
    
    // Pick 3-5 random skills
    const numSkills = 3 + Math.floor(Math.random() * 3);
    const shuffledSkills = skillPool.sort(() => 0.5 - Math.random());
    const skills = shuffledSkills.slice(0, numSkills);
    
    const description = \`Join \${company} as a \${role} and help us build scalable solutions. We are looking for passionate individuals with a strong foundation in computer science principles. You will be working closely with our experienced engineering team to deliver high-quality products. \` + 
    (mode === 'Remote' ? 'This role is fully remote, offering great work-life balance.' : \`This is a \${mode.toLowerCase()} role based out of our \${location} office.\`);
    
    jobs.push({
        id: \`job-\${i}-\${Date.now()}\`,
        title: role,
        company,
        location,
        mode,
        experience,
        skills,
        source,
        postedDaysAgo,
        salaryRange,
        applyUrl: \`https://example.com/apply/\${i}\`,
        description
    });
}

const fileContent = \`const JOBS_DATA = \${JSON.stringify(jobs, null, 2)};\\n\`;
fs.writeFileSync('./js/jobs-data.js', fileContent);
console.log('Successfully generated 60 jobs in js/jobs-data.js');

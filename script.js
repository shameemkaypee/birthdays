// Birthday data

const birthdayData = [
    { name: "Aakash Gupta", birthday: "08/08" },
    { name: "Anonymous", birthday: "16/07" }, // Rudransh Narang
    { name: "Anonymous", birthday: "29/07" }, //Abhinav Mitharwal
    { name: "Aarushi Dubey", birthday: "08/01" },
    { name: "Abha Motghare", birthday: "16/02" },
    { name: "Abhisumat Bishnoi", birthday: "30/04" },
    { name: "Aditi Shukla", birthday: "12/12" },
    { name: "Aditya Kalyankar", birthday: "04/05" },
    { name: "Aditya Kumar Yadav", birthday: "05/06" },
    { name: "Aditya Singh Jadoun", birthday: "15/09" },
    { name: "Aditya Suhag", birthday: "06/09" },
    { name: "Aditya Swaroop", birthday: "27/03" },
    { name: "Aman Nayak", birthday: "01/10" },
    { name: "Amisha Sinha", birthday: "05/11" },
    { name: "Amol Saini", birthday: "19/05" },
    { name: "Anirudh Sharma", birthday: "16/11" },
    { name: "Anshikat Srivastava", birthday: "01/05" },
    { name: "Anshul Sinha", birthday: "05/05" },
    { name: "Anuj", birthday: "24/11" },
    { name: "Anuj Kayat", birthday: "11/09" },
    { name: "Anuradha Singh", birthday: "10/10" },
    { name: "Anuska Priyadarshini", birthday: "31/03" },
    { name: "Archit Goel", birthday: "10/12" },
    { name: "Arjit Sahu", birthday: "03/05" },
    { name: "Aryan Jain", birthday: "15/10" },
    { name: "Ashutosh Maurya", birthday: "01/04" },
    { name: "Astitva Singh Bhandari", birthday: "12/07" },
    { name: "Atharva Mishra", birthday: "10/09" },
    { name: "Aviral Tiwari", birthday: "03/06" },
    { name: "Ayush Kumar Mishra", birthday: "01/01" },
    { name: "Bhaskar Shekhar Sarker", birthday: "03/09" },
    { name: "Chaitra Reddy Dendi", birthday: "17/07" },
    { name: "Cherry Patwari", birthday: "20/06" },
    { name: "Chhavi Garg", birthday: "15/06" },
    { name: "Debanita Sahoo", birthday: "20/12" },
    { name: "Deepshikha Das", birthday: "13/02" },
    { name: "Deeti Vyas", birthday: "02/11" },
    { name: "Dev Raushan", birthday: "13/11" },
    { name: "Devendra Chouhan", birthday: "03/02" },
    { name: "Dhanish Kapoor", birthday: "11/10" },
    { name: "Dhawal Patidar", birthday: "11/10" },
    { name: "Dhruv Gupta", birthday: "27/04" },
    { name: "Dhruv Kanaujia", birthday: "01/06" },
    { name: "Dhruv Mittal", birthday: "25/03" },
    { name: "Dhruv Somani", birthday: "11/07" },
    { name: "Dhwani Lal", birthday: "25/09" },
    { name: "Ekamjyot Kaur", birthday: "07/09" },
    { name: "Garvita Tyagi", birthday: "26/05" },
    { name: "Gauri Chaube", birthday: "22/01" },
    { name: "Gourav Kumar", birthday: "25/10" },
    { name: "Haardikh Gurnani", birthday: "06/01" },
    { name: "Harsh Choudhary", birthday: "07/10" },
    { name: "Harsh Sharma", birthday: "01/12" },
    { name: "Harshita Kumari", birthday: "19/09" },
    { name: "Himansh Sharma", birthday: "18/12" },
    { name: "Jayesh Tribhuwan", birthday: "16/07" },
    { name: "Jiya Mittal", birthday: "05/09" },
    { name: "Kaartik Tiwari", birthday: "01/05" },
    { name: "Kanak Rawat", birthday: "02/02" },
    { name: "Kartikeya Kumar", birthday: "05/04" },
    { name: "Kautilya Maheshwari", birthday: "19/11" },
    { name: "Khyati Singh", birthday: "30/10" },
    { name: "Krishnali Jaiswal", birthday: "10/11" },
    { name: "Kundan Kumar Sah", birthday: "13/02" },
    { name: "Srimannarayana Abhiram Madduri", birthday: "10/09" },
    { name: "Manan Sehlot", birthday: "13/11" },
    { name: "Mandhar Joshi", birthday: "03/05" },
    { name: "Manish Kumar Murmu", birthday: "11/06" },
    { name: "Manya Batra", birthday: "06/05" },
    { name: "Mayank Pratap Jaiswal", birthday: "02/05" },
    { name: "Mitul Goyal", birthday: "30/06" },
    { name: "Mohammed Ashik", birthday: "31/05" },
    { name: "Mohammed Shameem K P", birthday: "27/05" },
    { name: "Moksha", birthday: "11/12" },
    { name: "Monisha Suruliraja", birthday: "28/10" },
    { name: "Mrigya Gupta", birthday: "05/12" },
    { name: "Nakul Agrawal", birthday: "29/03" },
    { name: "Naman Kumar", birthday: "17/07" },
    { name: "Nikhil Basant", birthday: "04/08" },
    { name: "Nishant Singh", birthday: "10/01" },
    { name: "Ojasvi Kaushik", birthday: "14/12" },
    { name: "Venkata Nivriti Pakala", birthday: "18/12" },
    { name: "Gopi Parmar", birthday: "25/12" },
    { name: "Parnika Saxena", birthday: "02/11" },
    { name: "Parth Kotnala", birthday: "06/02" },
    { name: "Parth Tuteja", birthday: "16/11" },
    { name: "Pooja Ghangash", birthday: "14/01" },
    { name: "Prarabdh Shukla", birthday: "23/03" },
    { name: "Prashant Kumar", birthday: "03/07" },
    { name: "Prashant Kumar", birthday: "27/08" },
    { name: "Pratham Mittal", birthday: "25/06" },
    { name: "Prisha Dere", birthday: "06/04" },
    { name: "Priyanka Prasad", birthday: "14/08" },
    { name: "Priyanshu Kumar", birthday: "09/03" },
    { name: "Rajas Sharma", birthday: "23/08" },
    { name: "Rajat Sarswat", birthday: "04/05" },
    { name: "Rajbir Singh", birthday: "19/01" },
    { name: "Rehan Dutt", birthday: "18/11" },
    { name: "Reyaan Meadh", birthday: "14/05" },
    { name: "Ridhima Makkar", birthday: "28/08" },
    { name: "Rishabh Garg", birthday: "16/07" },
    { name: "Riya Gandhi", birthday: "03/10" },
    { name: "Saguna Rishi", birthday: "07/08" },
    { name: "Sanat Kumar", birthday: "30/03" },
    { name: "Saumya Mathpal", birthday: "02/08" },
    { name: "Savinay Dongre", birthday: "24/06" },
    { name: "Shashank Gupta", birthday: "03/01" },
    { name: "Shatakshi Dubey", birthday: "25/08" },
    { name: "Sheelnidhi Ranawat", birthday: "07/08" },
    { name: "Shivang Pandey", birthday: "11/09" },
    { name: "Shiven Banyal", birthday: "29/08" },
    { name: "Shreshtha Srivastava", birthday: "10/04" },
    { name: "Shrishti Golhani", birthday: "04/05" },
    { name: "Snigdha Rajvanshi", birthday: "01/03" },
    { name: "Somil Choudhary", birthday: "11/11" },
    { name: "Anonymous", birthday: "27/09" }, //Sonu Raj
    { name: "Jaswanth Sornapudi", birthday: "09/09" },
    { name: "Soumili Chatterjee", birthday: "08/03" },
    { name: "Soumili Halder", birthday: "14/03" },
    { name: "Soumya Donapati", birthday: "16/08" },
    { name: "Sourav Deb", birthday: "28/05" },
    { name: "Spandan Choundiyal", birthday: "22/11" },
    { name: "Srijan Kumar", birthday: "07/01" },
    { name: "Srishti Dubey", birthday: "17/09" },
    { name: "Sudiksha Rastogi", birthday: "30/10" },
    { name: "Suhani Trehan", birthday: "11/08" },
    { name: "Sukriti Biswas", birthday: "20/08" },
    { name: "Sumit Patidar", birthday: "31/01" },
    { name: "Sunish Asher Gundala", birthday: "20/04" },
    { name: "Tanishka Vats", birthday: "23/12" },
    { name: "Tanishq Kumar Jaiswal", birthday: "15/01" },
    { name: "Tanmay Gulati", birthday: "30/05" },
    { name: "Hari Sankar Brahma Tavva", birthday: "03/11" },
    { name: "Thejo R", birthday: "11/07" },
    { name: "Anonymous", birthday: "09/09" }, //Tulsi Gurjar
    { name: "Tupur Mishra", birthday: "05/06" },
    { name: "Ujjwala Naudiyal", birthday: "06/03" },
    { name: "Utkarsh Panchal", birthday: "13/09" },
    { name: "Vaishnavi Gupta", birthday: "16/05" },
    { name: "Varsha Kumar", birthday: "25/09" },
    { name: "Siddanth Vemula", birthday: "21/06" },
    { name: "Viseshwar Vivek Sonkar", birthday: "11/02" },
    { name: "Vrinda Gupta", birthday: "14/02" },
    { name: "Yash Attbhaiya", birthday: "07/06" },
    { name: "Yash Jha", birthday: "05/08" },
    { name: "Yash Tripathi", birthday: "21/01" },
    { name: "Ansh Kumar Sahu", birthday: "04/10" },
    { name: "Joshya Srivastava", birthday: "10/03" }
];

// Function to get today's date in DD/MM format
function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
}

// Function to calculate days until next birthday
function getDaysUntilNextBirthday(birthday) {
    const today = new Date();
    const [day, month] = birthday.split('/').map(Number);
    const nextBirthday = new Date(today.getFullYear(), month - 1, day);
    
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const diffTime = nextBirthday - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Function to find next birthday
function findNextBirthday() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    
    let nextBirthday = null;
    let minDays = Infinity;
    
    birthdayData.forEach(person => {
        const [day, month] = person.birthday.split('/').map(Number);
        const daysUntil = getDaysUntilNextBirthday(person.birthday);
        
        if (daysUntil < minDays) {
            minDays = daysUntil;
            nextBirthday = person;
        }
    });
    
    return { person: nextBirthday, daysUntil: minDays };
}

// Function to create confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#667eea', '#764ba2', '#f7fafc', '#edf2f7'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            opacity: ${Math.random() * 0.5 + 0.5};
            transform: rotate(${Math.random() * 360}deg);
            animation: fall ${Math.random() * 3 + 2}s linear infinite;
        `;
        confettiContainer.appendChild(confetti);
    }
}

// Add confetti animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Function to check birthdays
function checkBirthdays() {
    const today = getTodayDate();
    const birthdayNames = document.getElementById('birthdayNames');
    const nextBirthdayElement = document.getElementById('nextBirthday');
    const matchingBirthdays = birthdayData.filter(person => person.birthday === today);

    if (matchingBirthdays.length === 0) {
        birthdayNames.innerHTML = '<div class="no-birthdays">Quiet day at Sirmaur — no cake slices needed 🎂</div>';
        document.querySelector('.confetti-container').innerHTML = '';
    } else {
        birthdayNames.innerHTML = matchingBirthdays
            .map(person => `<div class="birthday-name">${person.name}</div>`)
            .join('');
        createConfetti();
    }

    // Update next birthday
    const nextBirthday = findNextBirthday();
    if (nextBirthday.person) {
        nextBirthdayElement.innerHTML = `
            <div class="next-birthday">
                Next up: ${nextBirthday.person.name} in ${nextBirthday.daysUntil} days 🎈
            </div>
        `;
    }
}

// Toggle monthly view
let isMonthlyView = false;
document.getElementById('toggleView').addEventListener('click', () => {
    isMonthlyView = !isMonthlyView;
    const birthdayNames = document.getElementById('birthdayNames');
    
    if (isMonthlyView) {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const monthBirthdays = birthdayData
            .filter(person => {
                const [, month] = person.birthday.split('/').map(Number);
                return month === currentMonth;
            })
            .sort((a, b) => {
                const [dayA] = a.birthday.split('/').map(Number);
                const [dayB] = b.birthday.split('/').map(Number);
                return dayA - dayB;
            });

        birthdayNames.innerHTML = `
            <h3 style="margin-bottom: 1rem; color: var(--text-secondary);">Birthdays this month:</h3>
            ${monthBirthdays.map(person => `
                <div class="birthday-name">
                    ${person.name} - ${person.birthday}
                </div>
            `).join('')}
        `;
    } else {
        checkBirthdays();
    }
});

// Check birthdays when the page loads
document.addEventListener('DOMContentLoaded', checkBirthdays);

// Update birthdays every minute
setInterval(checkBirthdays, 60000); 

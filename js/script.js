// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Calendar Functionality
function generateCalendar(month, year) {
    const calendarDays = document.getElementById('calendar-days');
    const currentMonth = document.getElementById('current-month');
    
    // Clear previous calendar
    calendarDays.innerHTML = '';
    
    // Set current month and year in header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonth.textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and total days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get days from previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    
    // Create empty slots for days of previous month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'empty');
        calendarDays.appendChild(emptyDay);
    }
    
    // Create days for current month
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonthCheck = today.getMonth();
    const currentYearCheck = today.getFullYear();
    
    // Sample events data (in a real app, this would come from a database)
    const eventDays = [5, 12, 15, 22, 27];
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        
        // Highlight today
        if (day === currentDate && month === currentMonthCheck && year === currentYearCheck) {
            dayElement.classList.add('today');
        }
        
        // Mark event days
        if (eventDays.includes(day)) {
            dayElement.classList.add('event');
        }
        
        calendarDays.appendChild(dayElement);
    }
}

// Initialize calendar with current month
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

generateCalendar(currentMonth, currentYear);

// Previous month button
document.getElementById('prev-month').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

// Next month button
document.getElementById('next-month').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
            document.querySelector('nav ul').style.display = 'none';
        }
    });
});

// Adjust mobile menu on window resize
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 992) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});
// Dummy course data
const courses = [
  { id: 1, title: 'Web Development', description: 'Learn to build websites with HTML, CSS, and JS.' },
  { id: 2, title: 'Data Science', description: 'An introduction to data analysis and visualization.' },
  { id: 3, title: 'Machine Learning', description: 'Explore the fundamentals of machine learning algorithms.' }
];

// expose courses globally so other pages can reuse the data
window.courses = courses;

function renderCourses() {
  const container = document.getElementById('courseContainer');
  if (!container) return; // allow script reuse on other pages
  courses.forEach(course => {
    const li = document.createElement('li');
    li.className = 'course-item';
    li.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    container.appendChild(li);
  });
}

// Initialize course rendering when DOM is ready
window.addEventListener('DOMContentLoaded', renderCourses);

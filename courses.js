function renderCourseList() {
  const container = document.getElementById('coursesContainer');
  window.courses.forEach(course => {
    const li = document.createElement('li');
    li.className = 'course-item';
    li.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><button class="enroll-btn" onclick="enroll(${course.id})">Enroll</button>`;
    container.appendChild(li);
  });
}

function enroll(courseId) {
  let enrolled = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
  if (!enrolled.includes(courseId)) {
    enrolled.push(courseId);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));
    alert('Enrolled in course!');
  } else {
    alert('You are already enrolled in this course.');
  }
}

window.addEventListener('DOMContentLoaded', renderCourseList);

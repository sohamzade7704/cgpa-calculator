document.getElementById('numberOfCourses').addEventListener('input', generateCourseInputs);

function generateCourseInputs() {
  const numberOfCourses = parseInt(document.getElementById('numberOfCourses').value);
  const courseInputs = document.getElementById('courseInputs');
  courseInputs.innerHTML = '';

  for (let i = 0; i < numberOfCourses; i++) {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course-container');
    courseDiv.innerHTML = `
      <h3>Course ${i + 1}</h3>
      <label for="courseCredits${i}">Credits:</label>
      <input type="number" id="courseCredits${i}" required>
      <label for="courseGrade${i}">Grade (0-10):</label>
      <input type="number" id="courseGrade${i}" step="0.01" required>
    `;
    courseInputs.appendChild(courseDiv);
  }

  addEnterKeyListeners();
}

function addEnterKeyListeners() {
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        } else {
          document.querySelector('button').focus(); // Focus the button if it's the last input
        }
      }
    });
  });
}

function calculateCGPA() {
  const currentCredits = parseFloat(document.getElementById('currentCredits').value);
  const currentCGPA = parseFloat(document.getElementById('currentCGPA').value);
  const numberOfCourses = parseInt(document.getElementById('numberOfCourses').value);

  let totalCredits = currentCredits;
  let weightedSum = Math.round(currentCredits * currentCGPA);

  for (let i = 0; i < numberOfCourses; i++) {
    const courseCredits = parseFloat(document.getElementById(`courseCredits${i}`).value);
    const courseGrade = parseFloat(document.getElementById(`courseGrade${i}`).value);

    weightedSum += Math.round(courseCredits * courseGrade);
    totalCredits += courseCredits;
  }

  const newCGPA = weightedSum / totalCredits;
  document.getElementById('result').innerText = `Net CGPA: ${newCGPA.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', addEnterKeyListeners);

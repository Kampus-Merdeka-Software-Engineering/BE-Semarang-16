const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if available

// Sample course data (replace with your actual data)
const courses = [
  {
    id: 1,
    name: 'Mathematics 101',
    description: 'Our math courses are designed to help your child develop a strong foundation in mathematics. We cover everything from basic arithmetic to algebra and geometry.',
    teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
  },
  {
    id: 2,
    name: 'Science 101',
    description: 'Our science courses are designed to help your child explore the world around them. We cover everything from biology to chemistry and physics.',
    teacher: 'Safina Ayu D. & Wahyu Nur Almadi',
  },
  {
    id: 3,
    name: 'Social Studies 101',
    description: 'Our social studies courses are designed to help your child learn about the world around them. We cover everything from history to geography and government.',
    teacher: 'Syarif Abyan S. & Satrio Rifqi W.',
  },
  // Add more courses here...
];
// Middleware to parse JSON requests
app.use(express.json());

// Define your static endpoints
app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    res.status(404).json({ message: 'Course not found' });
  } else {
    res.json(course);
  }
});

// Serve static files (e.g., HTML, CSS, JavaScript) for your frontend
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

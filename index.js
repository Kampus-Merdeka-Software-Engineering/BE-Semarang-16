const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if available

// Sample course data (organized by stage)
const courses = {
  elementarySchool: [
    {
      id: 1,
      name: 'Mathematics',
      description: 'Our math courses are designed to help your child develop a strong foundation in mathematics. We cover everything from basic arithmetic to algebra and geometry.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
    {
      id: 2,
      name: 'Science',
      description: 'Our science courses are designed to help your child explore the world around them. We cover everything from biology to chemistry and physics.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
    {
      id: 3,
      name: 'Social Studies',
      description: 'Our social studies courses are designed to help your child learn about the world around them. We cover everything from history to geography and government.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
  ],
  juniorHighSchool: [
    {
      id: 1,
      name: 'Intermediate Mathematics',
      description: 'Our math courses are designed to help your child develop a strong foundation in mathematics. We cover everything from basic arithmetic to algebra and geometry.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
    {
      id: 2,
      name: 'Intermediate Science',
      description: 'Our science courses are designed to help your child explore the world around them. We cover everything from biology to chemistry and physics.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
    {
      id: 3,
      name: 'Intermediate Social Studies',
      description: 'Our social studies courses are designed to help your child learn about the world around them. We cover everything from history to geography and government.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
  ],
  highSchool: [
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
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
    {
      id: 3,
      name: 'Social Studies 101',
      description: 'Our social studies courses are designed to help your child learn about the world around them. We cover everything from history to geography and government.',
      teacher: 'Rani Kusuma A. & Siti Kamila Tunawa',
    },
  ],
};

// Middleware to parse JSON requests
app.use(express.json());

// Define your static endpoints
app.get('/courses/:stage', (req, res) => {
  const { stage } = req.params;

  // Check if the requested stage is valid
  if (courses[stage]) {
    res.json(courses[stage]);
  } else {
    res.status(404).json({ message: 'Stage not found' });
  }
});

app.get('/courses/:stage/:id', (req, res) => {
  const { stage, id } = req.params;
  const courseId = parseInt(id);

  // Check if the requested stage is valid
  if (!courses[stage]) {
    return res.status(404).json({ message: 'Stage not found' });
  }

  const course = courses[stage].find((c) => c.id === courseId);

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

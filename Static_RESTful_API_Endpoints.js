const http = require('http');
const url = require('url');

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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && parsedUrl.pathname === '/courses') {
    // Handle GET request for listing all courses
    res.statusCode = 200;
    res.end(JSON.stringify(courses));
  } else if (req.method === 'GET' && parsedUrl.pathname.startsWith('/courses/')) {
    // Handle GET request for retrieving a specific course by ID
    const courseId = parseInt(parsedUrl.pathname.split('/').pop(), 10);
    const course = courses.find((c) => c.id === courseId);

    if (course) {
      res.statusCode = 200;
      res.end(JSON.stringify(course));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Course not found' }));
    }
  } else {
    // Handle all other requests
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

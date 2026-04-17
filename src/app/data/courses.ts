export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  videoUrl: string;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: "python",
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts. Perfect for beginners and intermediate developers.",
    icon: "🐍",
    color: "from-blue-500 to-cyan-500",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    duration: "12 weeks",
    level: "Beginner to Advanced"
  },
  {
    id: "sql",
    title: "SQL Database",
    description: "Master database management and SQL queries for data manipulation and analysis.",
    icon: "🗄️",
    color: "from-orange-500 to-red-500",
    videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    duration: "8 weeks",
    level: "Beginner to Intermediate"
  },
  {
    id: "html",
    title: "HTML5",
    description: "Build the structure of modern websites with HTML5 semantic elements and best practices.",
    icon: "📄",
    color: "from-red-500 to-pink-500",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: "css",
    title: "CSS3",
    description: "Style beautiful, responsive websites with CSS3, Flexbox, Grid, and animations.",
    icon: "🎨",
    color: "from-purple-500 to-indigo-500",
    videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    duration: "6 weeks",
    level: "Beginner to Intermediate"
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master the programming language of the web. Learn ES6+, DOM manipulation, and more.",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
    duration: "10 weeks",
    level: "Beginner to Advanced"
  }
];

export interface Note {
  title: string;
  content: string;
}

export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface RoadmapDay {
  day: number;
  title: string;
  topics: string[];
  tasks: string[];
}

export const courseNotes: Record<string, Note[]> = {
  python: [
    {
      title: "Introduction to Python",
      content: "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms including procedural, object-oriented, and functional programming."
    },
    {
      title: "Variables and Data Types",
      content: "Python has several built-in data types: int (integers), float (decimal numbers), str (strings), bool (boolean), list, tuple, dict (dictionary), and set. Variables are dynamically typed."
    },
    {
      title: "Control Flow",
      content: "Python uses if-elif-else for conditional statements and for/while loops for iteration. Indentation is crucial in Python as it defines code blocks."
    }
  ],
  sql: [
    {
      title: "Introduction to SQL",
      content: "SQL (Structured Query Language) is used to communicate with databases. It allows you to create, read, update, and delete data (CRUD operations)."
    },
    {
      title: "SELECT Statement",
      content: "The SELECT statement is used to query data from tables. Syntax: SELECT column1, column2 FROM table_name WHERE condition;"
    },
    {
      title: "JOIN Operations",
      content: "JOINs combine rows from two or more tables based on a related column. Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN."
    }
  ],
  html: [
    {
      title: "HTML Structure",
      content: "HTML documents have a basic structure with <!DOCTYPE html>, <html>, <head>, and <body> tags. Semantic HTML5 elements like <header>, <nav>, <main>, <article>, and <footer> improve accessibility."
    },
    {
      title: "Common HTML Elements",
      content: "Essential elements include headings (h1-h6), paragraphs (p), links (a), images (img), lists (ul, ol, li), and forms (form, input, button)."
    },
    {
      title: "Forms and Input",
      content: "HTML forms collect user input using various input types: text, email, password, checkbox, radio, submit, etc. The <form> element wraps all form controls."
    }
  ],
  css: [
    {
      title: "CSS Syntax",
      content: "CSS rules consist of a selector and declaration block. Declarations include property-value pairs. Example: h1 { color: blue; font-size: 24px; }"
    },
    {
      title: "Box Model",
      content: "Every element is a box with content, padding, border, and margin. Understanding the box model is crucial for layout design."
    },
    {
      title: "Flexbox Layout",
      content: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Use display: flex on the container and properties like justify-content and align-items."
    }
  ],
  javascript: [
    {
      title: "JavaScript Basics",
      content: "JavaScript is a dynamic, weakly typed programming language. It runs in browsers and on servers (Node.js). Variables can be declared with var, let, or const."
    },
    {
      title: "Functions",
      content: "Functions are reusable blocks of code. Can be declared as function declarations, function expressions, or arrow functions. Example: const greet = (name) => `Hello ${name}`;"
    },
    {
      title: "DOM Manipulation",
      content: "The DOM (Document Object Model) represents HTML as a tree. JavaScript can manipulate it using methods like getElementById(), querySelector(), createElement(), and addEventListener()."
    }
  ]
};

export const courseMCQs: Record<string, MCQ[]> = {
  python: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".pyth", ".py", ".python", ".pt"],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "define"],
      correctAnswer: 1
    },
    {
      question: "What data type is the object below? L = [1, 2, 3]",
      options: ["Tuple", "Dictionary", "List", "Array"],
      correctAnswer: 2
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "exp", "//"],
      correctAnswer: 1
    }
  ],
  sql: [
    {
      question: "Which SQL statement is used to extract data from a database?",
      options: ["GET", "EXTRACT", "SELECT", "OPEN"],
      correctAnswer: 2
    },
    {
      question: "Which SQL keyword is used to sort the result-set?",
      options: ["SORT", "ORDER BY", "SORT BY", "ORDER"],
      correctAnswer: 1
    },
    {
      question: "What does SQL stand for?",
      options: ["Structured Question Language", "Structured Query Language", "Simple Query Language", "Strong Question Language"],
      correctAnswer: 1
    },
    {
      question: "Which SQL statement is used to update data in a database?",
      options: ["MODIFY", "UPDATE", "SAVE", "CHANGE"],
      correctAnswer: 1
    }
  ],
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correctAnswer: 0
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<list>", "<ul>", "<li>"],
      correctAnswer: 2
    },
    {
      question: "Which attribute specifies a unique identifier for an HTML element?",
      options: ["class", "id", "name", "key"],
      correctAnswer: 1
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      correctAnswer: 2
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 0
    },
    {
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "color", "background-color", "bg-color"],
      correctAnswer: 2
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: [".demo", "#demo", "*demo", "demo"],
      correctAnswer: 1
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-size", "text-style", "font-style"],
      correctAnswer: 1
    }
  ],
  javascript: [
    {
      question: "Inside which HTML element do we put JavaScript?",
      options: ["<js>", "<script>", "<javascript>", "<scripting>"],
      correctAnswer: 1
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["variable x", "v x", "let x", "var: x"],
      correctAnswer: 2
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "=", "x", "-"],
      correctAnswer: 1
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"],
      correctAnswer: 0
    }
  ]
};

export const courseRoadmap: Record<string, RoadmapDay[]> = {
  python: [
    {
      day: 1,
      title: "Python Basics & Setup",
      topics: ["Installing Python", "Python syntax", "Variables and data types", "Basic operators"],
      tasks: ["Install Python on your system", "Write your first 'Hello World' program", "Practice variable declarations", "Complete basic arithmetic exercises"]
    },
    {
      day: 2,
      title: "Control Flow",
      topics: ["If-else statements", "Loops (for, while)", "Break and continue", "Nested loops"],
      tasks: ["Write programs using conditional statements", "Create loop exercises", "Build a simple number guessing game", "Practice nested loop patterns"]
    },
    {
      day: 3,
      title: "Data Structures",
      topics: ["Lists", "Tuples", "Dictionaries", "Sets"],
      tasks: ["Create and manipulate lists", "Work with dictionaries", "Practice set operations", "Build a simple contact book"]
    },
    {
      day: 4,
      title: "Functions & Modules",
      topics: ["Defining functions", "Parameters and return values", "Lambda functions", "Importing modules"],
      tasks: ["Write reusable functions", "Create a calculator using functions", "Explore built-in modules", "Practice lambda expressions"]
    },
    {
      day: 5,
      title: "File Handling & Exceptions",
      topics: ["Reading files", "Writing to files", "Exception handling", "With statement"],
      tasks: ["Read data from text files", "Write and append to files", "Handle errors gracefully", "Create a simple file manager"]
    },
    {
      day: 6,
      title: "Object-Oriented Programming",
      topics: ["Classes and objects", "Inheritance", "Encapsulation", "Polymorphism"],
      tasks: ["Create classes with attributes and methods", "Implement inheritance", "Build a simple banking system", "Practice OOP concepts"]
    },
    {
      day: 7,
      title: "Project & Review",
      topics: ["Review all concepts", "Best practices", "Code organization", "Debugging techniques"],
      tasks: ["Build a complete project (e.g., To-Do List App)", "Review and refactor code", "Document your code", "Plan next learning steps"]
    }
  ],
  sql: [
    {
      day: 1,
      title: "SQL Fundamentals",
      topics: ["Database basics", "SQL syntax", "SELECT statement", "WHERE clause"],
      tasks: ["Understand database concepts", "Install a database system (SQLite/MySQL)", "Write basic SELECT queries", "Filter data using WHERE"]
    },
    {
      day: 2,
      title: "Data Filtering & Sorting",
      topics: ["ORDER BY", "DISTINCT", "LIKE operator", "IN and BETWEEN"],
      tasks: ["Sort query results", "Remove duplicates", "Use pattern matching", "Practice range queries"]
    },
    {
      day: 3,
      title: "Aggregate Functions",
      topics: ["COUNT, SUM, AVG", "MIN and MAX", "GROUP BY", "HAVING clause"],
      tasks: ["Calculate statistics", "Group data", "Filter grouped data", "Create summary reports"]
    },
    {
      day: 4,
      title: "Table Joins",
      topics: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      tasks: ["Combine data from multiple tables", "Practice different join types", "Understand join relationships", "Build complex queries"]
    },
    {
      day: 5,
      title: "Data Manipulation",
      topics: ["INSERT statement", "UPDATE statement", "DELETE statement", "Transactions"],
      tasks: ["Add new records", "Modify existing data", "Remove data safely", "Use transactions for data integrity"]
    },
    {
      day: 6,
      title: "Database Design",
      topics: ["CREATE TABLE", "Primary keys", "Foreign keys", "Normalization"],
      tasks: ["Design database schemas", "Create tables with constraints", "Establish relationships", "Normalize database structure"]
    },
    {
      day: 7,
      title: "Advanced SQL & Project",
      topics: ["Subqueries", "Views", "Indexes", "Best practices"],
      tasks: ["Write nested queries", "Create views for complex queries", "Optimize query performance", "Build a complete database project"]
    }
  ],
  html: [
    {
      day: 1,
      title: "HTML Basics",
      topics: ["HTML structure", "Head and body", "Headings and paragraphs", "Text formatting"],
      tasks: ["Create your first HTML page", "Use proper document structure", "Add headings and paragraphs", "Format text with various tags"]
    },
    {
      day: 2,
      title: "Links, Images & Lists",
      topics: ["Anchor tags", "Image elements", "Ordered lists", "Unordered lists"],
      tasks: ["Create navigation with links", "Add images to your page", "Build different types of lists", "Create a simple recipe page"]
    },
    {
      day: 3,
      title: "Tables & Forms",
      topics: ["Table structure", "Table styling", "Form elements", "Input types"],
      tasks: ["Create data tables", "Build a contact form", "Use different input types", "Add form validation attributes"]
    },
    {
      day: 4,
      title: "Semantic HTML5",
      topics: ["Header, nav, main", "Article and section", "Footer and aside", "Accessibility"],
      tasks: ["Structure pages semantically", "Improve accessibility", "Use appropriate HTML5 elements", "Build a blog layout"]
    },
    {
      day: 5,
      title: "Multimedia & Embedding",
      topics: ["Video element", "Audio element", "iframe", "Canvas basics"],
      tasks: ["Embed videos and audio", "Add interactive maps", "Explore canvas element", "Create a media gallery"]
    },
    {
      day: 6,
      title: "HTML Best Practices",
      topics: ["Code organization", "Comments", "Meta tags", "SEO basics"],
      tasks: ["Write clean, organized code", "Add meta tags for SEO", "Validate HTML", "Optimize for performance"]
    },
    {
      day: 7,
      title: "Complete Website Project",
      topics: ["Project planning", "Multi-page site", "Navigation", "Content organization"],
      tasks: ["Plan website structure", "Create multiple linked pages", "Build a personal portfolio", "Review and refine"]
    }
  ],
  css: [
    {
      day: 1,
      title: "CSS Fundamentals",
      topics: ["CSS syntax", "Selectors", "Colors", "Text properties"],
      tasks: ["Link CSS to HTML", "Style text and colors", "Use different selectors", "Create a styled page"]
    },
    {
      day: 2,
      title: "Box Model & Layout",
      topics: ["Margin and padding", "Border", "Width and height", "Display property"],
      tasks: ["Understand the box model", "Control spacing", "Create layouts with display", "Style boxes and containers"]
    },
    {
      day: 3,
      title: "Flexbox",
      topics: ["Flex container", "Flex items", "Justify and align", "Flex direction"],
      tasks: ["Create flexible layouts", "Align items horizontally and vertically", "Build a navigation bar", "Create a card layout"]
    },
    {
      day: 4,
      title: "CSS Grid",
      topics: ["Grid container", "Grid template", "Grid areas", "Responsive grids"],
      tasks: ["Create grid layouts", "Build complex page structures", "Use grid for responsive design", "Create an image gallery"]
    },
    {
      day: 5,
      title: "Responsive Design",
      topics: ["Media queries", "Mobile-first design", "Viewport units", "Responsive images"],
      tasks: ["Make layouts responsive", "Test on different screen sizes", "Use breakpoints effectively", "Create a responsive website"]
    },
    {
      day: 6,
      title: "Advanced CSS",
      topics: ["Transitions", "Animations", "Transforms", "Pseudo-classes"],
      tasks: ["Add hover effects", "Create animations", "Use transforms", "Enhance user interactions"]
    },
    {
      day: 7,
      title: "Project & Best Practices",
      topics: ["CSS organization", "Naming conventions", "Performance", "Browser compatibility"],
      tasks: ["Build a complete styled website", "Organize CSS efficiently", "Optimize for performance", "Test cross-browser compatibility"]
    }
  ],
  javascript: [
    {
      day: 1,
      title: "JavaScript Basics",
      topics: ["Variables (let, const, var)", "Data types", "Operators", "Console methods"],
      tasks: ["Set up JavaScript environment", "Practice variable declarations", "Work with different data types", "Use console for debugging"]
    },
    {
      day: 2,
      title: "Control Flow & Functions",
      topics: ["If-else statements", "Switch", "Loops", "Functions"],
      tasks: ["Write conditional logic", "Create reusable functions", "Practice loops", "Build simple programs"]
    },
    {
      day: 3,
      title: "Arrays & Objects",
      topics: ["Array methods", "Object properties", "JSON", "Destructuring"],
      tasks: ["Manipulate arrays", "Work with objects", "Parse and stringify JSON", "Use destructuring syntax"]
    },
    {
      day: 4,
      title: "DOM Manipulation",
      topics: ["Selecting elements", "Modifying content", "Changing styles", "Event listeners"],
      tasks: ["Select and modify HTML elements", "Handle user events", "Create interactive features", "Build a simple interactive page"]
    },
    {
      day: 5,
      title: "ES6+ Features",
      topics: ["Arrow functions", "Template literals", "Spread operator", "Promises"],
      tasks: ["Use modern JavaScript syntax", "Work with async code", "Practice ES6 features", "Refactor old code to ES6"]
    },
    {
      day: 6,
      title: "API & Async Programming",
      topics: ["Fetch API", "Async/await", "Error handling", "Working with APIs"],
      tasks: ["Fetch data from APIs", "Handle asynchronous operations", "Display API data on page", "Build a weather app"]
    },
    {
      day: 7,
      title: "Final Project",
      topics: ["Project planning", "Code organization", "Debugging", "Best practices"],
      tasks: ["Plan and build a complete project", "Implement all learned concepts", "Debug and test thoroughly", "Deploy your project"]
    }
  ]
};

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - Simple To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2 {
      color: #333;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: "Courier New", Courier, monospace;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-left: 4px solid #333;
      overflow-x: auto;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  </style>
</head>
<body>
  <h1>Simple To-Do List Application</h1>
  <p>
    This is a basic To-Do List application built with HTML, CSS, and JavaScript. 
    It allows users to add tasks, mark them as completed, and delete tasks. 
    It's a beginner-friendly project that demonstrates the fundamentals of web development.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Add Tasks</strong>: Enter a task in the input field and click "Add" to add it to the list.</li>
    <li><strong>Mark as Completed</strong>: Click on a task to toggle its completion status.</li>
    <li><strong>Delete Tasks</strong>: Remove tasks individually from the list.</li>
    <li><strong>Interactive UI</strong>: Provides a clean and responsive user interface.</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
/project-directory
│
├── index.html    # The main HTML file for the app
├── style.css     # CSS file for styling
└── script.js     # JavaScript file for app functionality
  </pre>

  <h2>Installation</h2>
  <ol>
    <li><strong>Download or Clone the Repository</strong></li>
    <pre>
git clone https://github.com/your-username/simple-todo-list.git
cd simple-todo-list
    </pre>
    <li><strong>Open the Project</strong>: Open <code>index.html</code> in your favorite web browser.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Open the application in your browser.</li>
    <li>Use the input field to type in a task and click the "Add" button (or press Enter) to add it to the list.</li>
    <li>Click on any task in the list to mark it as completed or not completed.</li>
    <li>Use the delete button (usually a "trash" icon) next to a task to remove it from the list.</li>
  </ol>

  <h2>Code Overview</h2>
  <h3>HTML (<code>index.html</code>)</h3>
  <p>Contains the structure of the to-do list, including an input field, an "Add" button, and a list to display tasks.</p>
  <h3>CSS (<code>style.css</code>)</h3>
  <p>Handles the layout and design of the application, ensuring a responsive and user-friendly interface.</p>
  <h3>JavaScript (<code>script.js</code>)</h3>
  <p>Manages the logic for adding, toggling, and deleting tasks. Uses DOM manipulation to dynamically update the list.</p>

  <h2>Example</h2>
  <h3>Input a Task:</h3>
  <p>Enter "Buy groceries" and click "Add."</p>
  <h3>Toggle Completion:</h3>
  <p>Click on "Buy groceries" to mark it as completed. It will change its style (e.g., strike-through).</p>
  <h3>Delete a Task:</h3>
  <p>Click the "Delete" button to remove "Buy groceries" from the list.</p>

  <h2>Future Improvements</h2>
  <ul>
    <li>Add the ability to edit tasks.</li>
    <li>Include a filter for viewing completed or active tasks.</li>
    <li>Store tasks in localStorage to persist data across sessions.</li>
  </ul>

  <h2>Contributions</h2>
  <p>Contributions, issues, and feature requests are welcome! Feel free to fork the project and submit pull requests.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License. You are free to use, modify, and distribute this code with proper attribution.</p>

  <p><em>Enjoy your simple To-Do List app!</em></p>
</body>
</html>

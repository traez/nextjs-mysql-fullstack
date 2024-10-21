# Nextjs MySQL Fullstack App

To enhance my full-stack development skills, I am transitioning from using non-relational databases (MongoDB) to relational databases (PostgreSQL, MySQL), in alignment with industry best practices.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

- **For Users**:
As a user, I want a simple and intuitive interface that allows me to perform basic actions such as creating, viewing, updating, and deleting records. I expect the system to provide real-time feedback when I add or update an entry, and I want to be able to remove records without hassle. The experience should be seamless, with changes immediately visible in the app.

- **For Developers**:
As a developer, this application demonstrates a full-stack setup using Next.js for both the frontend and API routes, combined with a MySQL database for the backend. The app implements CRUD functionality with a focus on clean and scalable code, ensuring data persistence and integrity. The backend is structured to handle database interactions efficiently, and the frontend delivers a user-friendly experience that reflects best practices for modern web development.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/nextjs-mysql-fullstack](https://github.com/traez/nextjs-mysql-fullstack)
- Live Site URL: [https://nextjs-mysql-fullstack.vercel.app/](https://nextjs-mysql-fullstack.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS
- Typescript
- Nodejs      
- MySQL  
- React Icons  
- Sonner          

### What I learned
   
- **Transition from MongoDB (Non-relational) to MySQL (Relational)**  
After using MongoDB, I revisited relational databases with MySQL, having last worked with Microsoft Access years ago. Both databases store data but differ significantly in structure. While MongoDB uses a flexible, document-based schema where fields can vary between records, MySQL requires a strict, table-based structure with clearly defined relationships between tables.   
- **Amazon RDS Free Tier**  
When using Amazon RDS (Relational Database Service), it's important to manage resources wisely. While it's possible to create multiple RDS instances under the Free Tier, their combined usage should not exceed 750 hours per month and 20 GB of storage. For my project, I created a single instance with the identifier `nextjs-mysql-fullstack`, which provided a host endpoint, username, and password for connecting to the database. The database name varies across projects to maintain isolation between them.    
- **MySQL2 Dependency in Next.js**  
I utilized the `mysql2` package as a MySQL client in my Next.js full-stack application. This dependency provides the tools needed to connect to the database, perform queries, and manage transactions, making it a critical part of the application’s database interaction layer.    
- **HTML Input Type for Basic Validation**  
By setting the `type="email"` attribute on an `<input>` element in my forms, I leveraged the browser’s built-in validation. This ensures that users enter a properly formatted email address without requiring additional JavaScript for basic validation.    
- **Development vs Production: MySQL Workbench and Amazon RDS**  
In development, I worked with MySQL Workbench as a local tool to visually manage databases and run queries. However, for production, I deployed the database on Amazon RDS, integrating it with Vercel for the Next.js application hosting. This setup allows for scalable production use, with the flexibility of RDS handling the database side.    
- **API Testing in Production with Postman**  
I've learned the importance of using API testing tools like Postman for testing API routes, even in production. These tools provide detailed feedback on your API’s behavior and responses, helping identify issues that might not be apparent through the user interface or logs alone.    

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs

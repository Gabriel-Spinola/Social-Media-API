# Social-Media-API
# Facebukerson: Social Media API (Next.js)

Facebukerson is a powerful Social Media API built using Next.js, integrating various technologies for seamless user experience and robust functionality. This API enables user authentication via Next-Auth, implements image storage using Supabase, manages the database through Prisma and PostgreSQL, and handles CRUD operations (GET, PUT, POST, DELETE) for Comments, Posts, Projects, Users, and Images. Additionally, Facebukerson ensures data security through cryptography and utilizes serverless functions for efficiency and server function for flexibility.

Please note that Facebukerson is currently a work in progress. Feel free to contribute or stay tuned for updates!

## Technologies Used

- **Next.js:** A React framework for building server-rendered React applications.
- **Next-Auth:** Authentication library for Next.js applications.
- **Supabase:** An open-source alternative to Firebase, offering real-time and secure APIs for building scalable applications.
- **Prisma:** A modern database toolkit for TypeScript and Node.js, simplifying database access and management.
- **PostgreSQL:** A powerful, open-source relational database system.
- **bsycript:** Ensuring data security through encryption and decryption algorithms.
- **Serverless Functions:** Efficient, event-driven functions that scale automatically.

## Features

- **User Authentication:** Secure user authentication powered by Next-Auth for seamless sign-up and login experiences.
- **Image Storage:** Efficient image storage using Supabase, ensuring reliable image handling and retrieval.
- **Database Management:** Prisma and PostgreSQL are integrated to provide a robust and scalable database system.
- **CRUD Operations:** Implementing GET, PUT, POST, and DELETE requests for Comments, Posts, Projects, Users, and Images, allowing comprehensive data management.
- **Cryptography:** Ensuring data security through encryption and decryption algorithms, safeguarding sensitive information.
- **Serverless Functions:** Utilizing serverless functions for optimized performance and resource management.

## Getting Started

1. **Clone the Repository:**
   ```sh
   git clone <repository-url>
   cd facebukerson-api
   ```
   
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Configure Environment Variables:**
   Create a .env file based on the provided .env.example and fill in the required credentials and configuration details **(In Progress)**.

4. **Run the Application:**
   ```sh
   npm run dev
   ```

## Access API Endpoints:
The API will be accessible at http://localhost:3000/app/api/.

## API Endpoints _(In Progress)_
**GET** `/api/posts:` Retrieve all posts.
<br>
**GET** `/api/posts/:id:` Retrieve a specific post by ID.
<br>
**POST** `/api/posts:` Create a new post.
<br>
**PUT** `/api/posts/:id:` Update a post by ID.
<br>
**DELETE** `/api/posts/:id:` Delete a post by ID.


(Similar endpoints for Comments, Projects, Users, and Images)

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests to enhance the functionality or fix any bugs. Please follow the contribution guidelines specified in the repository.

## License
This project is licensed under the [GPL-3.0 license](https://github.com/Gabriel-Spinola/Social-Media-API/blob/main/LICENSE).

Facebukerson is a dynamic Social Media API that combines cutting-edge technologies to deliver a seamless experience for users and developers alike

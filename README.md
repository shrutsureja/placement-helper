# Placement Helper Project

## Overview

Placement Helper is a comprehensive web application designed to streamline and enhance the placement process for students. It combines a powerful backend built with NestJS and a dynamic frontend using Next.js to offer an advanced platform for preparing for interviews.

The application allows students to access a database of previously asked interview questions, complete with answers and additional insights. Users can also contribute by adding their own questions in any language or format, which are then processed and structured using GPT-4 from OpenAI. This ensures that the content remains relevant, organized, and useful for all users.

### Key Objectives

- **Interview Preparation**: Help students prepare for interviews by providing access to a curated list of past interview questions and their answers.
- **User Contributions**: Allow users to submit questions in any language or format, ensuring a diverse and comprehensive question bank.
- **Structured Data Generation**: Utilize GPT-4o mini to structure and provide relevant answers to user-submitted questions, enhancing the quality and usefulness of the content.

## Features

- **Comprehensive Question Bank**: Access a rich collection of interview questions from various companies and industries, along with detailed answers and explanations.
- **Multilingual Support**: Submit and view questions in multiple languages. The system processes and structures data in various formats using GPT-4o mini.
- **Interactive Dashboard**: 
  - **Student Dashboard**: View and track questions and answers, and prepare for upcoming interviews with tailored content.
  - **Recruiter Dashboard**: Manage and review questions, monitor submissions, and provide feedback.
- **Real-Time Updates**: Receive instant notifications about new questions, answers, and updates relevant to your preparation.
- **Content Contribution**: Add new questions in any language or format. The application ensures that these questions are processed and structured for consistency and clarity.
- **Advanced AI Integration**: Leverage GPT-4o mini to generate and refine answers, ensuring high-quality and relevant content for users.

## Technologies Used

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [Next.js](https://nextjs.org/)
- **Architecture**: Mono-repo Architecture
- **Database**: MongoDB
- **Authentication**: OAuth
- **Deployment**: Vercel, EC2, CI/CD
- **AI Services**: [OpenAI GPT-4o mini](https://openai.com/)
- **Other Services**: [LemeeBuild](https://app.lemmebuild.com/login)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/)

### Setup Instructions

#### Clone the Repository

```bash
git clone https://github.com/shrutsureja/placement-helper
cd placement-helper
```

#### Backend Setup (NestJS)

1. Navigate to the backend directory:
   ```bash
   cd backend-nest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for guidance.

4. Build and run the development server:
   ```bash
   npm run build
   npm run start:prod
   ```

#### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory and add the necessary environment variables. Refer to `.env.local.example` for guidance.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Create and run the production build:
   ```bash
   npm run build
   npm run start
   ```

## Contact

For any questions or feedback, please reach out to [shrutsureja.code@gmail.com](mailto:shrutsureja.code@gmail.com).

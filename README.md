# Expense Tracker

This is a simple Expense Tracker application built with Next.js and Firebase. It allows users to add, view, and delete expenses, with all data stored in a Firestore database.

## Features

- Add new expenses with a name and price.
- View a list of all expenses.
- Delete expenses from the list.
- Calculate and display the total of all expenses.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendering and static web applications.
- [Firebase](https://firebase.google.com/): A platform developed by Google for creating mobile and web applications.
- [Firestore](https://firebase.google.com/docs/firestore): A flexible, scalable database for mobile, web, and server development.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase account and project setup.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker

2. **Install Dependencies**
   ```
   npm install
   ```
3. **Set Up Firebase:**
   - Replace the Firebase configuration in firebase.js with your own Firebase project configuration.
   - Run the Development Server:
   ```
   npm run dev
   ```
   - Open http://localhost:3000 with your browser to see the result.
## Usage

- Enter an item name and price in the input fields and click the “+” button to add the item to the list.
- Click the “X” button next to an item to delete it from the list.
- The total of all expenses will be displayed at the bottom of the list

## License
This project is licensed under the MIT License - see the LICENSE file for details.

   


# ATM Cash Machine API

This API provides basic operations for an ATM system, including:

- Checking account details.
- Making withdrawals.
- Performing transfers between accounts.
- Checking account transactions.

## Features

- **Consult account details**: Users can check the details of their accounts.
- **Withdraw money**: Users can withdraw money from the ATM, considering the balance and card type (debit or credit).
- **Deposit money**: Users can deposit money, but only from ATMs belonging to the same bank.
- **Transfer funds**: Users can transfer money between accounts, both within the same bank or to different banks, considering transfer fees.
- **Card activation**: New cards must be activated before they can be used for other operations.
- **Change PIN**: Users can change their PIN, but it is mandatory to do so after initial activation.
- **Card configuration**: Users can view and modify their card configuration, such as the withdrawal limit.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

You need **Node.js** and **npm** installed on your machine. You can download and install them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone <url-of-the-repository>
   cd atm-cash-machine
2. Install the dependencies:
   ```bash
   npm install
3. Run the server:
   ```bash
   npm start
### Folder Structure

## Folder Structure
Here is the folder structure of the project:

```plaintext
project-root/
├── .gitignore               # Files to ignore in Git
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── app.js                   # Main entry point of the application
├── config/                  # Configuration files (e.g., database connection)
│   └── db.js                # Database configuration (future implementation)
├── controllers/             # Business logic for each route
│   └── v1/                  # Version 1 controllers
│       ├── accountController.js     # Controller for account-related operations
│       └── transactions/           # Subdirectory for transaction-related controllers
│           ├── withdrawController.js  # Controller for withdrawing money
│           ├── depositController.js   # Controller for depositing money
│           ├── transferController.js  # Controller for transferring money
│           └── index.js             # Exports all transaction controllers
├── routes/                  # API routes
│   └── v1/                  # Version 1 routes
│       ├── accountRoutes.js          # Routes for account operations
│       └── transactionRoutes.js      # Routes for transaction operations
├── schemas/                 # Joi validation schemas for the API
│   └── v1/                  # Version 1 schemas
│       ├── depositSchema.js        # Joi schema for deposit validation
│       ├── withdrawSchema.js       # Joi schema for withdrawal validation
│       ├── transferSchema.js       # Joi schema for transfer validation
│       └── index.js                # Exports all Joi schemas
├── middlewares/             # Custom middlewares
│   └── authMiddleware.js    # Middleware for authentication
├── tests/                   # Tests for the application
│   └── v1/                  # Version 1 tests
│       ├── accountController.test.js  # Test file for account controller
│       └── transactionController.test.js  # Test file for transaction controller
├── README.md                # Project description and setup instructions
└── package-lock.json        # Lock file for consistent dependency versions






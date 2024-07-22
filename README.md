## Introduction
This is a full-fledged eCommerce application built using React for the frontend and Django for the backend. The app includes user authentication, product management, shopping cart functionality, and order processing.

## Features
- User Registration and Authentication
- Product Listings and Detailed View
- Shopping Cart
- Order Management

### Prerequisites
- Python 3.10
- Node.js and npm
- Django
- React

## Technologies Used
- Frontend: React
- Backend: Django, Django REST Framework
- Database: MSSQL (for development)
- Authentication: JWT (JSON Web Tokens)

### Backend Setup
- git clone https://github.com/yourusername/ecommerce-app.git

### Create and activate a virtual environment:
- python3 -m venv venv
- source venv/bin/activate  # On Windows use `venv\Scripts\activate`
  
### Install the required dependencies:
- pip install -r requirements.txt

### Run the Django server:
- python manage.py migrate
- python manage.py createsuperuser  # Create an admin user
- python manage.py runserver

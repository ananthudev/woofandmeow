# Woof and Meow 📚

## Project Overview 🌟
This is a Django-based web application that provides a simple login system and displays different cat and dog information. It utilizes cat and dog APIs.

## Features 🎉
- Switch to HTML and CSS branch for HTML and CSS alone

### Login System 🔒
- Custom login form with username and password fields
- Authentication using Django's built-in `authenticate` function
- Login functionality using Django's `login` function
- Redirects to the index page after successful login

### Animal Pages 🐾
- Two pages for dog and cat lookup, respectively
- Pages are rendered using Django's `render` function
- Pages are decorated with `@login_required` to ensure only logged-in users can access them

### Logout Functionality 👋
- Custom logout view that uses Django's `logout` function
- Redirects to the login page after logout

## Project Structure 🗂️
- **base.html**: The base template for the project
- **partialviews/**: Directory containing partial views for dog and cat lookup pages
- **dog.html**: Template for dog lookup page
- **cat.html**: Template for cat lookup page
- **registration/**: Directory containing login-related templates and views
  - **login.html**: Template for custom login form
- **views.py**: Contains custom login and logout views
- **forms.py**: Contains the custom login form definition
- **urls.py**: Contains URL patterns for the project

## Getting Started 🚀
1. Install Django and required packages using `pip install -r requirements.txt`
2. Run the development server using `python manage.py runserver`
3. Access the login page at `http://localhost:8000/login`
4. Log in using a valid username and password
5. Access the dog and cat lookup pages at `http://localhost:8000/dog` and `http://localhost:8000/cat`, respectively

## Contributing 🤝
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License 📝
[This project is licensed under the MIT License. See LICENSE for details.]([https://github.com/ananthudev/Liveliness-Check-Facial-Recognition-for-Fraud-Prevention](https://github.com/ananthudev/woofandmeow/))

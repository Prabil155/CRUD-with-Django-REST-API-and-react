#  CRUD Application with Django REST API & React

## 📌 Project Overview

This is a full-stack CRUD (Create, Read, Update, Delete) web application built using:

* **Backend:** Django + Django REST Framework
* **Frontend:** React (Vite)
* **Database:** SQLite (Development) / PostgreSQL (Production)
* **Deployment:** Render

---

## Features

* ➕ Create new student
* 📄 View all students
* ✏️ Update student details
* ❌ Delete student
* 🌐 REST API integration
* ⚡ Fast frontend using Vite

---

## Tech Stack

* Python / Django
* Django REST Framework
* React (Vite)
* Axios
* Gunicorn
* Whitenoise

---

## 📂 Project Structure

```
django-crud-api/
│
├── api/            # Django app
├── config/         # Django settings
├── frontend/       # React app
├── manage.py
├── requirements.txt
```

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone repo

```
git clone https://github.com/Prabil155/CRUD-with-Django-REST-API-and-react.git
cd django-crud-api
```

---

### 2️⃣ Backend setup

```
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

---

### 3️⃣ Frontend setup

```
cd frontend
npm install
npm run dev
```

---

## 🌍 API Endpoint

```
http://127.0.0.1:8000/api/students/
```

---

## Deployment

* Backend deployed on Render
* Frontend deployed using Vite build

---

## 👨‍💻 Author

**Prabil Timalsena**



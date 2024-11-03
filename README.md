# Second_Bind_software_developement_challenge
# Project Setup on Your Local Machine

### Prerequisites
- Python
- Node.js and npm

### Steps

1. **Clone the repository**: 
 `git clone https://github.com/Sajan4072/Second_Bind_software_developement_challenge.git`
2. **Setup the database (Postgresql) and create a table (eg:book_inventory)**

3. **CD to Backend**

  `pip instal virtualenv`

4: **Create a virtual env and activate it**
`virtualenv env`
`env\Scripts\activate`

5: **CD to book_inventory and install the requirements.**
Cmd: pip install - r requirements.txt

6: **Create a .env file and populate your appropriate database credentials (look env.sample for reference)**

7: **Make Migraitons and Run the server**
`python manage.py makemigrations –settings book_inventory.settings.local`\
`python manage.py migrate –settings book_inventory.settings.local`\
`python manage.py runserver –settings book_inventory.settings.local`

### Swagger Api Documentation: http://127.0.0.1:8000/swagger/

8: **Cd to Frontend_React and install the packages**
`npm install`

9: **Run the react server**
`npm start`

### Project Setup on you local machine using containers:
### Prerequisite:Docker Engine or Docker Desktop
1: **Clone the repository:**
`git clone https://github.com/Sajan4072/Second_Bind_software_developement_challenge.git`

2: **cd to Second_Bind_software_developement_challenge**

3: **Populate the Docker-compose.yaml’s environment section (referencing env.docker.sample)**
**Or** 
**reate .env file and change the environment section of Docker-compsoe.yaml**

### Example
environment: \
DB_USER=${DB_USER} \
DB_PASSWORD=${DB_PASSWORD}

4: **Build the images  and run the containers using docker compose**
`docker-compose up –build`

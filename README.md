# SiswaMed (E-Klinik Siswa) — Campus Health & Medical Leave System

**Course:** CSC584 - Enterprise Programming  
**Group:** Group 2 (ELITE)  
**Deliverable:** Phase 1 - Project Storyboard & Database ERD (Week 9)

## Project Overview
**E-Klinik Siswa** is a web-based patient management system designed for the campus health center to streamline medical appointments, queue estimation, patient medical history tracking, diagnosis & medical leave (MC) updates, and student graduation record archiving.

The system supports role-based access for **Students**, **Medical Officers (MO)** and **Clinic Admins**.

## Core System Features & Requirements

### 1. Role-Based CRUD Operations
* **Student:**
  * **Create:** Book appointments and check walk-in queue waiting times.
* **Medical Officer (MO):**
  * **Read:** View patient medical histories prior to consultation.
  * **Update:** Update patient diagnoses and issue Medical Certificates (MC).
* **Clinic Admin:**
  * **Delete / Archive:** Delete or archive graduated student records from active clinic records.

### 2. Business Logic (Walk-In Queue Estimation)
* Automatically calculates the estimated waiting time for walk-in students using the formula:
  - Estimated Waiting Time = Number of "Pending" Patients × Historical Average Consultation Time (e.g., 15 mins)

### 3. Analytics Dashboard
* **Trends of Common Illnesses:** Visualizes common health trends on campus (e.g., seasonal flu spikes).
* **Daily Waiting Times:** Displays average daily patient waiting durations.
* **Inventory Alerts:** Highlights low-stock medications requiring restocking by Clinic Admins.

### 4. Repository Contents (Storyboard & ERD)

* **`login.html/index.html` & `auth.js`** — Portal login interface supporting role selection (`Student`, `Medical Officer`, `Clinic Admin`).
* **`student-overview.html`** — Main student portal & dashboard overview.
* **`mo-overview.html` / `doctor-overview.html`** — Medical Officer views for appointment handling, patient medical history, diagnosis updates, and MC issuance.
* **`admin-overview.html`** — Clinic Admin views for system overview, inventory alerts, and graduation record archiving.
* **`style.css` & `script.js`** — Master stylesheet and frontend UI interactivity.
* **`ERD_CSC584_GROUP 2_ELITE.pdf`** — Entity Relationship Diagram (ERD) detailing the database schema (`STUDENT`, `MEDICAL_OFFICER`, `DOCTOR`, `APPOINTMENT`, `CONSULTATION`, `MEDICINE_CERTIFICATE`, `PRESCRIPTION`, `MEDICINE`).

* # E-Klinik Siswa (SiswaMed) — Campus Health & Medical Leave Portal

**E-Klinik Siswa** is a web-based campus clinic management system designed for **CSC584 (Enterprise Programming)**. It streamlines student healthcare appointments, live walk-in queue estimation, medical record tracking, digital Medical Certificate (MC) verification, and graduation medical record archiving.

---

## System User Flow & Storyboard UI Preview

### Phase 1: Authentication & Role Selection Flow
Users begin at the **Login Page** using their Student/Staff ID and select their designated role portal, or proceed to the **Registration Page** if they do not have an account yet.

| Step 1: Login Page | Step 2: Role Selection (Login) |
| :---: | :---: |
| ![Login Page](SCREENSHOT%20OUTPUT/login.JPG) | ![Login Select Role](SCREENSHOT%20OUTPUT/login_select_role.jpg) |

| Step 3: Registration Page | Step 4: Role Selection (Register) |
| :---: | :---: |
| ![Register Page](SCREENSHOT%20OUTPUT/register.JPG) | ![Register Select Role](SCREENSHOT%20OUTPUT/register_select_role.jpg) |

---

### Phase 2: Student Portal Flow
**Flow:** `Overview` ➔ `Appointments` ➔ `Patient History` ➔ `Medical Leave` ➔ `Graduation Archive`

| 1. Campus Care Overview | 2. Book & View Appointments | 3. Patient Visit History |
| :---: | :---: | :---: |
| ![Student Overview](SCREENSHOT%20OUTPUT/student-overview.JPG) | ![Student Appointments](SCREENSHOT%20OUTPUT/student-appointments.JPG) | ![Student History](SCREENSHOT%20OUTPUT/student-history.JPG) |

| 4. Digital Medical Leave (MC) | 5. Graduation Record Archive |
| :---: | :---: |
| ![Student MC](SCREENSHOT%20OUTPUT/student-mc.JPG) | ![Student Archive](SCREENSHOT%20OUTPUT/student-archive.JPG) |

---

### Phase 3: Medical Officer (MO) Portal Flow
**Flow:** `Overview` ➔ `Appointments & Queue` ➔ `Patient History` ➔ `Medical Leave Issuance`

| 1. MO Dashboard Overview | 2. Manage Appointments & Queue |
| :---: | :---: |
| ![MO Overview](SCREENSHOT%20OUTPUT/mo-overview.JPG) | ![MO Appointments](SCREENSHOT%20OUTPUT/mo-appointments.JPG) |

| 3. Update Consultation & History | 4. Issue & Manage Medical Leave |
| :---: | :---: |
| ![MO History](SCREENSHOT%20OUTPUT/mo-history.JPG) | ![MO MC](SCREENSHOT%20OUTPUT/mo-mc.JPG) |

---

### Phase 4: Senior Doctor & Clinic Admin Flow
**Flow:** `Overview` ➔ `Appointments` ➔ `Patient History` ➔ `Medical Leave Review` ➔ `Graduation Archive`

| 1. Doctor Overview | 2. Specialist Appointments | 3. Patient History Review |
| :---: | :---: | :---: |
| ![Doctor Overview](SCREENSHOT%20OUTPUT/doctor-overview.JPG) | ![Doctor Appointments](SCREENSHOT%20OUTPUT/doctor-appointments.JPG) | ![Doctor History](SCREENSHOT%20OUTPUT/doctor-history.JPG) |

| 4. Medical Leave Verification | 5. Doctor Archive View | 6. Clinic Admin Archive Management |
| :---: | :---: | :---: |
| ![Doctor MC](SCREENSHOT%20OUTPUT/doctor-mc.JPG) | ![Doctor Archive](SCREENSHOT%20OUTPUT/doctor-archive.JPG) | ![Admin Archive](SCREENSHOT%20OUTPUT/admin-archive.JPG) |





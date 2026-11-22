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
  * **Create:** Book new doctor appointments and check walk-in queue waiting times.
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
* **`ERD_CSC584_GROUP 2_ELITE.pdf`** — Entity Relationship Diagram (ERD) detailing the database schema (`STUDENT`, `MEDICAL_OFFICER`, `CLINIC_ADMIN`, `APPOINTMENT`, `CONSULTATION`, `MEDICINE_CERTIFICATE`, `PRESCRIPTION`, `MEDICINE`).


# SmileConnect

SmileConnect is a platform that helps dental students connect with patients who need affordable care. This makes it easier for students to gain clinical experience and for patients to access treatment. 

## Overview

Dentists play a vital role in the Philippine healthcare system, with dental visits accounting for a significant share of outpatient consultations annually. Doctor of Dental Medicine programs in universities such as UP, CEU, UE, MCU, and OLFU require students to perform real clinical operations—ranging from extractions to prosthodontics—often offered as free treatment under faculty supervision.

Despite the presence of dental services, educational initiatives, established national health system efforts, and various oral health interventions and procedures, oral health issues—such as dental caries, gum diseases, and unmet dental needs—continue to be prevalent in the Philippines (Alas et al., 2023).

## The App

This is a simple web app built with the MERN stack (MongoDB, Express, React, Node.js)—a popular set of tools for building modern websites—to help student dentists find patients. 
The platform connects dental schools with local health centers, underserved urban areas, and online communities, making it easier to match students needing clinical cases with people who need free dental care. This improves access to dental procedures while making better use of available clinics and staff.

## Deployment

### Online

You can try SmileConnect instantly online:
[https://smileconnect.netlify.app/](https://smileconnect.netlify.app/)

### Local Development (MERN Stack)

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd smileconnect
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI and any other required variables.
4. **Start the development servers:**
   - For the frontend (Next.js):
     ```bash
     pnpm run dev
     # or
     npm run dev
     ```
   - For the backend (Express.js):
     ```bash
     # If backend is in a separate folder, navigate there and run:
     pnpm run server
     # or
     npm run server
     ```
5. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000) (default)

---

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Architecture

```mermaid
flowchart TD
    A["React Frontend<br>(Student + Admin Interface)"] --> B["Express.js API Server"]
    B --> C["Node.js Runtime Environment"]
    B --> D["MongoDB Database"]

    %% External Integrations
    E["Facebook Graph API<br>/ Group Scraping"]
    F["Reddit API<br>/ Community Posts"]
    G["Barangay Health Center<br>Case Data (CSV/API)"]

    E -->|"Case leads"| B
    F -->|"Case leads"| B
    G -->|"Patient data"| B

    A -->|"HTTP Requests"| B
    B -->|"Data Fetch / Store"| D

    %% Styling
    style A fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
    style B fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px
    style C fill:#E8F5E9,stroke:#388E3C,stroke-width:2px
    style D fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2px
    style E fill:#FFF,stroke:#4267B2,stroke-width:2px
    style F fill:#FFF,stroke:#FF4500,stroke-width:2px
    style G fill:#FFF,stroke:#43A047,stroke-width:2px
```

---

## Developers

Simonee Ezekiel Mariquit  
*Project Manager*  

Christine May Ponciano  
*Frontend Developer*  

**JZ**  
Junjun Zaragosa  
*Backend Developer*  

**SD**  
Samuelson De Vera  
*UX Designer*  

**KM**  
Kharl Andre Miguel  
*Data Specialist*  

---


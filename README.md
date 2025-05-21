
# Smart Meal & Activity Planner (SMA)

![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![Streamlit](https://img.shields.io/badge/Framework-Streamlit-red)
![Pandas](https://img.shields.io/badge/Data-Pandas-blueviolet)
![Scikit-Learn](https://img.shields.io/badge/ML-Scikit--Learn-orange)
![Matplotlib](https://img.shields.io/badge/Visualization-Matplotlib-green)

---

## Overview

The Smart Meal & Activity Planner (SMA) is a web-based application built with Streamlit that offers personalized meal recommendations based on a user's dietary preferences, fitness goals, activity level, and nutritional needs. The system uses content-based filtering to align meal suggestions with user goals and provides interactive visualizations for enhanced feedback.

---

## Key Features

- **Personalized Meal Planning**  
  Custom meal plans generated based on dietary preferences and macronutrient targets.

- **Content-Based Filtering**  
  Utilizes cosine similarity to recommend meals that closely match user-defined nutritional profiles.

- **User Profile Management**  
  Includes BMI tracking, profile creation, and weight progress tracking.

- **Visual Analytics**  
  Displays macronutrient and calorie distribution through clear visualizations.

- **Interactive Interface**  
  Built with Streamlit for ease of use, including searchable food database and real-time updates.

---

## Tech Stack

- **Python** – Core language
- **Streamlit** – Frontend UI
- **Pandas** – Data processing
- **Scikit-learn** – Content-based filtering (cosine similarity)
- **Matplotlib** – Data visualization
- **JSON** – Data storage

---

## Getting Started

### Prerequisites

- Python 3.8 or higher

### Installation

Clone the repository:

```bash
git clone https://github.com/emtdeveloper/SMA.git
cd SMA
```

Install the required libraries:

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing, install manually:

```bash
pip install streamlit pandas numpy scikit-learn matplotlib
```

---

## Running the Application

To launch the app locally:

```bash
streamlit run app.py
```

Visit the URL displayed in your terminal, typically:  
`http://localhost:8501`

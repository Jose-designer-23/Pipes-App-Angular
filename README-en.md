# 🧪 Pipes App Angular 🚀

Welcome to the **Pipes App Angular**! This project is a comprehensive demonstration of the power and versatility of Pipes in Angular, encompassing both built-in and custom implementations. It's an ideal tool to understand how to transform data directly within Angular templates and how to create reusable transformation logic.

The application is organized into several intuitive categories, making it easy to explore each type of Pipe and its respective use cases.

## ✨ Key Features

The application is structured into different sections to explore Pipes:

### 💡 Basic Pipes

This section demonstrates the use of Angular's most fundamental Pipes:

* **`Lowercase Pipe`**: Transforms text to lowercase.
* **`Uppercase Pipe`**: Transforms text to uppercase.
* **`TitleCase Pipe`**: Converts the first letter of each word to uppercase.
* **`Date Pipe`**: Formats dates in various ways, including:
    * Basic date format.
    * Long format (`Date|long|GMT-6`).
    * Year and month format (`Date: "yyyy MM"`).
    * Short format (`Date|short|GMT-4`).
* **Dynamic Language Change**: Buttons that allow changing the display language for dates and other elements to **English, Spanish, and French**, showcasing internationalization capabilities.

### 🔢 Numeric Pipes

Explore how to format numerical values:

* **`Number Pipe`**: Formats numbers with decimal precision (`Number:'1.2-2'`, `Number:"1.1-2"`).
* **`Currency Pipe`**: Formats numbers as currency.
* **`Percent Pipe`**: Formats numbers as percentages.

### 🧩 Less Common (Advanced) Pipes

This section delves into more specific and powerful Pipes:

* **`i18nSelectPipe`**: Allows dynamically changing a greeting (or any text) based on a condition (e.g., whether the user is male or female).
* **`i18nPluralPipe`**: Used for handling word pluralization dynamically, ideal for messages like "X clients waiting." In this application, it simulates a **client waiting list** for purchasing.
* **`JsonPipe`**: Displays any JavaScript object or array in JSON format.
* **`KeyValuePipe`**: Allows iterating over an object's properties and displaying each key-value pair.
* **`SlicePipe`**: Used to extract a portion of a string or an array. In this application, it's used to **count array elements** (as part of the client waiting list simulation).
* **`AsyncPipe`**: Automatically unwraps values from Observables or Promises, displaying asynchronous data directly in the template.

### ✍️ Custom Pipes

A demonstration of how to create your own Pipes for specific transformations:

* **`ToggleCase Pipe`**: A custom Pipe that alternates between uppercase and lowercase for a given text (e.g., to display a name in alternating uppercase and lowercase).

### 🦸‍♂️ Dynamic Superheroes Table

The application includes a **dynamic table** displaying a list of superheroes, allowing filtering and sorting by different categories:

* **By Name**: Search or filter by the superhero's name.
* **Can Fly**: Filter to show only superheroes who can fly.
* **Proposed Color**: Filter or group by a color associated with the superhero.
* **Creator**: Filter or group by the superhero's creator.

## 🛠️ Technologies Used

### Frontend:

* [**Angular**](https://angular.io/) - Robust framework for building the user interface.
* [**RxJS**](https://rxjs.dev/) - For managing asynchronous data streams and reactive data manipulation.

---

## 🚀 How to Run the Project

To get the **Pipes App Angular** up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Pipes-App-Angular](https://github.com/Jose-designer-23/Pipes-App-Angular)
    cd Pipes-App-Angular
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

3.  **Start the application:**
    ```bash
    ng serve
    ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```

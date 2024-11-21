
# Angular + Ionic Project

This project is built using Angular and Ionic frameworks. Below are the steps to set up, run, and contribute to the project.

---

## **Prerequisites**

Ensure your environment meets the following requirements:

1. **Node.js**: Version `18.x`  
   Download and install Node.js [here](https://nodejs.org/).  
   Verify installation with:
   ```bash
   node -v
   ```

2. **Yarn**: Package manager (preferred over npm)  
   Install Yarn globally:
   ```bash
   npm install -g yarn
   ```
   Verify installation:
   ```bash
   yarn -v
   ```

3. **Ionic CLI**: Command-line interface for Ionic  
   Install globally:
   ```bash
   npm install -g @ionic/cli
   ```
   Verify installation:
   ```bash
   ionic -v
   ```

---

## **Setup Instructions**

1. **Go to the project**:
   ```bash
   
   cd fe
   ```

2. **Install dependencies**:
   Run the following command in the project root:
   ```bash
   yarn install
   ```

---

## **Development Server**

1. **Run the app in a browser**:
   ```bash
   ionic serve
   ```

   The application will start at [http://localhost:8100](http://localhost:8100).

2. **Run the app on a mobile emulator or device**:
   - For Android:
     ```bash
     ionic cap run android --livereload
     ```
   - For iOS:
     ```bash
     ionic cap run ios --livereload
     ```

   **Note**: Ensure the corresponding development tools (e.g., Android Studio or Xcode) are installed and configured.

---

## **License**

This project is licensed under [MIT License](LICENSE).

---

Happy coding! 🚀

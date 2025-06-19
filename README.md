# คู่มือการติดตั้ง Tailwind CSS v4.0 + React ด้วย Vite

คู่มือนี้จะแนะนำขั้นตอนการตั้งค่าโปรเจกต์ React โดยใช้ Vite เป็นเครื่องมือพัฒนา (Development Tool) และติดตั้ง Tailwind CSS เวอร์ชัน 4.0 เพื่อใช้ในการออกแบบและจัดการสไตล์

---

## 1. การเตรียมความพร้อม (Prerequisites)

ก่อนเริ่มต้น คุณต้องแน่ใจว่าได้ติดตั้ง **Node.js** บนเครื่องคอมพิวเตอร์ของคุณแล้ว

- **ตรวจสอบการติดตั้ง Node.js:**
  เปิด Terminal (หรือ Command Prompt) แล้วรันคำสั่ง:
  ```bash
  node -v
  ```
  หากติดตั้งแล้ว จะปรากฏหมายเลขเวอร์ชันขึ้นมา (เช่น `v20.11.0`) หากยังไม่มี ให้ดาวน์โหลดและติดตั้งจาก [เว็บไซต์ทางการของ Node.js](https://nodejs.org/)

---

## 2. สร้างโปรเจกต์ React ด้วย Vite

1.  **เปิด Terminal** และเข้าไปยังไดเรกทอรีที่คุณต้องการสร้างโปรเจกต์
2.  **รันคำสั่ง** เพื่อสร้างโปรเจกต์ Vite ใหม่พร้อมกับ Template ของ React:
    ```bash
    npm create vite@latest my-react-tailwind-app -- --template react
    ```
    -   `my-react-tailwind-app` คือชื่อโปรเจกต์ของคุณ (สามารถเปลี่ยนได้ตามต้องการ)
    -   `--template react` คือการระบุให้ใช้ React เป็นเฟรมเวิร์กหลัก

3.  **เข้าไปในไดเรกทอรีของโปรเจกต์** ที่เพิ่งสร้างขึ้น:
    ```bash
    cd my-react-tailwind-app
    ```

4.  **ติดตั้ง Dependencies เริ่มต้น** ของโปรเจกต์:
    ```bash
    npm install
    ```

---

## 3. การติดตั้งและกำหนดค่า Tailwind CSS

เมื่อโปรเจกต์พร้อมแล้ว ให้ทำตามขั้นตอนต่อไปนี้เพื่อติดตั้ง Tailwind CSS

### 3.1 ติดตั้ง Dependencies ของ Tailwind

รันคำสั่งต่อไปนี้ใน Terminal เพื่อติดตั้ง `tailwindcss` และ Vite plugin ที่จำเป็น:
```bash
npm install -D tailwindcss @tailwindcss/vite
```
-   `-D` หรือ `--save-dev` เป็นการติดตั้งแพ็กเกจในส่วนของ `devDependencies` เนื่องจากเป็นเครื่องมือที่ใช้ในขั้นตอนการพัฒนา

### 3.2 กำหนดค่า Vite (Vite Configuration)

1.  เปิดไฟล์ `vite.config.js` ในโปรเจกต์ของคุณ
2.  เพิ่มโค้ด 2 ส่วนตามตัวอย่างด้านล่าง:
    -   **Import Tailwind CSS plugin** ที่ด้านบนสุดของไฟล์
    -   **เพิ่ม `tailwindcss()`** เข้าไปใน `plugins` array

    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite' // 1. Import plugin

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        react(),
        tailwindcss(), // 2. เพิ่ม plugin เข้าไปใน array
      ],
    })
    ```

### 3.3 กำหนดค่าไฟล์ CSS หลัก

1.  เปิดไฟล์ `src/index.css`
2.  ลบโค้ดเดิมทั้งหมดออก แล้วเพิ่ม Tailwind directives ต่อไปนี้เข้าไปแทน:
    ```css
    /* src/index.css */
    @import 'tailwindcss';
    ```
    -   `@import 'tailwindcss'` จะถูกแทนที่ด้วยสไตล์ของ Tailwind CSS ทั้งหมดในขั้นตอนการ build

---

## 4. เริ่ม Development Server และทดสอบ

### 4.1 เริ่มต้น Server

ใน Terminal ให้รันคำสั่งเพื่อเริ่มต้น development server:
```bash
npm run dev
```
-   ระบบจะแสดง URL ของ Local Server (เช่น `http://localhost:5173`) ให้เปิด URL นี้ในเบราว์เซอร์

### 4.2 ทดสอบการใช้งาน Tailwind CSS

เพื่อยืนยันว่าการติดตั้งสำเร็จ ให้ทดลองใช้ Utility Class ของ Tailwind ในการปรับแต่งสไตล์

1.  เปิดไฟล์ `src/App.jsx`
2.  ลบโค้ดเริ่มต้นบางส่วนออกและแก้ไข `h1` โดยเพิ่ม `className` ของ Tailwind เข้าไป เช่น:
    ```jsx
    // src/App.jsx
    function App() {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-cyan-400">
            Tailwind CSS 4 is Awesome!
          </h1>
        </div>
      )
    }

    export default App
    ```
3.  **บันทึกไฟล์** และกลับไปดูที่เบราว์เซอร์ คุณจะเห็นข้อความที่ถูกปรับสไตล์ตาม Class ที่กำหนด ซึ่งเป็นการยืนยันว่า Tailwind CSS ทำงานได้อย่างถูกต้อง

---

**ยินดีด้วย!** ตอนนี้โปรเจกต์ React + Vite + Tailwind CSS v4.0 ของคุณพร้อมสำหรับการพัฒนาแล้ว
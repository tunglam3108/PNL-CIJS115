//Bài 1
import React from "react";
import Bai1 from "./components/Bai1";

// const BAi1 = () => {
//   return (
//     <div>
      // <Bai1 name="Tên: Huy" class="Lớp: 12A2" blabla="7.5 ielts" />
//       <Bai1 name="Tên: Phong" class="Lớp: 12A2" blabla="5.5 ielts" />
//       <Bai1 name="Tên: Nguyên" class="Lớp: 12A2" blabla="6.5 ielts" />
//     </div>
//   );
// }

// export default BAi1

//Bài 2
// import React from 'react'
import SearchAndNew from "./components/SearchAndNew";
import TodoList from "./components/List";



const App = () => {
  return (
    <div>
      <SearchAndNew />
      <TodoList head="List" title="Hạn nộp 9h 19/10" do="Làm bài tập về nhà và nộp bài đúng hạn" name="Đỗ Tùng Lâm" />
      <TodoList title="Uống thuốc" do="Uống sau ăn" name="Đỗ Tùng Lâm" />

      {/* <Do title="abc" do="Lam" name="Đỗ Tùng Lâm" /> */}
    </div>
  );
}

export default App
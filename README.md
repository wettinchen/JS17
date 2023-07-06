## JavaScript Chapter 17
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 17
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. Objects have key-value pairs

###  3. How to create an object
        宣告 myObj，指派 key 為 name，value 為字串 "Dave"

###  4. How to access a property of an object
        使用 object.key 回傳 value

###  5. What data goes inside of an object?

###  6. How to create object properties
        宣告 anotherObj，指派數對資料 key，property 分別為 boolean, number, array, object 

###  7. How to access the different properties of an object
        (1)回傳 boolean, number, array, object
        (2)回傳 array 的三個元素: Eat, Sleep, Code

###  8. Objects allow dot notation and bracket notation
        (1)dot notation
        (2)bracket notation

###  9. How to create object methods
        指派 key 為 action，method 為回傳 Hello World! 的函數

### 10. How to call an object method

### 11. The keyword this inside of a method
        使用 this關鍵字 修改 property 為回傳 Time for 早餐飲料 的函數

### 12. Object.create()
        宣告 truck，指派為 Object.create(vehicle);

### 13. Using an object as a constructor for another object
        宣告 truck 指派 object 為 {doors: 2}，使用 vehicle 為 constructor

### 14. Object Inheritance and examples of inheritance
        (1)說明 Inheritance，回傳 wheels 的property 4 和 engine 的函數 Vrroooom!;
        (2)比較 truck 和 car 的 Inheritance
        (3)比較 car 和 tesla 的 Inheritance

### 15. Object.keys()
        使用 Object.keys() 回傳 ["vocals", "guitar", "bass", "drums"]

### 16. Object.values()
        使用 Object.values() 回傳 ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

### 17. Using a for in loop to loop through an object
        (1)使用 forin 迴圈設定 key 為 job，object 為 band，回傳名字
        (2)回傳名字
        (3)可以使用 band 作為 constructor 或可以使用 function 作為 method

### 18. Deleting a property or method
        使用 delete 刪除 object 特定 key 的 property，key 為 band，property 為 drums

### 19. hasOwnProperty() method
        用 object.hasOwnProperty() 確認刪除成功。

### 20. Destructuring Objects as variables
        (1)將 band 解構，key 為 guitar，value 為 myVariable，回傳吉他手
        (2)將 band 解構，key 為 guitar 和 bass，value 為 myGuitar 和 myBass，回傳吉他手和貝斯手

### 21. Simplify destructuring by naming variables the same as object keys
        簡化 object keys 並透過命名變數將 band 解構

### 22. Destructuring Objects as parameters
        設定函數 name 為 sings，parameters 為 vocals 用於解構
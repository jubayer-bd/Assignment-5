1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById(): এই পদ্ধতিতে শুধুমাত্র id অ্যাট্রিবিউট ব্যবহার করে একটি নির্দিষ্ট উপাদান ব্যবহার করা হয়। HTML-এ id একটি (unique) অ্যাট্রিবিউট হওয়ায় , এই পদ্ধতিতে শুধুমাত্র একটি উপাদানই ব্যবহার করা যায় ।

getElementsByClassName(): এই পদ্ধতিতে class অ্যাট্রিবিউট ব্যবহার করে একাধিক উপাদান ব্যবহার করা হয়। এটি একটি HTMLCollection তৈরি করে , যেখানে সেই class -এর সমস্ত উপাদান থাকে ।

querySelector(): এই পদ্ধতিতে CSS সিলেক্টর ব্যবহার করে একটি উপাদান নির্বাচন করে। এটি CSS সিলেক্টরের এর প্রথম উপাদানটি ফিরিয়ে দেয়।

querySelectorAll(): এটিও CSS সিলেক্টর ব্যবহার করে, তবে এটি সিলেক্টরের সাথে মেলে এমন সমস্ত উপাদান একটি NodeList হিসেবে ফিরিয়ে দেয়।

2. How do you **create and insert a new element into the DOM**?
   ১. উপাদান তৈরি করা (createElement)
   document.createElement() পদ্ধতি ব্যবহার করে একটি নতুন HTML উপাদান তৈরি করা যায়।

যেমন:
// একটি নতুন div তৈরি করা হলো
const newDiv = document.createElement('div');
newDiv.textContent = 'hi!';
২. উপাদান প্রবেশ করানো (appendChild / insertBefore)
নতুন তৈরি করা উপাদানটিকে DOM-এ প্রবেশ করানোর জন্য appendChild() বা insertBefore() ব্যবহার করুন।

appendChild(): একটি প্যারেন্ট উপাদানের শেষে নতুন উপাদান যোগ করে।

document.body.appendChild(newDiv);
insertBefore(): একটি নির্দিষ্ট রেফারেন্স উপাদানের পূর্বে নতুন উপাদান যোগ করে।

JavaScript

const targetElement = document.getElementById('myElement');
document.body.insertBefore(newDiv, targetElement);

3. What is **Event Bubbling** and how does it work?
   ইভেন্ট বাবলিং (Event Bubbling) হল DOM-এ একটি ইভেন্টের প্রচার পদ্ধতি

কীভাবে এটি কাজ করে?
ধরুন, একটি <div> এর ভেতরে একটি <button> আছে। যখন আপনি <button> এ ক্লিক করেন, তখন প্রথমে click ইভেন্টটি <button> এর উপর ঘটে। এরপর এই ইভেন্টটি বাবলিং প্রক্রিয়ার মাধ্যমে তার প্যারেন্ট <div> এ চলে যায়। যদি <div> এর প্যারেন্ট অন্য কোনো উপাদান হয়, ইভেন্টটি সেখানেও যায়। এভাবে ইভেন্টটি সবচেয়ে উপরের উপাদান পর্যন্ত পৌঁছায়।

What is **Event Delegation** in JavaScript? Why is it useful?

ইভেন্ট ডেলিগেশন হল JavaScript-এর একটি কৌশল, যেখানে একাধিক চাইল্ড উপাদানের জন্য পৃথকভাবে ইভেন্ট লিসেনার না দিয়ে, তাদের সাধারণ প্যারেন্ট উপাদানে একটিমাত্র লিসেনার যুক্ত করা হয়।

ইভেন্ট ডেলিগেশন গুরুত্বপূর্ণ কারণ এটি:

১. কর্মক্ষমতা বাড়ায়: এটি অনেকগুলো ইভেন্ট লিসেনারের পরিবর্তে শুধুমাত্র একটি লিসেনার ব্যবহার করে, যা মেমরি ব্যবহার কমায় এবং পারফরম্যান্স উন্নত করে।

২. ডাইনামিক উপাদান নিয়ন্ত্রণ করে: এটি DOM-এ নতুন করে যুক্ত হওয়া উপাদানের জন্যও কাজ করে, কারণ নতুন উপাদানের জন্য আলাদা করে আর কোনো ইভেন্ট লিসেনার যুক্ত করতে হয় না।

৩. কোডকে সহজ রাখে: এটি কোডকে আরও সংক্ষিপ্ত এবং সহজে রক্ষণাবেক্ষণযোগ্য করে তোলে।

What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- preventDefault() -->

preventDefault() ইভেন্টের ডিফল্ট অ্যাকশন (default action) বন্ধ করে। অর্থাৎ, ব্রাউজারের যে স্বাভাবিক আচরণ আছে, সেটি ঘটতে বাধা দেয়।
যেমন:
একটি <form> সাবমিট হলে সাধারণত পৃষ্ঠা রিলোড হয়। event.preventDefault() ব্যবহার করে এই রিলোড বন্ধ করা যায়।

<!-- stopPropagation()  -->

stopPropagation() এটি একটি ইভেন্টের প্রচারকে তার প্যারেন্ট উপাদানে (parent element) ছড়িয়ে পড়া থেকে আটকায়।
যদি <button> এ ইভেন্ট লিসেনারে event.stopPropagation() ব্যবহার করা হয়, তাহলে <button> এ ক্লিক করার পর ইভেন্টটি <div>-এর দিকে আর ছড়িয়ে পড়বে না এবং <div>-এর ইভেন্টটি ট্রিগার হবে না।

class Counter {
    // Khai báo thuộc tính với giá trị mặc định là 0
    count: number = 0;

    // Hàm tăng giá trị
    increment(): void {
        this.count++; // Tăng count của chính instance này lên 1
        console.log(`Count is now: ${this.count}`);
    }

    // Hàm reset giá trị
    reset(): void {
        this.count = 0; // Đưa count về 0
        console.log("Counter reset");
    }
}

// --- THỰC THI ---

// Tạo 1 instance (đối tượng cụ thể) từ khuôn mẫu Counter
const myCounter = new Counter();

// Gọi liên tiếp các hành động
myCounter.increment(); // Lần 1: In ra 1
myCounter.increment(); // Lần 2: In ra 2
myCounter.reset();     // Lần 3: In ra Counter reset
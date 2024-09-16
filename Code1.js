const Name = "Dimas"
let age = 23
let Hobbies = "sports"

//1. Input data biodata

const biodata = {
    name: "dimas",
    age: 23,
    hobbies: "sports",
    IsMarried: false,
    schoolList:  [
        {
            name: "SMAN 6 Jakarta",
            yearIn: 2017,
            yearOut: 2020,
            major: "Science"
        },
        {
            name: "Universitas Airlangga",
            yearIn: 2020,
            yearOut: 2024,
            major: "International Relations"
        }
    ],
    skills: [
        {
            skillName: "JavaScript",
            level: "advanced"
        },
        {
            skillName: "Python",
            level: "expert"
        },
        {
            skillName: "HTML/CSS",
            level: "advanced"
        }
    ],
    interestInCoding: true
};

console.log(biodata)


// 2. Tugas Kedua Percobaan mencari rata" nilai


// Input nilai
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 85;
const ipa = 75;

// Validasi input
if (
    mtk === undefined ||
    bahasaIndonesia === undefined ||
    bahasaInggris === undefined ||
    ipa === undefined
) {
    console.log("Semua nilai harus diisi!");
} else {
    // Menghitung rata-rata
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    
    // Menentukan grade
    let grade;
    if (rataRata >= 90 && rataRata <= 100) {
        grade = "A";
    } else if (rataRata >= 80 && rataRata < 90) {
        grade = "B";
    } else if (rataRata >= 70 && rataRata < 80) {
        grade = "C";
    } else if (rataRata >= 60 && rataRata < 70) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    // Output hasil
    console.log("Rata-rata =", rataRata);
    console.log("Grade =", grade);
}




// 3. Tugas ketikga Looping
const printSegitiga = 10; // Ubah ini ke nilai yang diinginkan

if (typeof printSegitiga !== "number") {
    console.log("Data harus number");
} else {
    for (let i = printSegitiga; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
console.log(row.trim())
    }
}



//4. Tugas terakhir Spread operator
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

// Mengubah name, email dan menambahkan hobby
let newData = {
    ...data,
    name: "dimas",
    email: "contactmrdimas@gmail.com",
    hobby: "sports"
};

console.log(newData);


// Destructuring untuk mengambil street dan city
const { street, city } = newData.address;

console.log(`Street: ${street}`);
console.log(`City: ${city}`);




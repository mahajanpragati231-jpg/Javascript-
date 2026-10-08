function createDiary() {
    let entries = [];

    return {
        write(text) {
            entries.push(text);
        },

        read() {
            return entries;
        }
    };
}

const diary = createDiary();

diary.write("Today I studied JavaScript.");
diary.write("I learned about closures.");

console.log(diary.read());

console.log(diary.entries);

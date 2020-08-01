class Tester {
    public static test() {
        let arrLength = +prompt("Please enter the arr's length: ");
        while (arrLength <= 0 || isNaN(arrLength)) {
            arrLength = +prompt("Error - Please enter a positive integer: ");
        }
        const allItems: Clothes[] = new Array<Clothes>(arrLength);
        for (let i = 0; i < arrLength; i++) {
            allItems[i] = Generator.prototype.getRandomItem(arrLength);
            document.write("<div style='border: 1px solid black'>")
            allItems[i].showImage();
            document.write("<br>")
            allItems[i].display();
            allItems[i].getPriceWithoutVat();
            document.write("<hr>")
        }
    }
}
    







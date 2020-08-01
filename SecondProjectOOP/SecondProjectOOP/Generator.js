var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.getRandomItem = function (value) {
        switch (this.generateRandomNumber(0, 19)) { // פונציה אשר מגרילה תרחיש מסוג האובייקט לפי אינקדס אובייקט.
            case 0:
                var belt = new Belt(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomColorOfBuckle(), this.generateRandomMaterialOfBuckle(), this.generateRandomDimentions());
                return belt;
            case 1:
                var brimmedHat = new BrimmedHat(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(21, 25), // diameter
                this.generateRandomNumber(10, 20) // heigth 
                );
                return brimmedHat;
            case 2:
                var cascatHat = new CascatHat(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(21, 25), // diameter
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)));
                return cascatHat;
            case 3:
                var casualShoes = new CasualShoes(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomLandOfProduction(), this.generateRandomBoolean(this.generateRandomNumber(0, 1)), // Does The Shoe Is Laced? 
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)));
                return casualShoes;
            case 4:
                var coat = new Coat(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumberForIncomplete(), // WidthOfFabric
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)));
                return coat;
            case 5:
                var cottonPants = new CottonPants(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(30, 34), // lengthOfPentLeg
                this.generateRandomNumber(0, 10) // numOfPockets
                );
                return cottonPants;
            case 6:
                var dress = new Dress(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 53), // waist
                this.generateRandomNumber(30, 62), // length
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)) // openOrClosedBack
                );
                return dress;
            case 7:
                var elegantShoes = new ElegantShoes(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomLandOfProduction(), this.generateRandomBoolean(this.generateRandomNumber(0, 1)), // Does The Shoe Is Laced? 
                this.generateRandomTypeOfShoeCloth());
                return elegantShoes;
            case 8:
                var eveningDress = new EveningDress(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 53), // waist
                this.generateRandomNumber(30, 62), // length
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)), // openOrClosedBack
                this.generateRandomTypeOfCloth());
                return eveningDress;
            case 9:
                var femaleShirt = new FemaleShirt(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 37), this.generateRandomTypeOfCloth());
                return femaleShirt;
            case 10:
                var helledShoes = new HelledShoes(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomLandOfProduction(), this.generateRandomTypeOfHeel());
                return helledShoes;
            case 11:
                var jacket = new Jacket(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumberForIncomplete(), // WidthOfFabric
                this.generateRandomNumber(2, 10) // numOfPockets
                );
                return jacket;
            case 12:
                var jeans = new Jeans(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(30, 34), // lengthOfPentLeg
                this.generateRandomBoolean(this.generateRandomNumber(0, 1)));
                return jeans;
            case 13:
                var readGlasses = new ReadGlasses(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomColorOfFrame(), this.generateRandomNumber(15, 25) // recommended reading distance
                );
                return readGlasses;
            case 14:
                var shirtWithButtons = new ShirtWithButtons(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 37), // lengthOfSleeve
                this.generateRandomNumber(1, 10) // numberOfButtons
                );
                return shirtWithButtons;
            case 15:
                var skirt = new Skirt(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 53), // waist
                this.generateRandomDressType());
                return skirt;
            case 16:
                var sportShoes = new SportShoes(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomLandOfProduction(), this.generateRandomBoolean(this.generateRandomNumber(0, 1)), // Does The Shoe Is Laced? 
                this.generateRandomDateOfManufacture());
                return sportShoes;
            case 17:
                var sunGlasses = new SunGlasses(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomColorOfFrame(), this.generateRandomColorOfShade());
                return sunGlasses;
            case 18:
                var swimShorts = new SwimShorts(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(30, 34), // lengthOfPentLeg
                this.generateRandomTypeOfCloth());
                return swimShorts;
            case 19:
                var TShirt = new tShirt(this.generateRandomManufacturer(), this.generateRandomModel(), this.generateRandomNumber(20, 60), // size
                this.generateRandomNumber(0, 1000), // price
                this.generateRandomColor(), this.generateRandomNumber(32, 37), // lengthOfSleeve
                this.generateRandomLogo());
                return TShirt;
        }
    };
    Generator.prototype.generateRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Generator.prototype.generateRandomNumberForIncomplete = function () {
        return (this.generateRandomNumber(150, 175) / 100);
    }; // for the fabric & cloth width
    // ----------------------------------------------------------------------------------------------------------------------->
    Generator.prototype.generateRandomManufacturer = function () {
        var arrManufacturer = ["Renuar", "Fox", "Castro"];
        return arrManufacturer[this.generateRandomNumber(0, arrManufacturer.length - 1)];
    };
    Generator.prototype.generateRandomModel = function () {
        var arrModel = ["Regular", "Fancy", "Exclusive"];
        return arrModel[this.generateRandomNumber(0, arrModel.length - 1)];
    };
    Generator.prototype.generateRandomLogo = function () {
        var arrLogo = ["YOLO", "Do What Makes You Happy", "F What People Think"];
        return arrLogo[this.generateRandomNumber(0, arrLogo.length - 1)];
    };
    Generator.prototype.generateRandomTypeOfCloth = function () {
        var arrTypeOfCloth = ["Silk", "Cotton", "Poliaster"];
        return arrTypeOfCloth[this.generateRandomNumber(0, arrTypeOfCloth.length - 1)];
    };
    Generator.prototype.generateRandomLandOfProduction = function () {
        var arrLandOfProduction = ["Israel", "USA", "China"];
        return arrLandOfProduction[this.generateRandomNumber(0, arrLandOfProduction.length - 1)];
    };
    Generator.prototype.generateRandomDateOfManufacture = function () {
        var randomDate = this.generateRandomNumber(1, 31) + "/" + this.generateRandomNumber(1, 12) + "/" + this.generateRandomNumber(1980, 2020);
        return randomDate;
    };
    Generator.prototype.generateRandomColorOfShade = function () {
        var materialTypes = ["Black", "Grey", "clear"];
        return materialTypes[this.generateRandomNumber(0, materialTypes.length - 1)];
    };
    Generator.prototype.generateRandomColorOfBuckle = function () {
        var arrBuckleColor = ["Grey", "Black", "White"];
        return arrBuckleColor[this.generateRandomNumber(0, arrBuckleColor.length - 1)];
    };
    // ----------------------------------------------------------------------------------------------------------------------->
    Generator.prototype.generateRandomTypeOfShoeCloth = function () {
        switch (this.generateRandomNumber(0, 2)) {
            case 0: return TypeOfShoeCloth.cloth;
            case 1: return TypeOfShoeCloth.leather;
            case 2: return TypeOfShoeCloth.suede;
        }
    };
    Generator.prototype.generateRandomTypeOfHeel = function () {
        switch (this.generateRandomNumber(0, 2)) {
            case 0: return TypeOfHeel.highHeel;
            case 1: return TypeOfHeel.midHeel;
            case 2: return TypeOfHeel.lowHeel;
        }
    };
    Generator.prototype.generateRandomColorOfFrame = function () {
        switch (this.generateRandomNumber(0, 2)) {
            case 0: return ColorOfFrame.black;
            case 1: return ColorOfFrame.grey;
            case 2: return ColorOfFrame.white;
        }
    };
    Generator.prototype.generateRandomMaterialOfBuckle = function () {
        switch (this.generateRandomNumber(0, 3)) {
            case 0: return MaterialOfBuckle.cloth;
            case 1: return MaterialOfBuckle.leather;
            case 2: return MaterialOfBuckle.metal;
            case 3: return MaterialOfBuckle.plastic;
        }
    };
    Generator.prototype.generateRandomDimentions = function () {
        var RandomDimentions = new Dimentions(this.generateRandomNumber(26, 58), this.generateRandomNumberForIncomplete(), this.generateRandomNumber(30, 37));
        return RandomDimentions;
    }; // for the belt
    Generator.prototype.generateRandomColor = function () {
        switch (this.generateRandomNumber(0, 9)) {
            case 0: return Colors.black;
            case 1: return Colors.blue;
            case 2: return Colors.brown;
            case 3: return Colors.green;
            case 4: return Colors.grey;
            case 5: return Colors.mocha;
            case 6: return Colors.orange;
            case 7: return Colors.red;
            case 8: return Colors.white;
            case 9: return Colors.yellow;
        }
    };
    Generator.prototype.generateRandomDressType = function () {
        switch (this.generateRandomNumber(0, 1)) {
            case 0: return DressType.longSkirt;
            case 1: return DressType.shortSkirt;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------->
    Generator.prototype.generateRandomBoolean = function (value) {
        if (value == 1) {
            return true;
        }
        else
            return false;
    };
    return Generator;
}());
//# sourceMappingURL=Generator.js.map
$(document).ready(function () {
    $(".sidebar").hide();
    $("#sidebarCollapse").show();

    $("#sidebarCollapse").click(function () {
        $(".sidebar").slideToggle();
        $("section").toggleClass('col-md-3 col-md-4');
              
    });
    $(".dropdownapp").click(function () {
        $(".apppanel").slideToggle();
    });
    $("#settingspanel").hide();
    $("#settingspanelopen").click(function () {
        $("#settingspanel").fadeIn()
    });
    $(".closesettingspanel").click(function () {
        $("#settingspanel").hide();
    });
    $("#search").click(function () {
        $(".search").show();
    });
    $(".search-close").click(function () {
        $(".search").hide();
    });
    //$(".member-text").hide();
    //$(".imgWrap").hover(function () {
    //    $(".member-text").show();
    //});

    function save_changed_fontSize(fontSize) {
        if (window.localStorage) {
            localStorage.fontsize = fontSize;
        }
    }

    function load_changed_fontSize() {
        if (localStorage.fontsize) {
            $("body").css({ 'font-size': localStorage.fontsize });
        }
    }

    $("#increasetext").on('click', function (e) {
        e.preventDefault();
        var fontSize = $('body').css('font-size');
        console.log(fontSize);
        
        var newFontSize = parseFloat(fontSize) + 0.5;
        console.log(newFontSize);
        $("body").css('font-size', newFontSize + 'px');
        localStorage.setItem('cssfontSize',$("body").css('font-size', newFontSize + 'px'));
        save_changed_fontSize(fontSize);
    });
    load_changed_fontSize();
    $("#decreasetext").on('click', function (e) {
        e.preventDefault();
        var fontSize = $('body').css('font-size');
        console.log(fontSize);

        var newFontSize = parseFloat(fontSize) - 0.5;
        console.log(newFontSize);
        $("body").css('font-size', newFontSize + 'px');
        localStorage.setItem('cssfontSize', $("body").css('font-size', newFontSize + 'px'));
        save_changed_fontSize(fontSize);
    });
    load_changed_fontSize();
});


//function checkAge() {
//  // Validate ageInput.value and confirm that the user has specified an age
//  // in the range 18 to 120 inclusive
//  var ageValid = 20;
//  if (!ageValid) {
//    ageInput.setCustomValidity("Age is invalid. Please specify a value between 18 and 
//120");
//  } else {
//  ageInput.setCustomValidity("");
//  }
//}
//...
//var ageInput = document.getElementById("confirm-age"); 
//ageInput.addEventListener("input", checkAge, false);



//function isAnInteger( text ){
//    var intTestRegex = /^\s*(\+|-)?\d+\s*$/;

//    return String(text).search(intTestRegex) != -1;
//}
//function validateForm()
//{
//    if( ! isAnInteger(document.getElementById('score').value))
//        return false;   /* No, it’s not a number! Form validation fails */
//    return true;
//}



//function isSignificant( text ){
//    var notWhitespaceTestRegex = /[^\s]{1,}/;

//    return String(text).search(notWhitespaceTestRegex) != -1;
//}
//function validateForm() {
//    if( ! isSignificant(document.getElementById('penalties').value))
//        return false;   /* No! Form validation fails */
//    return true;
//}




//function validateForm() {
//    var textbox = document.getElementById("penalties");
//    if( ! isSignificant(textBox.value)) {
//        textbox.className = "validationError";
//        return false;   /* No! Form validation fails */
//    }
//    textbox.className = "validatedFine";
//    return true;
//}




//var request = new XMLHttpRequest();
//var url = "http://contoso.com/resources/..."; 
//request.open( "GET", url ); 
//request.setRequestHeader("User-Agent", "XMLHttpRequest");
//request.send();



//function tryMyLuck() { 
//    var request = new XMLHttpRequest(); 
//    request.open("GET", "/luckydip/enter"); 
//    request.setRequestHeader("User-Agent", "XMLHttpRequest"); 
//    request.send(); 
//    ...
//    if (request.status != 200) { 
//        alert("Error " + request.status + " - " + request.statusText); 
//    } 
//    ...
//}





//var request = new XMLHttpRequest(); 
//function getResponse(request) { 
//    var type = request.getResponseHeader(); 
//    switch (type) {
//        case "text/xml" : 
//            return request.responseXML;
//        default : 
//            return request.responseText; 
//    } 
//}





//{ 
//    "surname": "Bach", 
//    "role": "composer", 
//    "firstNames": [ 
//        "Johann", "Sebastian" 
//    ] 
//}

//function getResponse(request) { 
//    var type = request.getResponseHeader(); 
//    switch( type ) {
//        case "text/xml" : 
//            return request.responseXML;
//        case "text/json" : 
//            return JSON.parse(request.responseText);
//        default : 
//            return request.responseText; 
//    } 
//}



//request.onreadystatechange = function() { 
//    if (request.readyState === 4) { 
//        var response = JSON.parse(request.responseText); 
//        ... 
//    } 
//};


//var data = JSON.stringify();
//var request = new XMLHttpRequest();
//var url = ...
//request.open("POST", url);
//request.setRequestHeader("Content-Type", "text/plain");
//request.send(data);



//var num = 7; 
//function demonstrateScopingAndHoisting() { 
//    if (true) { 
//        var num = 42; 
//    } 
//    alert("The value of num is " + num); 
//} 


//var ageEnteredByUser;
//var heightEnteredByUser;
//…
//var age = parseInt(ageEnteredByUser);
//var height = parseFloat(heightEnteredByUser);
//if (isNan(age) || isNan(height))
//    alert("Invalid input");



//var employee1 = new Object();

//var employee2 = {};

//objectReference.propertyName = value;

//var employee1 = {};
//employee1.name = "John Smith";
//employee1.age = 21;


//employee1.salary = 10000;
//employee1.payRise = function(amount) {
//    // Inside a method, "this" means the current object.
//    this.salary += amount;
//    return this.salary;
//}


//objectReference.propertyName = value;
//objectReference.functionName(parameters);


//var newSalary = employee1.payRise(1000);
//document.write("New salary for employee1 is " + newSalary);



//var objectName = { 
//    property1: value1, 
//    property2: value2,  
//    ... 
//}; 


//var employee1 = { 
//    name: "John Smith", 
//    age: 21, 
//    salary: 10000 
//}; 


//var employee2 = {
//    name: "Mary Jones",
//    age: 42,
//    salary: 20000,
//    payRise: function(amount) {
//        this.salary += amount;


//        return this.salary;
//    },
//    displayDetails: function() {
//        alert(this.name + " is " + this.age + " and earns " + this.salary);
//    }
//};


////constructor function//
//var Account = function (id, name) { 
//    this.id = id; 
//    this.name = name; 
//    this.balance = 0; 
//    this.numTransactions = 0; 
//};

////defining objects acc1 and acc2 with constructor function Account//
//var acc1 = new Account(1, "John"); 
//var acc2 = new Account(2, "Mary");


////prototype defining a new methods which inherits all properties from the current object//
//Account.prototype = { 
//    deposit: function(amount) { 
//        this.balance += amount; 
//        this.numTransactions++; 
//    }, 
//    withdraw: function(amount) { 
//        this.balance -= amount; 
//        this.numTransactions++; 
//    }, 
//    displayDetails: function() { 
//        alert(this.id + ", " + 
//              this.name + " balance $" + 
//              this.balance + " (" + 
//              this.numTransactions + " transactions)"); 
//    } 
//};



//var acc1 = new Account(1, "John"); 
//var acc2 = new Account(2, "Mary"); 
//acc1.deposit(100); 
//acc1.display(); 
//acc2.withdraw(50); 
//acc2.display();



//Object.create(prototypeObject, 
//propertiesObject)


//var obj1 = Object.create(null, { prop1 = "hello", prop2 = "world" });


////Account constructor function, same as before. 
//var Account = function (id, name) { … }; 
//    // Account prototype, same as before. 
//    Account.prototype = { ... }; 
//    // Create an object by using the Account prototype. 
//    var obj2 = Object.create(Object.getPrototypeOf(Account));



//    var Person = function(name, age)
//    {
//        // Private properties.
//        var _name, _age;


//        // Public methods defined in the constructor have access to private properties.
//        this.getName = function()
//        {
//            return _name;
//        }
//        this.setName = function(name)
//        {
//            _name = name;
//        }
//        this.getAge = function()
//        {
//            return _age;
//        }
//        this.setAge = function(age)
//        {
//            if (age > 0 && age < 100)
//                _age = age;
//        }
//        // Constructor logic.
//        _name = name;
//        this.setAge(age);
//    }
//    // Public methods defined in the prototype do not have access to private properties.
//    Person.prototype =
//    {
//        toString: function()
//        {
//            return this.getName() + " is " + this.getAge();
//        }
//    }
//    // External code.
//    var person1 = new Person("Joe", 21);
//    alert(person1.toString());   // Displays "Joe is 21"
//    alert(person1._name);       // Displays "undefined"



//    // Base constructor.
//    var Person = function(name, age) {
//        this.name = name;
//        this.age = age;
//    }
//    // Base prototype.
//    Person.prototype = {
//        haveBirthday: function() {
//            this.age++;
//        }
//    };
//    // Derived constructor.
//    var Student = function(name, age, subject) {
//        this.name = name;
//        this.age = age;
//        this.subject = subject;
//    }
//    // Set the derived prototype to be the same object as the base prototype,
//    // and reset that derived prototype so that it uses the correct constructor.
//    Student.prototype = new Person();
//    Student.prototype.constructor = Student;
//    // Create a derived object and invoke any methods defined in the object or one of its  
//    // parents. JavaScript uses prototype chaining to locate methods up the inheritance tree. 
//    var aStudent = new Student("Jim", 20, "Physics");
//    aStudent.subject = "BioChemistry";
//    aStudent.haveBirthday();
//    alert(aStudent.age);



//    var Point = function(x, y) { 
//        this.x = x; 
//        this.y = y; 
//    } 
//    Point.prototype.moveBy = function(deltaX, deltaY) { 
//        this.x += deltaX; 
//        this.y += deltaY; 
//    } 
//    Point.prototype.moveTo = function(otherPoint) { 
//        this.x = otherPoint.x; 
//        this.y = otherPoint.y; 
//    } 
//    var p1= new Point(100, 200); 
//    p1.moveBy(10, 20); 
//    var p2= new Point(25, 50); 
//    p2.moveTo(p1);




//    <input type="file" id="theTextFile" onchange="onLoadTextFile()" /> 
//    <textArea id="theMessageArea" rows="30" cols="40"></textArea> 
//    <script type="text/javascript"> 
//        function onLoadTextFile() { 
//            var theFileElem = document.getElementById("theTextFile"); 
//            // Get the File object selected by the user, and make sure it is a text file. 
//            if (theFileElem.files.length != 0 && theFileElem.files[0].type.match(/text.*/)) { 
//                // Create a FileReader and handle the onload and onerror events. 
//                var reader = new FileReader(); 
//                reader.onload = function(e){ 
//                    var theMessageAreaElem = document.getElementById("theMessageArea"); 
//                    theMessageAreaElem.value = e.target.result; 
//                }; 
//                reader.onerror = function(e){ 
//                    alert("Cannot load text file"); 
//                }; 
//                // Read text file (the second parameter is optional - the default encoding is 
//                "UTF-8"). 
//                reader.readAsText(theFileElem.files[0], "ISO-8859-1"); 
//            } else { 
//                alert("Please select a text file"); 
//            } 
//        } 
//    </script>




//<input type="file" id="theBinaryFile" onchange="onLoadBinaryFile()" /> 
 
//<img id="theImage"></img> 
//<script type="text/javascript"> 
//    function onLoadBinaryFile() { 
//        var theFileElem = document.getElementById("theBinaryFile"); 
//        // Get the File object selected by the user (and make sure it is an image file). 
//        if (theFileElem.files.length != 0 && theFileElem.files[0].type.match(/image.*/)) 
//        { 
//            // Create a FileReader and handle the onload and onerror events. 
//            var reader = new FileReader(); 
//            reader.onload = function(e){ 
//                var theImgElem = document.getElementById("theImage"); 
//                theImgElem.src = e.target.result; 
//            }; 
//            reader.onerror = function(e){ 
//                alert("Cannot load binary file"); 
//            }; 
//            // Read the binary file. 
//            reader.readAsDataURL(theFileElem.files[0]); 
//        } else { 
//            alert("Please select a binary file"); 
//        } 
//    } 
//</script>




//function 
//createVideoElement(nameOfVideoFile, 
//nameOfHostElement) { 
//    // Create a video object and set its properties. 
//    var newVideo = document.createElement("video"); 
//    newVideo.src = nameOfVideo; 
//    newVideo.loop = true; 
//    newVideo.autoplay = true; 
//    newVideo.controls = true; 
//    newVideo.poster = "ImageLoading.png"; 
//    // Add the video object to an existing element on the web page. 
//    var hostElem = document.getElementById("videoDir"); 
//    hostElem.appendChild(newVideo); 
//}



//if (aVideo.paused) { 
//    alert("Video current time: " + aVideo.currentTime + ", total duration: " + 
//aVideo.duration); 
//    aVideo.play(); 
//} 
//else { 
//    aVideo.pause(); 
//}




//aVideo.addEventListener("loadedmetadata", function() { 
//    alert("Video duration: " + aVideo.duration); 
//}, 
//  false); 
//aVideo.addEventListener("loadeddata", function() { 
//    aVideo.play(); 
//}, 
//  false); 
//aVideo.addEventListener("timeupdate", function() { 
//    alert("Video current time: " + aVideo.currentTime); 
//}, 
//  false);




//navigator.geolocation.getCurrentPosition(myPositionCallbackFunction,
//                                         myPositionErrorCallbackFunction,
//                                         {enableHighAccuracy: true, timeout: 5000} );


//var watchID = navigator.geolocation.watchPosition(myPositionCallbackFunction,
//                                     myPositionErrorCallbackFunction,
//                                     {enableHighAccuracy: true, maximumAge: 10000} );



//function myPositionCallbackFunction(position) {
//    var latitude  = position.coords.latitude;
//    var longitude = position.coords.longitude;
//    var accuracy  = position.coords.accuracy;
//    var heading   = position.coords.heading;
//    var speed     = position.coords.speed;
//    var altitude  = position.coords.altitude;
//    var altitudeAccuracy  = position.coords.altitudeAccuracy;
//    // Add code here, to process the information.
//}



//function myPositionErrorCallbackFunction(error) {
//    var errorMessage = error.message;
//    var errorCode = error.code;
//    // Add code here, to process the information.
//}




//if( window.sessionStorage ){ 
//    ... 
//}



//sessionStorage.setItem("key","some text value"); 
//var textFromSession = sessionStorage.getItem("key");


//sessionStorage["key"] = "some text value"; 
//var textFromSession2 = sessionStorage["key"];


//sessionStorage.key = "some text value"; 
//var textFromSession3 = sessionStorage.key;




//var listDiv = document.getElementById("myList"); 
//for( int i=0; i<sessionStorage.length; i++) 
//{ 
//    listDiv.innerHTML += "<br />" + sessionStorage.key(i); 
//}


//sessionStorage.removeItem("key");


//sessionStorage.clear();




//if( window.localStorage ){ 
//    ... 
//}



//localStorage.setItem("key","some text value"); 
//var textData = localStorage.getItem('key'); 
//localStorage["key"] = "some text value"; 
//var textData = localStorage["key"]; 
//localStorage.key = "some text value"; 
//var textData = localStorage.key;



//var listDiv = document.getElementById("myList"); 
//for( int i=0; i<localStorage.length; i++) 
//{ 
//    listDiv.innerHTML += "<br />" + localStorage.key(i); 
//}


//localStorage.removeItem("key");


//localStorage.clear();



//function myStorageCallback( e ) { 
//    alert("Key:" + e.key + " changed to " 
//+ e.newValue); 
//} 
//window.addEventListener("storage", 
//myStorageCallback, true); 




//function myStorageCommitCallback( e ) {
//    alert("Data written to disk");
//}
//window.addEventListener("storagecommit", myStorageCommitCallback, true);



//$(document).ready(function () {
//    $("validationForm").submit(function(event)) {
//         event.preventDefault();
     
//        function isValidEmailAddress(emailAddress) {
//            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//            return pattern.test(emailAddress);
//        }
//        if(!isValidEmailAddress($("#email-address").val()));
//        alert("not valid");
//    });
//});









 


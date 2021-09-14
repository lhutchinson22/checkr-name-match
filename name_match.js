//CHECKR name match

//build a method name_match? that receives an array of known names and a
//name from a record to match.

function name_match(knownNames, name) {
  //initialize res
  let res = false;
  res = knownNames.some(n => n == name);
  if (res === true) return res;

  let names = name.split(" ");

  let firstName = names[0];
  let middleName;
  let lastName;
  if (names.length > 2) {
    middleName = names[1];
    lastName = names[2];
  } else lastName = names[1];

  console.log("NAME", name);

  knownNames.forEach(n => {
    let nameParts = n.split(" ");

    if (nameParts.length != 3 || !middleName) {
      if (
        nameParts[0] == firstName &&
        nameParts[nameParts.length - 1] == lastName
      ) {
        res = true;
        return;
      }
      // there are 3 so we do another condition for middle Initial
    } else {
      if (nameParts[1][0] === middleName[0]) {
        res = true;
        return;
      }
    }
  });

  return res;
}
// function name_match(knownNames, name) {
//   //if the candidate name matches the record print true
//   for (let i = 0; i < knownNames.length; i++) {
//     if (knownNames[i] === name) return true;
//   }

//   // check first name , last name , middle name
//   // break the name into parts, if first name and last name checks out, true
//   let nameParts = name.split(" ");

//   // if there is a middle name or multiple middle names
//   if (nameParts.length >= 3) {
//     for (let i = 0; i < nameParts.length; i++) {
//       let firstName = nameParts[0];
//       let lastName = nameParts.pop();
//       let fullName = firstName + " " + lastName;
//       fullName.toString();
//       if (fullName == knownNames) return true;
//     }
//     // if there is no middle name compare first and last
//   } else if (nameParts.length === 2) {
//     let knownParts = knownNames[0].split(" ");
//     let firstKnown = knownNames[0];
//     let lastKnown = knownParts.pop();
//     let fullKnown = firstKnown + " " + lastKnown;
//   }
// }

// console.log(name_match(knownNames3, submittedName6));

function test() {
  // -------------------------------------------------------------

  var known_names = ["Alphonse Gabriel Capone", "Al Capone"];
  if (name_match(known_names, "Alphonse Gabriel Capone") !== true) {
    console.log("error1");
  }
  if (name_match(known_names, "Al Capone") !== true) {
    console.log("error2");
  }
  if (name_match(known_names, "Alphonse Francis Capone") !== false) {
    console.log("error3");
  }
  // -------------------------------------------------------------
  var known_names = ["Alphonse Capone"];
  if (name_match(known_names, "Alphonse Gabriel Capone") !== true) {
    console.log("error4");
  }
  if (name_match(known_names, "Alexander Capone") !== false) {
    console.log("error5");
  }

  var known_names = ["Alphonse Gabriel Capone"];
  if (name_match(known_names, "Alphonse Capone") !== true) {
    console.log("error6");
  }

  var known_names = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"];
  if (name_match(known_names, "Alphonse Gabriel Capone") !== true) {
    console.log("error7");
  }
  if (name_match(known_names, "Alphonse Francis Capone") !== true) {
    console.log("error8");
  }
  if (name_match(known_names, "Alphonse Edward Capone") !== false) {
    console.log("error9");
  }

  var known_names = ["Alphonse Gabriel Capone", "Alphonse F Capone"];
  if (name_match(known_names, "Alphonse G Capone") !== true) {
    console.log("error10");
  }
  if (name_match(known_names, "Alphonse Francis Capone") !== true) {
    console.log("error11");
  }
  if (name_match(known_names, "Alphonse E Capone") !== false) {
    console.log("error12");
  }

  var known_names = ["Alphonse Gabriel Capone"];
  if (name_match(known_names, "Gabriel Alphonse Capone") !== true) {
    console.log("error13");
  }
  if (name_match(known_names, "Gabriel Capone") !== true) {
    console.log("error14");
  }
  if (name_match(known_names, "Gabriel A Capone") !== true) {
    console.log("error15");
  }
  if (name_match(known_names, "Capone Francis Alphonse") !== false) {
    console.log("error16");
  }

  var known_names = ["Alphonse Capone"];
  if (name_match(known_names, "Alphonce Capone") !== true) {
    console.log("error17");
  }
  if (name_match(known_names, "Alphonce Capome") !== true) {
    console.log("error18");
  }
  if (name_match(known_names, "Alphons Capon") !== true) {
    console.log("error19");
  }
  if (name_match(known_names, "Alphosne Capone") !== false) {
    console.log("error20");
  }
  if (name_match(known_names, "Alfonse Capone") !== false) {
    console.log("error21");
  }
}
test();

/** 
* @name: Assignment1 
* @Course Code: SODV1201 
* @class: Software Development Diploma program. 
* @author: Andrei Laqui
*/

var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

//I prefer to use objects instead of arrays
var staff = dataSet.map((row) => {
    return {
        name: row[0],
        jobtitle: row[1],
        city: row[2],
        staffno: row[3],
        hiredate: row[4],
        salary: row[5]
    };
});



$(document).ready(function() {
    //initial page load - sort by name ascending
    const staffSortedByName = sortedArray(staff, 'name', 1);
    appendEmployeeSections(staffSortedByName);  

    //attach event listener to radio buttons
    $('.sort-option').on('change', sortRadioChanged);

});








// old code old code old code old code 
// //Sort by Name
// staff.sort((a, b) => {
//     a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);  // AL - nested two ternary operators, if a.name is less than b.name, return -1, if a.name is greater than b.name, return 1, if equal return 0
// });
// console.log('Sorted by name:', staff);
// //Sort by Salary
// staff.sort((a, b) => {
//     const salaryA = parseFloat(a.salary.replace('$', '').replace(',', '')); // AL - let's get rid of $ and , in the salary
//     const salaryB = parseFloat(b.salary.replace('$', '').replace(',', ''));
//     return salaryA - salaryB;   // AL if A is greater than B, return positive and it should be after B
// });
// console.log('Sorted by salary:', staff);
// old code old code old code old code 


// It is always fun to find an elegant-er solution. order is 1 for ascending, -1 for descending
const sortedArray = (array, key, order) => {
    return array.sort((a, b) => {
        let valueA = a[key];   // AL - discovery! you can use variables as keys in objects. BUT DO NOT WRITE a.key !!!
        let valueB = b[key];        //had to use let instead of const because I might clean $, if key is salary
        
        if (key === 'salary') {  // I want to clean $ and , ONLY if it's the salary
            valueA = parseFloat(valueA.replace('$', '').replace(/,/g, ''));
            valueB = parseFloat(valueB.replace('$', '').replace(/,/g, '')); // AL - used regex to replace ALL commas. 1,200,000 -> 1200000 if simple replace it's only 1200,000
        }
        
        return (valueA < valueB ? -1 : (valueA > valueB ? 1 : 0)) * order;
    });
};

function sortRadioChanged() {
    const sortBy = $('input[name="sort-by"]:checked').val();
    const sortDir = $('input[name="sort-dir"]:checked').val() === 'Ascending' ? 1 : -1;

    const staffSorted = sortedArray(staff, sortBy, sortDir);    // just make a copy, preserve original staff object
    $('main').children().slice(2).remove(); // get all children, *exclude* first two (Sort by and Sort direction panel), then clear the rest
    appendEmployeeSections(staffSorted);

    // console.log(staff);
}

function appendEmployeeSections(arrStaff) {
    arrStaff.forEach(function(myStaff) {
        const employeeSection = `
            <section>
                <h2>${myStaff.name}</h2>
                <p>Position: <span>${myStaff.jobtitle}</span></p>
                <p>City: <span>${myStaff.city}</span></p>
                <p>Staff No: <span>${myStaff.staffno}</span></p>
                <p>Hire Date: <span>${myStaff.hiredate}</span></p>
                <p>Salary: <span>${myStaff.salary}</span></p>
            </section>
        `;
        $('main').append(employeeSection);
    });
}


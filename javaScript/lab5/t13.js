let role = "guest";

function loginAsAdmin() {
    let role = "admin";
    console.log("Inside function:", role);
}

loginAsAdmin();

console.log("Global role:", role);
function checkAccess(allowedRole) {
    const currentUser = localStorage.getItem('currentUser');
    const currentRole = localStorage.getItem('currentRole');

    if (!currentUser || !currentRole) {
        alert("Access Denied: Please login first!");
        window.location.href = "login.html";
        return;
    }

    // Allow MO to access both MO and Admin features seamlessly
    if (currentRole === 'mo' && (allowedRole === 'mo' || allowedRole === 'admin')) {
        return;
    }

    if (currentRole !== allowedRole) {
        alert(`Access Denied! As a ${currentRole.toUpperCase()}, you cannot access ${allowedRole.toUpperCase()} pages.`);
        if (currentRole === 'student') window.location.href = 'student-overview.html';
        else if (currentRole === 'mo') window.location.href = 'mo-overview.html';
        else if (currentRole === 'doctor') window.location.href = 'doctor-overview.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRole');
    window.location.href = 'login.html';
}
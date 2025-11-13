// Coimbatore Locations for simulating "real-time" data
const coimbatoreLocations = [
    "Gandhipuram Central Bus Stand",
    "RS Puram, DB Road",
    "Peelamedu, Avinashi Rd.",
    "Sivananda Colony",
    "Ukkadam Bus Terminus",
    "Saravanampatti Main Road",
    "Race Course Road",
    "Saibaba Colony, Nanjappa Rd.",
    "Town Hall, Opp. Victoria Hall",
    "Singanallur Junction"
];

// Mock data structure for worker names
const workerNames = [
    "Rajesh M.", "Priya S.", "Kumar V.", "Shanthi R.", "Anil J.", "Meena P."
];

// Mock data structure for the final query list (Used for all departments)
const mockQueryData = {
    // Resolved Queries (Added worker names and universal drone access)
    "Resolved": [
        { status_detail: "Fixed at Main St.", location_index: 0, drone: true, worker: workerNames[0] },
        { status_detail: "Completed inspection", location_index: 1, drone: true, worker: workerNames[1] },
        { status_detail: "Confirmed repair order", location_index: 8, drone: true, worker: workerNames[2] },
        { status_detail: "Final site clearance", location_index: 9, drone: true, worker: workerNames[3] },
        { status_detail: "Assessment verified", location_index: 6, drone: true, worker: workerNames[4] },
        { status_detail: "Tax appeal approved", location_index: 7, drone: true, worker: workerNames[5] },
        { status_detail: "Site fumigated", location_index: 5, drone: true, worker: workerNames[0] },
    ],
    // Not Resolved Queries (Universal drone access enabled, worker is null/future)
    "Not Resolved": [
        { status_detail: "Inspection scheduled tomorrow", location_index: 2, drone: true, worker: null },
        { status_detail: "Awaiting material delivery", location_index: 3, drone: true, worker: null },
        { status_detail: "Permission pending from Highways Dept.", location_index: 4, drone: true, worker: null },
        { status_detail: "License verification pending", location_index: 3, drone: true, worker: null },
        { status_detail: "Waiting for public health review", location_index: 6, drone: true, worker: null },
    ]
};

// Department data with unique issues (All departments support the full flow)
const DepartmentIssues = {
    "Water Supply & Sewerage Department": [
        { title: "Leakage & Burst Pipes", icon: "fa-faucet-drip", resolved: 5, pending: 3 },
        { title: "Low Water Pressure", icon: "fa-hand-holding-water", resolved: 2, pending: 2 },
        { title: "No Supply", icon: "fa-ban", resolved: 2, pending: 2 },
        { title: "Sewer Overflow", icon: "fa-toilet", resolved: 2, pending: 2 },
        { title: "Drainage Blockage", icon: "fa-briefcase", resolved: 2, pending: 2 },
        { title: "Water Quality Complaint", icon: "fa-tint", resolved: 2, pending: 2 },
        { title: "Pipeline Installation", icon: "fa-wrench", resolved: 2, pending: 2 },
        { title: "Valve Replacement", icon: "fa-tools", resolved: 2, pending: 2 },
    ],
    "Health & Sanitation": [
        { title: "Waste Collection Delay", icon: "fa-trash", resolved: 15, pending: 10 },
        { title: "Pest/Mosquito Control", icon: "fa-bug", resolved: 10, pending: 4 },
        { title: "Public Dustbin Damage", icon: "fa-box-open", resolved: 3, pending: 5 },
        { title: "Street Sweeping Complaint", icon: "fa-broom", resolved: 8, pending: 2 },
        { title: "Stray Animal Issue", icon: "fa-dog", resolved: 1, pending: 1 },
    ],
    "Revenue & Tax": [
        { title: "Property Tax Assessment", icon: "fa-file-invoice-dollar", resolved: 40, pending: 10 },
        { title: "Trade License Renewal", icon: "fa-store", resolved: 5, pending: 2 },
        { title: "Tax Payment Inquiry", icon: "fa-receipt", resolved: 15, pending: 3 },
    ],
    "Engineering & Public Works": [
        { title: "Road Repair Needed", icon: "fa-road", resolved: 22, pending: 18 },
        { title: "Streetlight Outage", icon: "fa-lightbulb", resolved: 15, pending: 5 },
        { title: "Bridge Maintenance", icon: "fa-gopuram", resolved: 3, pending: 2 },
        { title: "Pothole Complaint", icon: "fa-car-burst", resolved: 10, pending: 10 },
    ],
    "General Administration": [
        { title: "General Service Inquiry", icon: "fa-question-circle", resolved: 10, pending: 5 },
        { title: "Staff Complaint", icon: "fa-user-times", resolved: 3, pending: 1 },
        { title: "Office Maintenance", icon: "fa-wrench", resolved: 5, pending: 2 },
    ],
    "Town Planning": [
        { title: "Building Permit Status", icon: "fa-city", resolved: 15, pending: 5 },
        { title: "Zoning Violation", icon: "fa-house-crack", resolved: 8, pending: 4 },
        { title: "Land Use Change", icon: "fa-map-location-dot", resolved: 2, pending: 1 },
    ],
    "Education": [
        { title: "School Infrastructure", icon: "fa-school", resolved: 12, pending: 8 },
        { title: "Curriculum Feedback", icon: "fa-book-open", resolved: 5, pending: 3 },
    ],
    "IT & E-Governance": [
        { title: "Portal Glitch Report", icon: "fa-server", resolved: 25, pending: 15 },
        { title: "Hardware Failure", icon: "fa-computer-mouse", resolved: 8, pending: 2 },
    ],
    "Fire & Emergency Services": [
        { title: "Fire Hydrant Issue", icon: "fa-fire-extinguisher", resolved: 4, pending: 1 },
        { title: "Safety Inspection Request", icon: "fa-shield-halved", resolved: 7, pending: 3 },
    ],
    "Parks & Recreation": [
        { title: "Park Maintenance", icon: "fa-tree", resolved: 9, pending: 6 },
        { title: "Playground Equipment", icon: "fa-swimming-pool", resolved: 3, pending: 1 },
    ],
    "DEFAULT": [
        { title: "Generic Inquiry", icon: "fa-question-circle", resolved: 10, pending: 5 },
    ]
};

// Global state for Drone Controls
let droneState = {
    battery: 100,
    speed: 0.0,
    gps: 'Not Locked',
    status: 'Idle',
    currentIssue: null,
    verificationComplete: false // Track verification status
};

// --- Screen Management Functions ---

function showScreen(screenId) {
    // Hide all six screens
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('issueListScreen').style.display = 'none';
    document.getElementById('queryDetailScreen').style.display = 'none';
    document.getElementById('queryListScreen').style.display = 'none';
    document.getElementById('droneControlScreen').style.display = 'none';
    
    // Show the requested screen
    document.getElementById(screenId).style.display = 'block';
}

function updateDashboardStats(departmentName) {
    let resolvedSum = 0;
    let pendingSum = 0;
    
    const issues = DepartmentIssues[departmentName] || DepartmentIssues["DEFAULT"];

    issues.forEach(issue => {
        resolvedSum += issue.resolved;
        pendingSum += issue.pending;
    });

    // SPECIAL CASE: To exactly match the Water Supply image (40 Total, 20 Resolved, 20 Pending)
    if (departmentName === "Water Supply & Sewerage Department") {
        resolvedSum = 20;
        pendingSum = 20;
    }
    
    const totalSum = resolvedSum + pendingSum; 
    document.getElementById('dashboardTotal').textContent = totalSum;
    document.getElementById('dashboardResolved').textContent = resolvedSum;
    document.getElementById('dashboardPending').textContent = pendingSum;
}

function renderIssueList(departmentName) {
    const issues = DepartmentIssues[departmentName] || DepartmentIssues["DEFAULT"];
    const issueContent = document.getElementById('issueContent');
    const header = document.getElementById('issueListHeader');
    let html = '';

    header.textContent = departmentName;

    issues.forEach((issue, index) => {
        const resolved = issue.resolved;
        const pending = issue.pending;
        const total = resolved + pending;

        html += `
            <div class="issue-card" data-issue-index="${index}" data-department-name="${departmentName}">
                <div style="display: flex; align-items: center;">
                    <div class="issue-icon-box">
                        <i class="fas ${issue.icon} issue-icon"></i>
                    </div>
                    <div class="issue-details">
                        <p class="issue-title">${issue.title}</p>
                        <p class="issue-stats-line">
                            Resolved: <span style="color: green;">${resolved}</span> • 
                            Pending: <span style="color: orange;">${pending}</span> • 
                            Total: <b>${total}</b>
                        </p>
                    </div>
                </div>
                <button class="open-button">Open</button>
            </div>
        `;
    });

    issueContent.innerHTML = html;
    
    issueContent.querySelectorAll('.issue-card').forEach(card => {
        card.addEventListener('click', function() {
            const deptName = this.dataset.departmentName;
            const issueIndex = parseInt(this.dataset.issueIndex);
            
            renderQueryDetails(deptName, issueIndex);
        });
    });

    showScreen('issueListScreen');
}

function renderQueryDetails(departmentName, issueIndex) {
    const currentIssues = DepartmentIssues[departmentName] || DepartmentIssues["DEFAULT"];
    const issueToRender = currentIssues[issueIndex % currentIssues.length];

    if (!issueToRender) return;

    const header = document.getElementById('queryDetailHeader');
    const queryContent = document.getElementById('queryContent');
    
    header.textContent = issueToRender.title;
    
    const resolvedCount = issueToRender.resolved;
    const pendingCount = issueToRender.pending;
    
    let html = '';

    // Resolved Card - Data attributes store info for the next step
    html += `
        <div class="query-card" data-issue-type="Resolved" data-issue-title="${issueToRender.title}" data-issue-count="${resolvedCount}">
            <p class="query-title">Resolved Queries (${resolvedCount})</p>
            <button class="view-button">View</button>
        </div>
    `;

    // Not Resolved Card - Data attributes store info for the next step
    html += `
        <div class="query-card" data-issue-type="Not Resolved" data-issue-title="${issueToRender.title}" data-issue-count="${pendingCount}">
            <p class="query-title">Not Resolved Queries (${pendingCount})</p>
            <button class="view-button">View</button>
        </div>
    `;

    queryContent.innerHTML = html;
    
    queryContent.querySelectorAll('.query-card').forEach(card => {
        card.addEventListener('click', function() {
            const type = this.dataset.issueType;
            const title = this.dataset.issueTitle;
            const count = parseInt(this.dataset.issueCount);
            
            renderQueryList(type, title, count);
        });
    });

    showScreen('queryDetailScreen');
}

function renderQueryList(queryType, issueTitle, queryCount) {
    const header = document.getElementById('queryListHeader');
    const queryListContent = document.getElementById('queryListContent');
    let html = '';
    
    header.textContent = `${queryType} Queries (${queryCount})`;

    const dataSet = mockQueryData[queryType] || [];
    const dataSetLength = dataSet.length;
    
    for (let i = 0; i < queryCount; i++) {
        // Cycle through mock data for variation
        const query = dataSet[i % dataSetLength] || {}; 
        
        // Cycle through Coimbatore locations
        const locationName = coimbatoreLocations[i % coimbatoreLocations.length]; 
        const statusText = queryType;
        
        // Default to generic values if mock data is missing
        const statusDetail = query.status_detail || (queryType === "Resolved" ? "Completed documentation" : "Under Review");
        // Drone is now always true
        const hasDrone = true; 
        const worker = query.worker || "N/A (Pending)"; // Get worker name
        
        const queryDataString = encodeURIComponent(JSON.stringify({
            issueTitle, statusText, statusDetail, locationName, isResolved: (queryType === "Resolved"), workerName: worker
        }));
        
        // Display worker name only for Resolved queries
        const workerDisplay = (queryType === "Resolved" && worker !== "N/A (Pending)") 
            ? `<p class="worker-name" style="font-size: 0.8em; color: #007bff; margin-top: 5px;">Work Done By: ${worker}</p>` 
            : '';

        html += `
            <div class="individual-query-card">
                <div style="display: flex; align-items: center;">
                    <div class="left-icon">
                        <i class="fas fa-file-invoice"></i>
                    </div>
                    <div class="query-info">
                        <p class="query-status">${issueTitle} - ${statusText}: ${statusDetail}</p>
                        <p class="query-location">Location: ${locationName}</p>
                        ${workerDisplay} 
                    </div>
                </div>
                ${hasDrone ? 
                    `<span class="drone-status" data-query-data="${queryDataString}" id="droneLink${i}">
                        <i class="fas fa-satellite-dish"></i> Drone
                    </span>` : ''}
            </div>
        `;
    }

    queryListContent.innerHTML = html;

    // Attach click listeners to the dynamically generated "Drone" links
    queryListContent.querySelectorAll('.drone-status').forEach(link => {
        link.addEventListener('click', function() {
            const queryData = JSON.parse(decodeURIComponent(this.dataset.queryData));
            renderDroneControlScreen(queryData);
        });
    });

    showScreen('queryListScreen');
}

function renderDroneControlScreen(queryData) {
    droneState.currentIssue = queryData;
    
    // Reset drone specs and verification status upon entering the screen
    droneState.battery = 100;
    droneState.speed = 0.0;
    droneState.gps = 'Not Locked';
    droneState.status = 'Idle';
    droneState.verificationComplete = false; 

    // Update header and issue details
    document.getElementById('droneIssueSummary').textContent = `${queryData.issueTitle} — ${queryData.statusText}: ${queryData.statusDetail}`;
    document.getElementById('droneLocation').textContent = `Location: ${queryData.locationName}`;
    document.getElementById('droneResolvedStatus').textContent = queryData.isResolved ? 'Resolved' : 'Pending';

    // Update Worker Info and Verification Status
    const verificationEl = document.getElementById('droneVerificationStatus');
    const workerEl = document.getElementById('droneWorkerInfo');
    const completeBtn = document.getElementById('verifyCompletionButton');

    workerEl.textContent = `Worker: ${queryData.workerName}`;
    verificationEl.textContent = `Verification: Pending Drone Mark`;
    verificationEl.classList.remove('verified');
    
    completeBtn.textContent = 'Verify & Mark Completed';
    completeBtn.classList.remove('verified');

    // Update specs display
    updateDroneSpecsDisplay();

    // Attach click handlers to control buttons
    const controlPad = document.querySelector('.drone-content');
    controlPad.querySelectorAll('.control-btn, .action-btn').forEach(btn => {
        btn.onclick = function() { handleControlCommand(this.dataset.command); };
    });
    
    // Handle the Mark Completed button click
    completeBtn.onclick = handleVerificationCompletion;
    
    showScreen('droneControlScreen');
}

function updateDroneSpecsDisplay() {
    document.getElementById('droneBattery').textContent = `${droneState.battery}%`;
    document.getElementById('droneSpeed').textContent = `${droneState.speed.toFixed(1)} m/s`;
    document.getElementById('droneGPS').textContent = droneState.gps;
    
    // Update status indicator
    const statusEl = document.getElementById('droneCurrentStatus');
    statusEl.textContent = `Status: ${droneState.status}`;
    statusEl.className = 'status-indicators'; // Reset class
    if (droneState.status === 'Idle') statusEl.classList.add('status-idle');
    else if (droneState.status === 'Moving') statusEl.classList.add('status-moving');
    else statusEl.classList.add('status-warning');
    
    // Update battery bar width and color
    const batteryBar = document.getElementById('droneBatteryBar');
    batteryBar.style.width = `${droneState.battery}%`;
    if (droneState.battery < 20) batteryBar.style.backgroundColor = '#d32f2f'; // Red low battery
    else if (droneState.battery < 50) batteryBar.style.backgroundColor = '#ffc107'; // Yellow
    else batteryBar.style.backgroundColor = '#007bff'; // Blue
}

function handleControlCommand(command) {
    if (droneState.battery <= 0) {
        alert("Battery critically low. Cannot perform action.");
        return;
    }

    droneState.battery = Math.max(0, droneState.battery - 1); // Simulate battery drain
    
    // Fix: Including AltUp/AltDown in movement logic
    if (['Up', 'Down', 'Left', 'Right', 'AltUp', 'AltDown'].includes(command)) {
        droneState.speed = 2.0; 
        droneState.status = 'Moving';
        droneState.gps = 'Locked';
    } else if (command.includes('Rotate')) {
        droneState.speed = 0.5; 
        droneState.status = 'Moving';
        droneState.gps = 'Locked';
    } else if (command === 'Stop' || command === 'Land') {
        droneState.speed = 0.0;
        droneState.status = 'Idle';
        droneState.gps = 'Not Locked';
    } else if (command === 'Snap' || command === 'Video' || command === 'GoTo') {
        // Action buttons trigger verification
        if (!droneState.verificationComplete) {
            droneState.verificationComplete = true;
            document.getElementById('droneVerificationStatus').textContent = 'Verification: Completed! (Proof Captured)';
            document.getElementById('droneVerificationStatus').classList.add('verified');
            document.getElementById('verifyCompletionButton').classList.add('verified');
        }
        alert(`${command} action triggered! Proof captured.`);
    }
    
    updateDroneSpecsDisplay();
    
    // Simulate stopping after a short time if it was a quick command
    if (command !== 'Stop' && command !== 'Land' && command !== 'Snap' && command !== 'Video' && command !== 'GoTo') {
        setTimeout(() => {
            droneState.speed = 0.0;
            droneState.status = 'Idle';
            updateDroneSpecsDisplay();
        }, 500);
    }
}

function handleVerificationCompletion() {
    if (!droneState.verificationComplete) {
        alert("Please perform a verification action (Snap, Video, or GoTo) first to mark the work as verified.");
        return;
    }
    
    alert(`Work for "${droneState.currentIssue.issueTitle}" verified and officially marked as Completed by Drone Controls.`);
    
    // Navigate back to the dashboard
    showScreen('dashboardScreen');
}


// --- Event Listeners ---

// 1. LOGIN FORM SUBMIT (Login Screen -> Dashboard)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const departmentElement = document.getElementById('department');
    const departmentName = departmentElement.options[departmentElement.selectedIndex].text; 
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    const displayDeptName = document.getElementById('displayDepartmentName');
    const loginForm = document.getElementById('loginForm'); 

    messageElement.style.display = 'none';
    const correctPassword = 'laksh@2007';

    if (departmentName === "--- Choose your Department ---") {
        messageElement.textContent = 'Please select a department.';
        messageElement.style.display = 'block';
        return;
    }

    if (password === correctPassword) {
        // SUCCESS: Show Processing Message and apply delay
        messageElement.textContent = 'Processing Login...';
        messageElement.style.display = 'block';
        messageElement.style.color = '#007bff'; // Change color for success/processing
        loginForm.style.opacity = 0.5; // Dim the form

        // Disable input fields to prevent interaction during delay
        document.getElementById('department').disabled = true;
        document.getElementById('id').disabled = true;
        document.getElementById('password').disabled = true;
        document.querySelector('.login-button').disabled = true;

        setTimeout(() => {
            // After 1 second delay
            
            // Re-enable input fields
            document.getElementById('department').disabled = false;
            document.getElementById('id').disabled = false;
            document.getElementById('password').disabled = false;
            document.querySelector('.login-button').disabled = false;

            // 1. Hide the message element and reset color/opacity
            messageElement.style.display = 'none';
            messageElement.style.color = '#dc3545'; 
            loginForm.style.opacity = 1; 
            
            // 2. Perform the dashboard transition
            displayDeptName.textContent = departmentName;
            updateDashboardStats(departmentName);
            showScreen('dashboardScreen');
        }, 1000); // 1000 milliseconds = 1 second
        
    } else {
        // Failed login
        messageElement.textContent = 'Enter the valid password.';
        messageElement.style.display = 'block';
    }
});


// 2. LOGOUT / BACK TO LOGIN (Dashboard -> Login)
document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('password').value = '';
    showScreen('loginScreen');
});


// 3. GO TO DEPARTMENT BUTTON (Dashboard -> Issue List)
document.getElementById('goToDeptButton').addEventListener('click', function() {
    const departmentName = document.getElementById('displayDepartmentName').textContent;
    renderIssueList(departmentName);
});


// 4. BACK TO DASHBOARD BUTTON (Issue List -> Dashboard)
document.getElementById('backToDashboardButton').addEventListener('click', function(event) {
    event.preventDefault();
    showScreen('dashboardScreen');
});


// 5. BACK TO ISSUE LIST BUTTON (Query Details -> Issue List)
document.getElementById('backToIssueListButton').addEventListener('click', function(event) {
    event.preventDefault();
    showScreen('issueListScreen');
});

// 6. BACK TO QUERY DETAILS BUTTON (Query List -> Query Details)
document.getElementById('backToQueryDetailButton').addEventListener('click', function(event) {
    event.preventDefault();
    showScreen('queryDetailScreen');
});

// 7. BACK TO QUERY LIST BUTTON (Drone Control -> Query List)
document.getElementById('backToQueryListButton').addEventListener('click', function(event) {
    event.preventDefault();
    showScreen('queryListScreen');
});


// Initialize by showing the login screen when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showScreen('loginScreen');
});
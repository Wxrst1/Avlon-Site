// Error handling function
function handleApiError(error) {
  console.error('Error fetching data:', error);
  alert('An error occurred while fetching data. Please try again later.');
}

// Function to update server count
async function updateServerCount() {
  try {
    const response = await axios.get('http://localhost:8034/servers');
    $("#servers").text(response.data.servers);
  } catch (error) {
    handleApiError(error);
  }
}

async function updateUserCount() {
  try {
    const response = await axios.get('http://localhost:8034/users');
    $("#users").text(response.data.users);
  } catch (error) {
    handleApiError(error);
  }
}

async function updateChannelCount() {
  try {
    const response = await axios.get('http://localhost:8034/channels');
    $("#channels").text(response.data.channels);
  } catch (error) {
    handleApiError(error);
  }
}

async function updateUptime() {
  try {
    const response = await axios.get('http://localhost:8034/uptime');
    $("#uptime").text(response.data.uptime);
  } catch (error) {
    handleApiError(error);
  }
}


// Function to update bot status
async function updateStatus() {
  try {
    const response = await $.get("http://localhost:8034/status");
    const statusIndicator = $('#status');
    const statusIndicator2 = $('#statusIndicator');
    statusIndicator.removeClass('online offline maintenance');

    if (response.status === 'online') {
      statusIndicator.addClass('online');
      statusIndicator2.addClass('status-online');
      statusIndicator.text('Online');
    } else if (response.status === 'maintenance') {
      statusIndicator.addClass('maintenance');
      statusIndicator2.addClass('status-maintenance');
      statusIndicator.text('Maintenance');
    } else {
      statusIndicator.addClass('offline');
      statusIndicator2.addClass('status-offline');
      statusIndicator.text('Offline');
    }
  } catch (error) {
    handleApiError(error);
  }
}

// Function to handle logout (assuming you already have this)
function handleLogout() {
  // ... Your existing logout functionality with error handling
}

// Function to check login status (assuming you already have this)
async function checkLoginStatus() {
  try {
    const response = await fetch('http://localhost:8034/getProfile');
    if (response.ok) {
      const profile = await response.json();
      
      // Update avatar
      const avatar = document.querySelector('#avatar');
      avatar.src = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`;
  
      // Show profile and hide login
      document.querySelector('#profile').style.display = 'block';
      document.querySelector('#loginButton').style.display = 'none';
    }
  } catch (error) {
    handleApiError(error);
  }
}

$(document).ready(function() {
  // Call functions to update data
  updateServerCount();
  updateUserCount(); // Replace with your function call
  updateChannelCount(); // Replace with your function call
  updateUptime(); // Replace with your function call
  updateStatus();

  // Logout functionality
  // ... (replace with your existing logout code)

  // Login status check
  // ... (replace with your existing login status check code)
});

document.addEventListener('DOMContentLoaded', (event) => {
  checkLoginStatus();
});

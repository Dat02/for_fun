
const flickerText = document.getElementById('flicker-text');

setTimeout(() => {
    flickerText.classList.remove('hidden-text-1');
}, 2000); // Remove the flicker animation after 5 seconds


// const flickerText2 = document.getElementById('flicker-text2');

// setTimeout(() => {
//     flickerText2.classList.remove('hidden-text-1');
// }, 5000); // Remove the flicker animation after 5 seconds


// Function to display the iframe in full screen
function displayFullScreenIframe() {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = iframeContainer.querySelector('iframe');

    iframeContainer.style.display = 'block';
    iframe.classList.add('full-screen-iframe');
}

// Set a timeout to display the iframe in full screen after 10 seconds
setTimeout(displayFullScreenIframe, 20000); // 10 seconds
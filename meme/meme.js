// Select the elements on the page that we want to update
const generateBtn = document.querySelector('.generate-button') // Get the 'Generate' button
const memeTitle = document.querySelector('.meme-title') // Get the place where the title will show
const memeImage = document.querySelector('.meme-image') // Get the place where the image will show
const authorOutput = document.querySelector('.author') // Get the place where the author name will show

// Function to get a new meme from the internet
function getMeme() {
  // Fetch the meme data from the API
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json()) // Convert the response into a format we can use (JSON)
    .then((data) => {
      // Get the title, image URL, and author from the data
      const { author, title, url } = data

      // Update the title, image, and author on the page
      memeTitle.innerText = title // Show the title on the page
      memeImage.src = url // Show the meme image on the page
      authorOutput.innerText = `Meme by: ${author}` // Show the author name on the page
    })
}

// Call the function once when the page first loads to show a meme
getMeme()

// Add a click event to the 'Generate' button
generateBtn.addEventListener('click', () => {
  // Call the function to get a new meme when the button is clicked
  getMeme()
})

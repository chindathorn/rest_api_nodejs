# rest_api_nodejs
This is the Restful API with Node.js 

# Install
npm init
  to init the package.json
npm install nodemon
npm install express
npm install mongoose
npm install dotenv
npm install body-parser
// Allow api use accross the domain
npm install cors
  and add middleware

create .env file
create folder routes

# Using
fetch('http://localhost:3000/posts')
.then(result => {
  return result.json()
})
.then(data => {
  console.log(data)
})

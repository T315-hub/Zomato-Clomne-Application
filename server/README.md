# Initial SetUp


cd zomato-clone
mkdir server
cd server
npm i


<!-- dependencies -->
npm install express mongoose dotenv

<!-- dev dependencies -->
npm i --save-dev nodemon @babel/cli, @babel/core and @babel/preset-env @babel/node

# API Planning
- Food (Food items & their details)
- Restaurant (Restaurant & their details)
- Menu (Menu & their details)
- Order (Order & their details)
- Image (Storing all the images related to the zomato)
- Review (Storing all the list of reviews)
- User (User related details, username, email n password)



jwt => JsonWebToken
Session Based Application
        >> tokens
        >> For the 1st time when we visit the application we login or create a acc
                >> at this pt of time -> a new JWT token will be generated
                >> and if we revisit the application after 1 day || 10 day ||10 months .. we don't need to pass the credentials
                        instead while making a req the generated JWT token ill be sent to the server
                 >> JWT will be stored in client or end-users browser (Cookies, localStorage)     

                 >> JWT also has expiration it depends on business perspective (1 day | 10 day || 10 years)  


hash & salting

devtown123$ => hash() => @edrtmkbka$3372y* => salt(5) => hhoabkan@$%$3u1nknk11j

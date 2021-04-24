# Copy the config file to each root project
# This is done because the services are dockerized
configFile='config.json'

cp ./${configFile} ./client/public
cp ./${configFile} ./comments
cp ./${configFile} ./event-bus
cp ./${configFile} ./moderation
cp ./${configFile} ./posts
cp ./${configFile} ./query

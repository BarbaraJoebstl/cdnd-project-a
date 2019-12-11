# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice. This is a part of the [cloud developer basics](https://github.com/BarbaraJoebstl/CDND/tree/master/udagram)

## Run application locally
Initialize a new project: `npm i` and run the development server with `npm run dev`, the default port is `http://localhost:8200`

## Feature
Endpoint to filter and upload images, which uses query parameter to download an image from a public URL,filter the image, and return the result.
try: `try /filteredimage?image_url={{anyimageurl}}`

### Deploying the system
The application is deployed to AWS with the help of elasticbeanstalk cli, using `eb init`, `eb create` and `eb deploy`.
The deployed app can be found [here](http://cdnd-project-a-dev.eu-central-1.elasticbeanstalk.com/)

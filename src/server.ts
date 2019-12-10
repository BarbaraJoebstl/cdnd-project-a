import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  //  app.use('/', IndexRouter);


  app.get("/", async(req: Request, res: Response) => {
    res.send("try /filteredimage?image_url={{anyimageurl}}")
  })

  /**
  * filters an image url and returns the image file
  */
  app.get("/filteredimage", async(req: Request, res: Response) => {
  const imageUrl = req.param('image_url');

  if (!imageUrl) {
    return res.status(400).send(`please provide an url`);
    }

  // call filteredImageFromURL(img_url) to filter the image
  const filteredPath = await filterImageFromURL(imageUrl);

  if (!filteredPath) {
    return res.status(422).send(`we can t find an image.`);
  }

  // send the resulting file in the response
  res.status(200).sendFile(filteredPath);

  // delete file on server
  // await deleteLocalFiles([filteredPath]);

  })

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
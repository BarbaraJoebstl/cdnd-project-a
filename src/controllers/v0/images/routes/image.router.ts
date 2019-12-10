import { Router, Request, Response } from 'express';
import { filterImageFromURL } from '../../../../util/util';

const router: Router = Router();

router.get("/", async(req: Request, res: Response) => {
    res.send("try /filteredimage?image_url={{anyimageurl}}")
})

/**
 * filters an image url and returns the image file
 */
router.get("/filteredimage", async(req: Request, res: Response) => {
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
// deleteLocalFiles([filteredPath]);

})

export const ImageRouter: Router = router;
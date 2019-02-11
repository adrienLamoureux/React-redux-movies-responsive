import * as imageServices from "../../services/images";

// Cf sample at https://developers.themoviedb.org/3/getting-started/images
const sampleImgPath = "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
const sampleImgByteLength = 84092;

it('should get image', done => {
    imageServices.getPictureByPath(sampleImgPath).then((image) => {
        expect(image.data.byteLength).toEqual(sampleImgByteLength);
        done();
    });
});
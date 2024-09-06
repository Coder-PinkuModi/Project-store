import mongoose from "mongoose";

async function mongoDBConnect(url) {
  return await mongoose
    .connect(url)
    .then(() => console.log("MOngoDb connected"))
    .catch((err) => console.log(err));
}

export default mongoDBConnect

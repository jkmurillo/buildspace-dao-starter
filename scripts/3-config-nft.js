import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x166ffC38fe56204aFEfa1B8617744009BDe88E46",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Beach Pass",
        description: "This NFT will give you access to BeachDAO!",
        image: readFileSync("scripts/assets/beach.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
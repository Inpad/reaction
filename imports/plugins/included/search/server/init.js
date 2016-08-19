import faker from "faker";
import { EJSON } from "meteor/ejson";
import { Products } from "/lib/collections";
import { Hooks, Logger } from "/server/api";

Hooks.Events.add("afterCoreInit", () => {
  const existingDoc = Products.find().count();
  if (existingDoc === 4) {
    Logger.info("======> Adding Search Products");
    // noinspection JSUnresolvedVariable
    let productJson = Assets.getText("custom/SearchProducts.json");
    const productData = EJSON.parse(productJson);
    for (let product of productData) {
      // product.title = faker.commerce.productName();
      // product.description = faker.commerce.productAdjective();
      Products.insert(product);
    }
  }
});

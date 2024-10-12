import { defineType, defineField } from "sanity";

export const products= defineType({
    name:"product",
    type: "document",
    title:"Products",
    fields:[
        {
            name: "productTitle",
            title:"Title",
            type: "string"
        },
        {
            name: "productDescription",
            title:"Description",
            type: "string"
        },
        {
            name: "productPrice",
            title:"Price",
            type: "number"
        },
        {
            name: "productImage",
            title:"Image",
            type: "array",
            of:[{type:"image"}]
        },
        {
            name:"productSlug",
            title:"Slug",
            type:"slug"
        },
        {
           name:"productPriceId",  //stripe price Id
           title:"Price_Id",
           type: "string"
        },
        defineField(
        {
            name:"productCategory",
            title: "Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }
    )
    ]
});
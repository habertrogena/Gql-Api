// import schema and models from mongoose
import {Schema , model} from 'mongoose';
// create an interphase that will represent the document in mongoose

interface IBook {
    id?: String,
    author:String,
    title: String,
    year : Number,

}
//create a schema that will represent the document
 const BookSchema = new Schema <IBook> ({
    id: String,
    author:{type:String ,required: true},
    title:{type:String ,required: true},
    year:{type:Number,required: true},

 });

 // create the model.
 // specify the name of the collection
 // pass in the books schema.
 const Book = model<IBook>('books', BookSchema);

 export default Book;
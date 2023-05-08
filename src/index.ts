import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {connect} from 'mongoose';
import Book from '../models/books.js';
// connect to mongodb 
const MONGODB = 'mongodb+srv://habert:habert@cluster0.9bdrhb0.mongodb.net/Books?retryWrites=true&w=majority'
// setup the typedefs for graphql
const typedefs = `#graphql
type Book {
    _id: String
    author:String
    title: String
    year : Int
}

input BookInput {
    author : String
    title: String
    Year : Int
}

type Query {
    getBook(ID:ID!): Book!
    getBooks(limit:Int):[Book]
}

type Mutation{
    createBook(bookInput:BookInput):String!
    updateBook(ID:ID!,bookInput:BookInput):String!
    deleteBook(ID:ID!):String!
}



`
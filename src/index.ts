import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {connect} from 'mongoose';
import Book from '../models/books.js';
// connect to mongodb 
const MONGODB = 'mongodb+srv://habert:habert@cluster0.9bdrhb0.mongodb.net/?retryWrites=true&w=majority'
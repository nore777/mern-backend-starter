import { connect } from "mongoose";

export const connectToDatabase = async (uri: string) => {
  try {
    await connect(uri);
    console.log("Connected to the Database") 
  } catch(error) {
    console.log(error)
    throw error
  }
}
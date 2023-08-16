import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger'

export default async function connect() {
  const dbUri = config.get<string>("dbUri");

  try{
    await mongoose.connect(dbUri);
    logger.info("DB is connected");
    
  } catch(error) {
    logger.error("Could not connect to DB")
    process.exit(1)
  }
}
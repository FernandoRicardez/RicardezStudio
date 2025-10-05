import mongoose, { ConnectOptions } from 'mongoose';

export function mongodbOptions(user: string | null = null, password: string | null = null): ConnectOptions {
  return {
    ...(user && password && {
      user,
      pass: password,
      authSource: 'admin',
    })
  };
}

export function mongodbConnection(host: string, db: string, user: string | null = null, password: string | null = null) {
  const url = `mongodb://${host}/${db}`;
  const options: ConnectOptions = mongodbOptions(user, password);
  mongoose.connect(url, options);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${url}`);
  });

  // If the connection throws an error
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });  
  
  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });



  return mongoose;
}

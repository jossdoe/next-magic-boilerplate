import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  type: {
    type: String,
    required: [true, 'Please provide a type.'],
    maxlength: [20, 'Type cannot be more than 20 characters.'],
  },
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);

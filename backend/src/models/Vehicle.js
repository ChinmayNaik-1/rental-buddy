import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
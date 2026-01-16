import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('rentals'); // 'listings' or 'rentals'
    const [listings, setListings] = useState([]);
    const [activeRentals, setActiveRentals] = useState([]);
    const [history, setHistory] = useState([]);
    const [incomingBookings, setIncomingBookings] = useState([]);
    const [showDeleted, setShowDeleted] = useState(false); // Toggle for soft-deleted listings

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        try {
            if (activeTab === 'listings') {
                const res = await api.get('/vehicles/my-listings');
                setListings(res.data);
                const bookRes = await api.get('/rentals/incoming');
                setIncomingBookings(bookRes.data);
            } else {
                const currentRes = await api.get('/rentals/current');
                setActiveRentals(currentRes.data);
                const historyRes = await api.get('/rentals/history');
                setHistory(historyRes.data);
            }
        } catch (error) {
            console.error("Error fetching data", error);
            toast.error("Failed to load dashboard data");
        }
    };

    const handleReturn = async (rentalId) => {
        try {
            await api.put(`/rentals/${rentalId}/return`);
            toast.success("Vehicle returned successfully!");
            fetchData(); // Refresh
        } catch (error) {
            toast.error("Failed to return vehicle");
        }
    };

    const handleDelete = async (vehicleId) => {
        if (!window.confirm("Are you sure you want to delete this listing?")) return;
        try {
            await api.delete(`/vehicles/${vehicleId}`);
            toast.success("Vehicle deleted successfully");
            fetchData();
        } catch (error) {
            toast.error("Failed to delete vehicle");
        }
    };

    const handleRelist = async (vehicleId) => {
        if (!window.confirm("Are you sure you want to relist this vehicle?")) return;
        try {
            await api.put(`/vehicles/${vehicleId}`, { isDeleted: false, isAvailable: true });
            toast.success("Vehicle relisted successfully!");
            fetchData();
        } catch (error) {
            toast.error("Failed to relist vehicle");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto p-4 flex-grow">
                <h1 className="text-3xl font-bold mb-6">Welcome, {user?.fullName}</h1>

                <div className="flex border-b mb-6">
                    <button
                        className={`mr-4 pb-2 ${activeTab === 'rentals' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                        onClick={() => setActiveTab('rentals')}
                    >
                        My Rentals
                    </button>
                    <button
                        className={`pb-2 ${activeTab === 'listings' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                        onClick={() => setActiveTab('listings')}
                    >
                        My Listings (Owner)
                    </button>
                </div>

                {activeTab === 'rentals' ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Active Rentals</h2>
                        {activeRentals.length === 0 ? <p className="text-gray-500">No active rentals.</p> : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {activeRentals.map(rental => (
                                    <div key={rental._id} className="border p-4 rounded shadow">
                                        <h3 className="font-bold">{rental.vehicleId.name}</h3>
                                        {rental.vehicleId.isDeleted && <span className="block text-red-500 text-xs font-semibold">Vehicle no longer listed</span>}
                                        <p>Owner: {rental.ownerId.fullName}</p>
                                        <p>Until: {new Date(rental.endDate).toLocaleDateString()}</p>
                                        <button
                                            onClick={() => handleReturn(rental._id)}
                                            className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                        >
                                            Return Vehicle
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <h2 className="text-xl font-semibold mb-4 mt-8">Rental History</h2>
                        {history.length === 0 ? <p className="text-gray-500">No history yet.</p> : (
                            <ul className="list-disc pl-5">
                                {history.map(rental => (
                                    <li key={rental._id} className="mb-2">
                                        <span className="font-bold">{rental.vehicleId.name}</span>
                                        {rental.vehicleId.isDeleted && <span className="text-red-500 text-xs ml-2">(Vehicle no longer listed)</span>}
                                        - Returned on {new Date(rental.actualReturnDate).toLocaleDateString()}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">My Vehicles</h2>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={showDeleted}
                                        onChange={(e) => setShowDeleted(e.target.checked)}
                                        className="checkbox checkbox-sm checkbox-primary"
                                    />
                                    <span>Show Deleted Vehicles</span>
                                </label>
                                <Link to="/create-listing" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                    + Add Vehicle
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {listings.filter(v => showDeleted || !v.isDeleted).map(vehicle => (
                                <div key={vehicle._id} className={`border p-4 rounded shadow ${vehicle.isDeleted ? 'bg-gray-100 opacity-75' : ''}`}>
                                    <h3 className="font-bold">{vehicle.name}</h3>
                                    {vehicle.isDeleted ? (
                                        <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Deleted</span>
                                    ) : (
                                        <>
                                            <p>₹{vehicle.price}/day</p>
                                            <p className={`text-sm ${vehicle.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                                                {vehicle.isAvailable ? 'Available' : 'Rented Out'}
                                            </p>
                                        </>
                                    )}

                                    {vehicle.isDeleted ? (
                                        <div className="mt-2">
                                            <p className="text-gray-500 text-xs mb-2">This vehicle is hidden from public listings.</p>
                                            <button
                                                onClick={() => handleRelist(vehicle._id)}
                                                className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
                                            >
                                                Relist Vehicle
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-4 mt-2">
                                            <Link to={`/edit-listing/${vehicle._id}`} className="text-blue-500 hover:underline text-sm font-semibold">Edit Listing</Link>
                                            <button onClick={() => handleDelete(vehicle._id)} className="text-red-500 hover:underline text-sm font-semibold">Delete</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold mb-4 border-t pt-4">Incoming Bookings</h2>
                        {incomingBookings.length === 0 ? <p className="text-gray-500">No active bookings for your vehicles.</p> : (
                            <div className="grid grid-cols-1 gap-4">
                                {incomingBookings.map(rental => (
                                    <div key={rental._id} className="bg-gray-50 p-3 rounded">
                                        <p><strong>{rental.vehicleId.name}</strong> is rented by <strong>{rental.renterId.fullName}</strong> ({rental.renterId.phoneNumber}) until {new Date(rental.endDate).toLocaleDateString()}.</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;

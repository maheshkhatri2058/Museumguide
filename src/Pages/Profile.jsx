import React, { useState } from 'react';

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    tickets: [
      { date: '2024-12-10', museum: 'Modern Art Museum', ticketId: 'A1234' },
      { date: '2024-12-05', museum: 'History Museum', ticketId: 'B5678' },
    ],
    favoriteMuseums: ['Art Museum of the World', 'National History Museum'],
  });

  // Suggested Museums
  const suggestedMuseums = [
    'Museum of Modern Art',
    'Natural History Museum',
    'The Louvre',
    'British Museum',
    'Vatican Museums',
  ];

  // Handle ticket deletion
  const handleDeleteTicket = (ticketId) => {
    const updatedTickets = user.tickets.filter(ticket => ticket.ticketId !== ticketId);
    setUser(prevUser => ({ ...prevUser, tickets: updatedTickets }));
  };

  // Add a museum to favorites
  const handleAddFavoriteMuseum = (museum) => {
    if (!user.favoriteMuseums.includes(museum)) {
      setUser(prevUser => ({
        ...prevUser,
        favoriteMuseums: [...prevUser.favoriteMuseums, museum],
      }));
    }
  };

  // Remove a museum from favorites
  const handleRemoveFavoriteMuseum = (museum) => {
    const updatedFavorites = user.favoriteMuseums.filter(favMuseum => favMuseum !== museum);
    setUser(prevUser => ({
      ...prevUser,
      favoriteMuseums: updatedFavorites,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Responsive Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center container mx-auto">
          <a href="/" className="text-white text-xl font-semibold">MuseumTicket</a>
          <ul className="hidden md:flex space-x-6 text-xl font-semibold">
            <li><a href="/profile" className="text-white">Profile</a></li>
            <li><a href="/profile" className="text-white">My Dashboard</a></li>
          </ul>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="w-[100%] mx-auto bg-white rounded-lg  p-10">

        {/* Profile Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">User Profile</h1>
        </div>

        {/* User Info */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-2 text-lg">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-2 text-lg">{user.email}</p>
          </div>
        </div>

        {/* Last Booked Ticket History */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
          <div className="space-y-4">
            {user.tickets.length > 0 ? (
              user.tickets.map((ticket, index) => (
                <div
                  key={ticket.ticketId}
                  className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-700">{ticket.museum}</p>
                    <p className="text-gray-500 text-sm">Date: {ticket.date}</p>
                  </div>
                  <div className="flex space-x-4">
                    <span className="text-gray-400 text-sm">Ticket ID: {ticket.ticketId}</span>
                    <button
                      onClick={() => handleDeleteTicket(ticket.ticketId)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">You have no booking history yet.</p>
            )}
          </div>
        </div>

        {/* Suggested Museums */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Suggested Museums</h2>
          <div className="space-y-2">
            {suggestedMuseums.map((museum, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md shadow-md">
                <p className="text-lg font-medium text-gray-700">{museum}</p>
                <button
                  onClick={() => handleAddFavoriteMuseum(museum)}
                  className="bg-green-500 text-white px-4 py-1 rounded-md text-sm"
                >
                  Add to Favorites
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Museums */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Favorite Museums</h2>
          <div className="space-y-2">
            {user.favoriteMuseums.length > 0 ? (
              user.favoriteMuseums.map((museum, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md shadow-md">
                  <p className="text-lg font-medium text-gray-700">{museum}</p>
                  <button
                    onClick={() => handleRemoveFavoriteMuseum(museum)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No favorite museums added yet.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;

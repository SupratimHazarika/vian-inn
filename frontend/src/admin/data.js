export const stats = [
  { label: 'Occupancy today', value: '63%', hint: '5 of 8 rooms' },
  { label: 'Arrivals', value: '6', hint: 'Check-in from 12:00' },
  { label: 'Departures', value: '4', hint: 'Check-out by 11:00' },
  { label: 'Kitchen covers', value: '28', hint: 'Lunch + dinner' },
]

export const bookings = [
  { id: 'VN-1042', guest: 'Debabrata Sen', room: 'Deluxe Twin 201', dates: '9–11 Sep', nights: 2, amount: '₹3,934', status: 'Arriving' },
  { id: 'VN-1041', guest: 'Rachel Cole', room: 'Deluxe Double 204', dates: '8–10 Sep', nights: 2, amount: '₹3,934', status: 'In house' },
  { id: 'VN-1040', guest: 'Hewett Park', room: 'Deluxe Double 102', dates: '8–9 Sep', nights: 1, amount: '₹1,967', status: 'In house' },
  { id: 'VN-1039', guest: 'Tapash Baruah', room: 'Deluxe Twin 203', dates: '7–10 Sep', nights: 3, amount: '₹5,901', status: 'In house' },
  { id: 'VN-1038', guest: 'Stefan Lind', room: 'Deluxe Twin 105', dates: '6–9 Sep', nights: 3, amount: '₹5,901', status: 'Departing' },
  { id: 'VN-1037', guest: 'Mitesh Shah', room: 'Deluxe Double 206', dates: '10–12 Sep', nights: 2, amount: '₹3,934', status: 'Confirmed' },
  { id: 'VN-1036', guest: 'Parijat Das', room: 'Deluxe Twin 101', dates: '5–8 Sep', nights: 3, amount: '₹5,901', status: 'Checked out' },
]

export const rooms = [
  { no: '101', type: 'Deluxe Twin', floor: '1st', status: 'Vacant', guest: '—' },
  { no: '102', type: 'Deluxe Double', floor: '1st', status: 'Occupied', guest: 'Hewett Park' },
  { no: '103', type: 'Deluxe Twin', floor: '1st', status: 'Cleaning', guest: '—' },
  { no: '105', type: 'Deluxe Twin', floor: '1st', status: 'Departing', guest: 'Stefan Lind' },
  { no: '201', type: 'Deluxe Twin', floor: '2nd', status: 'Arriving', guest: 'Debabrata Sen' },
  { no: '203', type: 'Deluxe Twin', floor: '2nd', status: 'Occupied', guest: 'Tapash Baruah' },
  { no: '204', type: 'Deluxe Double', floor: '2nd', status: 'Occupied', guest: 'Rachel Cole' },
  { no: '206', type: 'Deluxe Double', floor: '2nd', status: 'Vacant', guest: '—' },
]

export const tables = [
  { time: '1:00 PM', name: 'Hasnain Ali', pax: 2, note: 'Window booth', status: 'Seated' },
  { time: '1:30 PM', name: 'Walk-in', pax: 3, note: 'Chilli chicken', status: 'Seated' },
  { time: '7:30 PM', name: 'Bidintha Boro', pax: 2, note: 'After check-in', status: 'Reserved' },
  { time: '8:00 PM', name: 'Santosh', pax: 4, note: 'Family, veg + non-veg', status: 'Reserved' },
  { time: '8:30 PM', name: 'Room 204', pax: 2, note: 'In-room dinner', status: 'Kitchen' },
]

export const guests = [
  { name: 'Rachel Cole', from: 'United Kingdom', stays: 1, last: '8 Sep 2026', note: 'Early train tomorrow' },
  { name: 'Debabrata Sen', from: 'Kolkata', stays: 6, last: 'Repeat guest', note: 'Always asks for twin 201' },
  { name: 'Hewett Park', from: 'Australia', stays: 1, last: '8 Sep 2026', note: 'Kamakhya morning' },
  { name: 'Tapash Baruah', from: 'Guwahati', stays: 2, last: '7 Sep 2026', note: 'Local ID' },
  { name: 'Stefan Lind', from: 'Sweden', stays: 1, last: '6 Sep 2026', note: 'Checkout 11:00' },
]

export const gallery = [
  { src: '/images/hero-lobby.jpg', label: 'Lobby door', used: 'Hero · Gallery' },
  { src: '/images/brand-sign.jpg', label: 'Brand sign', used: 'Contact' },
  { src: '/images/deluxe-twin.jpg', label: 'Deluxe Twin', used: 'Rooms · Gallery' },
  { src: '/images/twin-wardrobe.jpg', label: 'Wardrobe & TV', used: 'Gallery' },
  { src: '/images/deluxe-double.jpg', label: 'Deluxe Double', used: 'Rooms · Gallery' },
  { src: '/images/dining-hall.jpg', label: 'Dining hall', used: 'Dining · Gallery' },
  { src: '/images/attached-bath.jpg', label: 'Attached bath', used: 'Gallery' },
  { src: '/images/kitchen.jpg', label: 'Kitchen angle', used: 'Unused' },
]

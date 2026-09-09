import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '@/admin/AdminLayout'
import { Bookings } from '@/admin/pages/Bookings'
import { GalleryAdmin } from '@/admin/pages/GalleryAdmin'
import { Guests } from '@/admin/pages/Guests'
import { Kitchen } from '@/admin/pages/Kitchen'
import { AdminLogin } from '@/admin/pages/Login'
import { Overview } from '@/admin/pages/Overview'
import { RoomsAdmin } from '@/admin/pages/RoomsAdmin'
import { Settings } from '@/admin/pages/Settings'
import { HomePage } from '@/pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Overview />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<RoomsAdmin />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="guests" element={<Guests />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

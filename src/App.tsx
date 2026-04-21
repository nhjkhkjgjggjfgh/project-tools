import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { JSONFormatter } from '@/pages/JSONFormatter'
import { Base64Converter } from '@/pages/Base64Converter'
import { UUIDGenerator } from '@/pages/UUIDGenerator'
import { PasswordGenerator } from '@/pages/PasswordGenerator'
import { GradientGenerator } from '@/pages/GradientGenerator'
import { URLEncoder } from '@/pages/URLEncoder'
import { TextTools } from '@/pages/TextTools'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/json-formatter" element={<JSONFormatter />} />
        <Route path="/tools/base64-converter" element={<Base64Converter />} />
        <Route path="/tools/uuid-generator" element={<UUIDGenerator />} />
        <Route path="/tools/password-generator" element={<PasswordGenerator />} />
        <Route path="/tools/gradient-generator" element={<GradientGenerator />} />
        <Route path="/tools/url-encoder" element={<URLEncoder />} />
        <Route path="/tools/text-tools" element={<TextTools />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

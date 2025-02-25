import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@ant-design/v5-patch-for-react-19';
import './assets/styles/index.css';

createRoot(document.getElementById('root')).render(<App />);
